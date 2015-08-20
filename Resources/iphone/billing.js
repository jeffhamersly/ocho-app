function showLoading() {
    loadingCount += 1;
    1 == loadingCount && loading.show();
}

function hideLoading() {
    if (loadingCount > 0) {
        loadingCount -= 1;
        0 == loadingCount && loading.hide();
    }
}

function isIOS7Plus() {
    var version = Titanium.Platform.version.split(".");
    var major = parseInt(version[0], 10);
    if (major >= 7) return true;
    return false;
}

function markProductAsPurchased(identifier) {
    Ti.API.info("Marking as purchased: " + identifier);
    tempPurchasedStore[identifier] = true;
    Ti.App.Properties.setBool("Purchased-" + identifier, true);
}

function checkIfProductPurchased(identifier) {
    Ti.API.info("Checking if purchased: " + identifier);
    void 0 === tempPurchasedStore[identifier] && (tempPurchasedStore[identifier] = Ti.App.Properties.getBool("Purchased-" + identifier, false));
    return tempPurchasedStore[identifier];
}

function requestProduct(identifier, success) {
    showLoading();
    Storekit.requestProducts([ identifier ], function(evt) {
        hideLoading();
        evt.success ? evt.invalid ? alert("ERROR: We requested an invalid product!") : success(evt.products[0]) : alert("ERROR: We failed to talk to Apple!");
    });
}

function purchaseProduct(product) {
    product.downloadable && Ti.API.info("Purchasing a product that is downloadable");
    showLoading();
    Storekit.purchase({
        product: product
    });
}

function restorePurchases() {
    showLoading();
    Storekit.restoreCompletedTransactions();
}

exports.makePurchase = function(item) {
    Storekit.addTransactionObserver();
    IOS7 && win.addEventListener("open", function() {
    });
    Storekit.canMakePayments ? requestProduct(item, function(product) {
        purchaseProduct(product);
    }) : alert("This device cannot make purchases!");
};

exports.checkPurchase = function(item) {
    if (Storekit.canMakePayments) return checkIfProductPurchased(item);
    alert("This device cannot make purchases!");
};

var Storekit = require("ti.storekit");

Storekit.autoFinishTransactions = true;

Storekit.bundleVersion = "1.0.0";

Storekit.bundleIdentifier = "com.lotteryegg.lotteryegg";

var verifyingReceipts = false;

var win = Ti.UI.createWindow({
    backgroundColor: "#fff"
});

var loading = Ti.UI.createActivityIndicator({
    bottom: 10,
    height: 50,
    width: 50,
    backgroundColor: "black",
    borderRadius: 10,
    style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG
});

var loadingCount = 0;

win.add(loading);

var tempPurchasedStore = {};

var IOS7 = isIOS7Plus();

Storekit.addEventListener("transactionState", function(evt) {
    hideLoading();
    switch (evt.state) {
      case Storekit.TRANSACTION_STATE_FAILED:
        alert(evt.cancelled ? "Purchase cancelled" : "ERROR: Buying failed! " + evt.message);
        evt.transaction && evt.transaction.finish();
        break;

      case Storekit.TRANSACTION_STATE_PURCHASED:
        if (verifyingReceipts) if (IOS7) {
            var msg = Storekit.validateReceipt() ? "Receipt is Valid!" : "Receipt is Invalid.";
            alert(msg);
        } else Storekit.verifyReceipt(evt, function(e) {
            if (e.success) if (e.valid) {
                alert("Thanks! Receipt Verified");
                markProductAsPurchased(evt.productIdentifier);
            } else alert("Sorry. Receipt is invalid"); else alert(e.message);
        }); else {
            markProductAsPurchased(evt.productIdentifier);
            Alloy.Globals.settings.close();
        }
        evt.downloads ? Storekit.startDownloads({
            downloads: evt.downloads
        }) : evt.transaction && evt.transaction.finish();
        break;

      case Storekit.TRANSACTION_STATE_PURCHASING:
        Ti.API.info("Purchasing " + evt.productIdentifier);
        break;

      case Storekit.TRANSACTION_STATE_RESTORED:
        Ti.API.info("Restored " + evt.productIdentifier);
        evt.downloads && Ti.API.info("Downloads available for restored product");
        evt.transaction && evt.transaction.finish();
    }
});

Storekit.addEventListener("restoredCompletedTransactions", function(evt) {
    hideLoading();
    if (evt.error) alert(evt.error); else if (null == evt.transactions || 0 == evt.transactions.length) alert("There were no purchases to restore!"); else {
        IOS7 && verifyingReceipts && (Storekit.validateReceipt() ? Ti.API.info("Restored Receipt is Valid!") : Ti.API.error("Restored Receipt is Invalid."));
        for (var i = 0; i < evt.transactions.length; i++) !IOS7 && verifyingReceipts ? Storekit.verifyReceipt(evt.transactions[i], function(e) {
            e.valid ? markProductAsPurchased(e.productIdentifier) : Ti.API.error("Restored transaction is not valid");
        }) : markProductAsPurchased(evt.transactions[i].productIdentifier);
        alert("Restored " + evt.transactions.length + " purchases!");
    }
});