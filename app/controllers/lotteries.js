




function getLottery(country, region){
   
 
   
    // clear table data
    var tableData = [];
    
    var url = "https://app.lotteryegg.com/lotteries";


    
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {

    json = JSON.parse(this.responseText);

    var length = 0;
  

if(!country){
    
    $.back.setText('');
    
    
    Alloy.Globals.Location = 'country';
    Alloy.Globals.newloc = 'country';

    var lotteries = lookForUnique(json);
    var totalLotteries = lotteries.length;
    
    
    for (var j=0; j<totalLotteries; j++){   
            
       length++;
       
       var background = (length%2) ? "#f4f4f4" : "#ffffff";
       
       var row = Ti.UI.createTableViewRow({
            backgroundColor: background,
            width: Ti.UI.FILL
        });
    
        $.addClass(row, "countryRow");
        
        var wrapper = Ti.UI.createView({
            layout: 'horizontal',
            left: '10%',
            width: '90%',
           
        });
           
           
            //create counter
        var rowCount = Ti.UI.createLabel({
            text: length
        });
        
        //assign class 
        $.addClass(rowCount, "countRow");
        
        //add to view
        row.add(rowCount);
            
            
           
        //create country list - this is where we will need to check if the country is unique or not
        
        var countryList = Ti.UI.createLabel({
               
                text: lotteries[j], 
                
        });
        
       
        
        $.addClass(countryList, "countryList");
             
        //add ball to row
        wrapper.add(countryList);

        //add the wrapper to the row
        row.add(wrapper);
         
         //push the row to table      
        tableData.push(row);
    }
      
    //push the data to the table     
    $.table.setData(tableData);
    
     // top border
  $.table.add(Ti.UI.createView({
    top: 0,
    height: 1,
    backgroundColor: '#cacbca',
     }));
}else if(country == "USA" && !region){
    
    $.back.setText('< choose country');
  
    $.back.addEventListener('singletap', function(e) {
    
        getLottery();        
        
    });
  
    Alloy.Globals.Location = 'region';
    Alloy.Globals.newloc = 'usa';
    
   
    var lotteries = lookForUnique(json, "region");
    Ti.API.info(lotteries);
    var totalLotteries = lotteries.length;
    
    
    for (var j=0; j<totalLotteries; j++){   
       
       var lotteryRegion = json[j].region;
       
       if(lotteryRegion){ 
                
       length++;
       
       var background = (length%2) ? "#f4f6f5" : "#ffffff";
       
       var row = Ti.UI.createTableViewRow({
            backgroundColor: background,
            width: Ti.UI.FILL
        });
    
        $.addClass(row, "countryRow");
        
        var wrapper = Ti.UI.createView({
            layout: 'horizontal',
            left: '10%',
            width: '90%',
           
        });
           
           
            //create counter
        var rowCount = Ti.UI.createLabel({
            text: length
        });
        
        //assign class 
        $.addClass(rowCount, "countRow");
        
        //add to view
        row.add(rowCount);
            
            
           
        //create country list - this is where we will need to check if the country is unique or not
        
        var countryList = Ti.UI.createLabel({
               
                text: lotteries[j], 
                
        });
        
       
        
        $.addClass(countryList, "countryList");
             
        //add ball to row
        wrapper.add(countryList);

        //add the wrapper to the row
        row.add(wrapper);
         
         //push the row to table      
        tableData.push(row);
        }
    }
      
    
    //push the data to the table     
    $.table.setData(tableData);
      $.table.scrollToTop();
}else{
 
    $.back.setText('< back');
     $.back.addEventListener('singletap', function(e) {
        
        $.table.setData(tableData);
        getLottery();        
        
    });


    Alloy.Globals.Location = 'lottery';
    
       
    
    // If user has selected a country.. 
    
    //get all of the lotteries
    var totalLotteries = json.length;
    
    //sidebar count to 0
    var length = 0;
    
    for (var j=0; j<totalLotteries; j++){ 
        
         var lotteryName = json[j].name;
         var lotteryConfig = json[j].config;
         var lotteryCountry = json[j].country;
         var lotteryRegion = json[j].region;
         
         if(lotteryCountry == country){
             

                
                
                length++;
       
               var background = (length%2) ? "#f4f6f5" : "#ffffff";
               
               var row = Ti.UI.createTableViewRow({
                    backgroundColor: background,
                    width: Ti.UI.FILL
                });
            
                $.addClass(row, "countryRow");
                
                var wrapper = Ti.UI.createView({
                    layout: 'horizontal',
                    left: '10%',
                    width: '90%',
                   
                });
                   
                   
                    //create counter
                var rowCount = Ti.UI.createLabel({
                    text: length
                });
                
                //assign class 
                $.addClass(rowCount, "countRow");
                
                //add to view
                row.add(rowCount);
               
               
                    
               if(region){
                  
        // If user has selected a region..
        
        //only show lottery if it matches the region
                     if(lotteryRegion == region){
                         
                        
                       var lotteryList = Ti.UI.createLabel({
                           
                            text: lotteryName, 
                            layout: lotteryConfig,
                        });
                        
                        $.addClass(lotteryList, "countryList");
                             
                        //add ball to row
                        wrapper.add(lotteryList);
                
                        //add the wrapper to the row
                        row.add(wrapper);
                        
                        
                        //push the row to table      
                        tableData.push(row);
                     }
        
                }else{
                
                var lotteryList = Ti.UI.createLabel({
                           
                        text: lotteryName, 
                        layout: lotteryConfig,
                });
                
                $.addClass(lotteryList, "countryList");
                     
                //add ball to row
                wrapper.add(lotteryList);
        
                //add the wrapper to the row
                row.add(wrapper);
                
                //push the row to table      
                tableData.push(row);
              }
               
                 
               
          }
    }
      
    //push the data to the table     
    $.table.setData(tableData);

}

 },
    onerror: function(e) {
        // this function is called when an error occurs, including a timeout
        Ti.API.info(e.error);
        alert('Please Try Again');
    },
    timeout:5000  /* in milliseconds */ 
});

xhr.open("GET", url);
xhr.send();  // request is actually sent with this statement



}

//function for unique

function lookForUnique(data, region){
    
    
    var countries = [];
    if(region){
        for (var j=0; j<data.length; j++){
            
            // remove empty regions
            if(data[j].region != ""){
                countries.push(data[j].region);
            }
        }
    countries = _.uniq(countries, false);
    
    //sorting countries alphebetically
    countries.sort();
    
    
    return countries;
    }else{
        for (var j=0; j<data.length; j++){
            countries.push(data[j].country);
        }   
        countries = _.uniq(countries, false);
        //add usa / uk to top of list
        countries.sort();
        countries.unshift("USA","United Kingdom");
        return countries;
    }
    
}


$.friesTap.addEventListener('singletap', function(e) {
     
    // do something productive
     $.settings.close();
});


$.hamburgerTap.addEventListener('singletap', function(e) {
     
     $.settings.close(); 
});
$.footer.addEventListener('singletap', function(e) {
    getLottery(); 
});


// Do something when a country is clicked
$.table.addEventListener("click", function(e) {
    e.rowData.backgroundColor = '#949fab';
    
    //check to see if we are looking at countries or lotteries (regions will be here soon)
    if(Alloy.Globals.Location == 'country'){
    
       //set a varieable that stores the Country of the row that was just clicked
       var clickedCountry = e.rowData.children[1].children[0].text;
       
       //Look for the lotteries in that Country.
       getLottery(clickedCountry);
       
       Alloy.Globals.Location = 'country'
       
       
    }else if(Alloy.Globals.Location == 'region'){
        
           //set a varieable that stores the Country of the row that was just clicked
       var clickedRegion = e.rowData.children[1].children[0].text;
       
       //Look for the lotteries in that Country.
       getLottery("USA", clickedRegion);
    
    }else if(Alloy.Globals.Location == 'lottery'){
        
        
        //I stored the game rules in the "layout" section of the Label.. I'll need to break this out probably. But this works for now.
        var text = e.rowData.children[1].children[0].layout;
        
        //fancy regex get's the numbers for the game rules
        var pattern = '([0-9]*)x([0-9]*)\.([0-9]*)x([0-9]*)';
        var matches = text.match(pattern);
        
        //number of white ball draws
        Alloy.Globals.numWhiteBalls = matches[1];
        
        //total number of balls in pool
        Alloy.Globals.numWhiteMax = matches[2];
        
        //is powerball enabled?
        Alloy.Globals.powerBall = matches[3];
        
        //how many powerballs are there?
        Alloy.Globals.numPowerMax = matches[4]; 
        
        //Set title of game from label that was clicked
        Alloy.Globals.navTitle.setText(e.rowData.children[1].children[0].text);
        
        //Make font smaller for longer text
        if(e.rowData.children[1].children[0].text.length > 16){
            Alloy.Globals.navTitle.setFont({fontSize:12});   
        }else{
            Alloy.Globals.navTitle.setFont({fontSize:18});   
        }
        
        // call the get picks function 
        Alloy.Globals.numbers.getPicks(Alloy.Globals.numWhiteBalls,Alloy.Globals.numWhiteMax,Alloy.Globals.numRows,Alloy.Globals.powerBall,Alloy.Globals.numPowerMax);
      
        //close the window, revealing the picks
        $.settings.close();
        
    }
   
    
    setTimeout(function(evt) {
        e.rowData.backgroundColor = "transparent";
    }, 500);
});

$.footer.addEventListener('singletap', function(e) {
    
     Alloy.createController('settings').getView().open();
    $.settings.close();
    
    
});



//Checking if it's the first time (show usa), if it's the first time since region (show region), or if the last time was a country (show countries)
if(!Alloy.Globals.Location){
    getLottery("USA");
}else{
    if(Alloy.Globals.newloc == 'usa'){
        getLottery("USA");
    }else{
        getLottery();
    }   
}

