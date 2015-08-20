
//create empty table
var tableData = [];

//import billing functions
var billing = require('Billing');



//function used to place balls randomly on the page
function randomXToY(minVal,maxVal){ 
    var randVal = minVal+(Math.random()*(maxVal-minVal)); 
    return Math.round(randVal); 
}

function getPicks(balls, max, rows, power, maxPb){
    
    // clear table data
    tableData = [];
    var url = "https://app.lotteryegg.com?numBalls="+balls+"&numRows="+rows+"&powerBall=" + Alloy.Globals.powerBall + "&maxRange=" + max + "&maxPbRange=" + maxPb;


	

var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
		// this function is called when data is returned from the server and available for use
        // this.responseText holds the raw text return of the message (used for text/JSON)
        // this.responseXML holds any returned XML (including SOAP)
        // this.responseData holds any returned binary data
      
        json = JSON.parse(this.responseText);
       
        Alloy.Globals.balls = [];
        var length = 0;
	   
        	
        for (var key in json) {
          if (json.hasOwnProperty(key)) { 
           length++;
           
            //create table row
            
                var background = (length%2) ? "#f4f6f5" : "#ffffff";
                var row = Ti.UI.createTableViewRow({
                    backgroundColor: background,
                    width: Ti.UI.FILL
                });
        
                var wrapper = Ti.UI.createView({
                    layout: 'horizontal',
                    left: '10%',
                    width: '90%',
                   
                });
                
                //assign class 
               
                
                //create counter
                var rowCount = Ti.UI.createLabel({
                        text: length
                });
                //assign class 
                $.addClass(rowCount, "countRow");
                
                //add to view
                row.add(rowCount);
                
                for (var j=0; j<balls; j++){
                   
                    //create ball
                    var labelBall = Ti.UI.createLabel({
                            text: json[key].numbers[j], 
                            top: -100,
                            zIndex: 1000,
                           
                            
                    });
                    
                    //add to global variable
                    Alloy.Globals.balls.push(labelBall);
                    
                    //add the ball class (to make it look like a ball)                
                   
                    
                    //make the balls larger
                    if (j==0){
                         $.addClass(labelBall, "firstBall");  
                    }
                    
                    if (balls < 4){
                        
                       
                        $.addClass(labelBall, "lottoBallLarge");   
                        $.addClass(row, "lottoRowLarge");
                        
                    }else if (balls > 7 & balls <=10 ){
                        
                         $.addClass(labelBall, "lottoBall");
                         $.addClass(row, "lottoRowTwo");
                    }else if (balls > 10 & balls <=15 ){
                        
                         $.addClass(labelBall, "lottoBall");
                         $.addClass(row, "lottoRowTwo");
                    }else if (balls > 15 ){
                        $.addClass(labelBall, "lottoBall");
                        $.addClass(row, "lottoRowSuper");
                        
                         
                    }else{
                        
                         $.addClass(labelBall, "lottoBall");
                         $.addClass(row, "lottoRow");
                        
                    }
                    
                    
                    
                    
                    //add ball to row
                    wrapper.add(labelBall);
          
                }
                
                if (json[key].powerball){
                    
                    var labelBall = Ti.UI.createLabel({
                            text: json[key].powerball,
                            top: -100,
                            zIndex: 1000,
                    });
                    
                    //add to global balls variable
                    Alloy.Globals.balls.push(labelBall);
                    
                    $.addClass(labelBall, "lottoBallBlue");
                    
                     if (balls < 4){
                        
                       
                        $.addClass(labelBall, "lottoBallBlueLarge");   
                        
                        
                    }else{
                       
                         $.addClass(labelBall, "lottoBallBlue");
                        
                        
                    }
                    wrapper.add(labelBall);
                    
                }
                
                //add the wrapper to the row
                row.add(wrapper);
                
            //push the row to table    
            tableData.push(row);
            
            
          }
          
        }
        
        
        upgradeAd();
        
        
        $.table.setData(tableData);
        
       
        animateBalls();
        Alloy.Globals.Animated = false;  
        
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






function animateBalls() {


    var allBalls = Alloy.Globals.balls.length;
    
    // loop through all available balls
    for (var p=0; p<allBalls; p++){  
        
       //make sure each ball is higher than 10 pixels, if not - set it down and then never check that ball again
       
       Alloy.Globals.balls[p].animate({
            top: 10,
            duration: randomXToY(300,600)
       });
       
       Ti.API.info("animated ball number" + p);
        
    }
    
}






//show ad to everyone
function upgradeAd(){

	
	var row = Ti.UI.createTableViewRow({
	backgroundColor: '#ffffff',

	});
	var lockIcon = Ti.UI.createLabel({
	color: '#949fab',   
	 text: '',	
		top:'10%',
		font: {
			fontFamily: 'icomoon',
			fontSize: 40,
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			},		
		});
	var upgradeText = Ti.UI.createLabel({
	top:'30%',
	color: '#949fab',    
	text: 'Questions or Suggestions',	
		width: '100%',
		font: {
			fontFamily: 'Lucida-neueu',
			fontSize: 15,
			},	
		textAlign:  Ti.UI.TEXT_ALIGNMENT_CENTER,		
		});	
	
	var upgradeBtn = Ti.UI.createButton({	
		top:'42%',
		backgroundColor: '#5f9c73',
		color: '#ffffff',
		borderRadius: 10,
		title: 'Leave Feedback',
		width: '75%'
	})
	
	
	//check to see if upgrade button was clicked

    upgradeBtn.addEventListener('singletap', function(e){
        
      // add support box here for user input
        var emailDialog = Ti.UI.createEmailDialog();

       emailDialog.subject = "Feedback - LotteryEgg";
       emailDialog.toRecipients = ['jeff.hamersly@gmail.com'];
       emailDialog.setMessageBody("Howdy!
       
I'm always working on improving LotteryEgg, let me know what what you would like changed!

-Jeff");
       emailDialog.open();
        
        
    })
	
		
	row.add(upgradeText);	
	row.add(lockIcon);
	row.add(upgradeBtn);
	tableData.push(row);	
			
		
}

//Set variable to only animate one time
Alloy.Globals.Animated = false;

$.table.addEventListener('scroll', function(e) {
    
    var roundedY = Math.round(e.contentOffset.y);
    var allBalls = Alloy.Globals.balls.length;
    
   if(roundedY > 50 & Alloy.Globals.Animated == false){
       
     for (var p=0; p<allBalls; p++){  
        
       //make sure each ball is higher than 10 pixels, if not - set it down and then never check that ball again
       
       Alloy.Globals.balls[p].setTop(10);
       
       Ti.API.info("animated ball number" + p);
        
    }
       
        
        //set variable to show that we have animated
       Alloy.Globals.Animated = true;
    }
});



$.footer.addEventListener('singletap', function(e) {
	
    $.table.scrollToTop();
   getPicks(Alloy.Globals.numWhiteBalls,Alloy.Globals.numWhiteMax,Alloy.Globals.numRows,Alloy.Globals.powerBall,Alloy.Globals.numPowerMax);
	
	
});


$.friesTap.addEventListener('singletap', function(e) {
    
    //launch a new window
    
    Alloy.createController('settings').getView().open();
    
});

$.hamburgerTap.addEventListener('singletap', function(e) {
    
    //launch a new window
    
    Alloy.createController('lotteries').getView().open();
    
});






//trying to pass function
$.window.getPicks = getPicks;
Alloy.Globals.numbers = $.window;

getPicks(Alloy.Globals.numWhiteBalls,Alloy.Globals.numWhiteMax,Alloy.Globals.numRows,Alloy.Globals.powerBall,Alloy.Globals.numPowerMax);


Alloy.Globals.navTitle = $.navTitle

//open the window
$.window.open();


 