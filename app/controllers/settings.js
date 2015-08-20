//import billing functions
var billing = require('Billing');

//set global for settings window



//function to remove decimals from returned value

var floatToInt = function(float_value) {
        float_value = String(float_value);
        var index = float_value.indexOf('.');
        if (index > 0) {
            return float_value.substr(0, index);
        }
        else {
            return float_value;
        }
    };



//Slider that returns previous values


$.white_ball_count.text = Alloy.Globals.numWhiteBalls;
$.slider_white_balls.value = Alloy.Globals.numWhiteBalls;

$.white_ball_max.text = Alloy.Globals.numWhiteMax;
$.slider_white_max.value = Alloy.Globals.numWhiteMax;

$.results_count.text = Alloy.Globals.numRows + " picks";
$.slider_results.value = Alloy.Globals.numRows;

$.togglePowerBall.value = Alloy.Globals.powerBall; 
$.togglePowerBall_label.text = Alloy.Globals.powerBall;

$.slider_power_max.value = Alloy.Globals.numPowerMax;
$.power_ball_max.text = String.format("%3.0f", Alloy.Globals.numPowerMax) + " red balls";

outputState();

function updateWhiteBalls(e){
    Alloy.Globals.numWhiteBalls = Math.round(e.value);
    if (Alloy.Globals.numWhiteBalls<2){
         var ball = " ball";
        }else{
         var ball = " balls";
        }
    $.white_ball_count.text = String.format("%3.0f", Alloy.Globals.numWhiteBalls) + ball;
}

function updateWhiteMax(e){
    Alloy.Globals.numWhiteMax = Math.round(e.value);
    
         var ball = " max";
       
    $.white_ball_max.text = String.format("%3.0f", Alloy.Globals.numWhiteMax) + ball;
}

function updatePowerMax(e){
    Alloy.Globals.numPowerMax = Math.round(e.value);
    if (Alloy.Globals.numPowerMax<2){
         var ball = " red ball";
        }else{
         var ball = " red balls";
        }
    $.power_ball_max.text = String.format("%3.0f", Alloy.Globals.numPowerMax) + ball;
}


function updateRows(e){
    Alloy.Globals.numRows = Math.round(e.value);
    if (Alloy.Globals.numRows<2){
         var row = " pick";
        }else{
         var row = " picks";
        }
    $.results_count.text = String.format("%3.0f", Alloy.Globals.numRows) + row;
}
function outputState(e){
    if($.togglePowerBall.value == true){
        Alloy.Globals.powerBall = 1;
         $.sectionHide.show();
        $.sectionDescHide.show();
         $.sectionRowHide.height = 55;
       
         $.togglePowerBall_label.text = "Disable PowerBall";
            // $.settingScroll.scrollTo(0,140);
    }else{
        $.sectionHide.hide();
        $.sectionDescHide.hide();
        $.sectionRowHide.height = 0;
        
        Alloy.Globals.powerBall = 0;
        $.togglePowerBall_label.text = "Enable PowerBall";
       // $.settingScroll.scrollTo(0,60);
    }

    
}


//add premium ad box if not premium


// remove ad to allow changing of results



if(billing.checkPurchase('UnltdPicks') == 1){
   hideAd();
}


function hideAd(){
    
    $.ad_overlay.hide();
    $.resetClass($.premiumDescResults, "sectionDesc");
    $.resetClass($.premiumResults, "section firstSection");
    $.resetClass($.premiumSection, "sectionRow");
    
};




$.friesTap.addEventListener('singletap', function(e) {

     //Custom Lottery Game Title
     Alloy.Globals.navTitle.setText("Lottery Egg");
     Alloy.Globals.navTitle.setFont({fontSize:18});
        
     Alloy.Globals.numbers.getPicks(Alloy.Globals.numWhiteBalls,Alloy.Globals.numWhiteMax,Alloy.Globals.numRows,Alloy.Globals.powerBall,Alloy.Globals.numPowerMax);
     $.settings.close();
     
});


$.purchase.addEventListener('singletap', function(e) {

      //make the purchase
      billing.makePurchase('UnltdPicks');
      
      
      
      //disable the button
      $.addClass($.purchase, "disabledGrey"); 
     
    
     
     
});


$.hamburgerTap.addEventListener('singletap', function(e) {
     
     $.settings.close();
     
});

$.footer.addEventListener('singletap', function(e) {
    
    Alloy.createController('lotteries').getView().open();
   
    
    
});

Alloy.Globals.settings = $.settings;

