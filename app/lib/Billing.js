


exports.makePurchase = function(item){
 
     Storekit.addTransactionObserver();
    
    if (IOS7) {
        win.addEventListener('open', function() {
            function validate() {
                Ti.API.info('Validating receipt.');
                Ti.API.info('Receipt is Valid: ' + Storekit.validateReceipt());
            }
            
           
        });
    }
     
    //Can the user make payments? Their device may be locked down, or this may be a simulator.
     
    if (!Storekit.canMakePayments)
        alert('This device cannot make purchases!');
    else {
    
        requestProduct(item, function (product) {
           purchaseProduct(product)
        });
    }
};


// did they already pay?succes
exports.checkPurchase = function(item){
    
    if (!Storekit.canMakePayments)
        alert('This device cannot make purchases!');
    else {
    
       return checkIfProductPurchased(item);
    }
    
};



          // setting up the store kit
        
        var Storekit = require('ti.storekit');
        
        //setting this to true because I'm not using hosted downloads
        Storekit.autoFinishTransactions = true;
        
        //BundleVersion and bundleIdentifier must be set before calling validateReceipt().
        Storekit.bundleVersion = "1.0.0"; // eg. "1.0.0"
        Storekit.bundleIdentifier = "com.lotteryegg.lotteryegg"; // eg. "com.appc.storekit"
        
        var verifyingReceipts = false;
  
        var win = Ti.UI.createWindow({
            backgroundColor:'#fff'
        });
        
        //We want to show the user when we're communicating with the server, so let's define two simple functions that interact with an activity indicator.
               
        var loading = Ti.UI.createActivityIndicator({
            bottom:10, height:50, width:50,
            backgroundColor:'black', borderRadius:10,
            style:Ti.UI.iPhone.ActivityIndicatorStyle.BIG
        });
        
        var loadingCount = 0;
        
        function showLoading()
        {
            loadingCount += 1;
            if (loadingCount == 1) {
                loading.show();
            }
        }
        
        function hideLoading()
        {
            if (loadingCount > 0) {
                loadingCount -= 1;
                if (loadingCount == 0) {
                    loading.hide();
                }
            }
        }
        win.add(loading);
        
        
        
        
        var tempPurchasedStore = {};
    
    
        
/**
 * Tells us if the version of iOS we are running on is iOS 7 or later
 */
function isIOS7Plus()
{
    if (Titanium.Platform.name == 'iPhone OS')
    {
        var version = Titanium.Platform.version.split(".");
        var major = parseInt(version[0],10);

        // can only test this support on a 3.2+ device
        if (major >= 7)
        {
            return true;
        }
    }
    return false;

}
var IOS7 = isIOS7Plus();
 
/**
 * Keeps track (internally) of purchased products.
 * @param identifier The identifier of the Ti.Storekit.Product that was purchased.
 */
function markProductAsPurchased(identifier)
{
    Ti.API.info('Marking as purchased: ' + identifier);
    // Store it in an object for immediate retrieval.
    tempPurchasedStore[identifier] = true;
    // And in to Ti.App.Properties for persistent storage.
    Ti.App.Properties.setBool('Purchased-' + identifier, true);
}
 
/**
 * Checks if a product has been purchased in the past, based on our internal memory.
 * @param identifier The identifier of the Ti.Storekit.Product that was purchased.
 */
function checkIfProductPurchased(identifier)
{
    Ti.API.info('Checking if purchased: ' + identifier);
    if (tempPurchasedStore[identifier] === undefined)
        tempPurchasedStore[identifier] = Ti.App.Properties.getBool('Purchased-' + identifier, false);
    return tempPurchasedStore[identifier];
}
 
/**
 * Requests a product. Use this to get the information you have set up in iTunesConnect, like the localized name and
 * price for the current user.
 * @param identifier The identifier of the product, as specified in iTunesConnect.
 * @param success A callback function.
 * @return A Ti.Storekit.Product.
 */
function requestProduct(identifier, success)
{
    showLoading();
    Storekit.requestProducts([identifier], function (evt) {
        hideLoading();
        if (!evt.success) {
            alert('ERROR: We failed to talk to Apple!');
        }
        else if (evt.invalid) {
            alert('ERROR: We requested an invalid product!');
        }
        else {
            success(evt.products[0]);
        }
    });
}
 
/**
 * Purchases a product.
 * @param product A Ti.Storekit.Product (hint: use Storekit.requestProducts to get one of these!).
 */
Storekit.addEventListener('transactionState', function (evt) {
    hideLoading();
    switch (evt.state) {
        case Storekit.TRANSACTION_STATE_FAILED:
            if (evt.cancelled) {
                alert('Purchase cancelled');
            } else {
                alert('ERROR: Buying failed! ' + evt.message);
            }
            evt.transaction && evt.transaction.finish();
            break;
        case Storekit.TRANSACTION_STATE_PURCHASED:
            if (verifyingReceipts) {
                if (IOS7) {
                    // iOS 7 Plus receipt validation is just as secure as pre iOS 7 receipt verification, but is done entirely on the device.
                    var msg = Storekit.validateReceipt() ? 'Receipt is Valid!' : 'Receipt is Invalid.'; 
                    alert(msg);
                } else {
                    // Pre iOS 7 receipt verification
                    Storekit.verifyReceipt(evt, function (e) {
                        if (e.success) {
                            if (e.valid) {
                                alert('Thanks! Receipt Verified');
                                markProductAsPurchased(evt.productIdentifier);
                            } else {
                                alert('Sorry. Receipt is invalid');
                            }
                        } else {
                            alert(e.message);
                        }
                    }); 
                }
            } else {
                markProductAsPurchased(evt.productIdentifier);
                
                Alloy.Globals.settings.close();
                
            }
            
            // If the transaction has hosted content, the downloads property will exist
            // Downloads that exist in a PURCHASED state should be downloaded immediately, because they were just purchased.
            if (evt.downloads) {
                Storekit.startDownloads({
                    downloads: evt.downloads
                });
            } else {
                // Do not finish the transaction here if you wish to start the download associated with it.
                // The transaction should be finished when the download is complete.
                // Finishing a transaction before the download is finished will cancel the download.
                evt.transaction && evt.transaction.finish();
            }
            
            break;
        case Storekit.TRANSACTION_STATE_PURCHASING:
            Ti.API.info('Purchasing ' + evt.productIdentifier);
            break;
        case Storekit.TRANSACTION_STATE_RESTORED:
            // The complete list of restored products is sent with the `restoredCompletedTransactions` event
            Ti.API.info('Restored ' + evt.productIdentifier);
            // Downloads that exist in a RESTORED state should not necessarily be downloaded immediately. Leave it up to the user.
            if (evt.downloads) {
                Ti.API.info('Downloads available for restored product');
            }
            
            evt.transaction && evt.transaction.finish();
            break;
    }
});
function purchaseProduct(product)
{
    if (product.downloadable) {
        Ti.API.info('Purchasing a product that is downloadable');
    }
    showLoading();
    Storekit.purchase({
        product: product
        // applicationUsername is a opaque identifier for the user’s account on your system. 
        // Used by Apple to detect irregular activity. Should hash the username before setting.
        // applicationUsername: '<HASHED APPLICATION USERNAME>'
    });
}
 
/**
 * Restores any purchases that the current user has made in the past, but we have lost memory of.
 */
function restorePurchases()
{
    showLoading();
    Storekit.restoreCompletedTransactions();
}
Storekit.addEventListener('restoredCompletedTransactions', function (evt) {
    hideLoading();
    if (evt.error) {
        alert(evt.error);
    }
    else if (evt.transactions == null || evt.transactions.length == 0) {
        alert('There were no purchases to restore!');
    }
    else {
        if (IOS7 && verifyingReceipts) {
            if (Storekit.validateReceipt()) {
                Ti.API.info('Restored Receipt is Valid!');
            } else {
                Ti.API.error('Restored Receipt is Invalid.');
            } 
        }
        for (var i = 0; i < evt.transactions.length; i++) {
            if (!IOS7 && verifyingReceipts) {
                Storekit.verifyReceipt(evt.transactions[i], function (e) {
                    if (e.valid) {
                        markProductAsPurchased(e.productIdentifier);
                    } else {
                        Ti.API.error("Restored transaction is not valid");
                    }
                });
            } else {
                markProductAsPurchased(evt.transactions[i].productIdentifier);
            }
        }
        alert('Restored ' + evt.transactions.length + ' purchases!');
    }
});
 

 



