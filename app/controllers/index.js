$.window.open();
//create empty table

var tableData = [];
var picks = {}
var powerBallMax = 15;
var ballMax = 45;

// generate random number
function randomInt(max){
  return Math.floor(Math.random() * max) + 1;
}




// returns picks # of balls, # of results, if powerball is to be played
function getPicks(balls, rows, power){

	tableData = [];
	
	//return 5 picks
	for (var i=1; i<=rows; i++){
		//alternate background colors
		var background = (i%2) ? "#f4f6f5" : "#ffffff";
	
		//create table row
		var row = Ti.UI.createTableViewRow({
			layout: 'horizontal',
			backgroundColor: background,
		});
		
		//assign class 
		  $.addClass(row, "lottoRow");
		
		//create counter
		var rowCount = Ti.UI.createLabel({
			    text: i
		});
		//assign class 
		$.addClass(rowCount, "countRow");
		
		//add to row
		row.add(rowCount);
		
		//show 7 balls
		for (var j=1; j<=balls; j++){
			
			var lottoPick = randomInt(powerBallMax);
		
			
			//Check to see if it is the last ball
			if(j==balls){
			
				//generate number for powerball		
				var labelBall = Ti.UI.createLabel({
			    	text: lottoPick,			
			 	 });		
			
				// if it is the last ball, make it blue (if we powerball is in play)
				if(power === true)  {	
					$.addClass(labelBall, "lottoBallBlue");
				}
			}else{
				
				for(var l=1; l<j; l++){
		
					if (picks[l] ==  lottoPick)	{
						//start over
						lottoPick = randomInt(powerBallMax);
						l=1
						
					}else{
						// set the number, it's unique!'
						var labelBall = Ti.UI.createLabel({
							text: lottoPick,			
			 			});	
						//add to array for checking next time around
						picks[j] = lottoPick;
					}				
				}
				//create text label for powerball		
				
				
				//assign normal ball class
				$.addClass(labelBall, "lottoBall");
				
				//assign unique class to first ball for margin
				if(j==1){
					$.addClass(labelBall, "firstBall");
				}
	
			}
		
			//add ball to row
			row.add(labelBall);
			
			//animate balls dropping in randomly
			var dur = randomInt(400)
			labelBall.animate({top:10, duration: dur})
		}
		
	
		
		
		
		//push all elements of the row to the table
		tableData.push(row);
	}
	

		upgradeAd();
// set the table on our main view with the table data
$.table.setData(tableData);
}


//show ad to everyone
function upgradeAd(){

	
	var row = Ti.UI.createTableViewRow({
	backgroundColor: '#ffffff',

	});
	var lockIcon = Ti.UI.createLabel({
	color: '#949fab',   
	 text: '',	
		top:'10%',
		font: {
			fontFamily: 'icomoon',
			fontSize: 35,
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			},		
		});
	var upgradeText = Ti.UI.createLabel({
	top:'30%',
	color: '#949fab',    
	text: 'Copy, Save and Share Picks',	
		width: '100%',
		font: {
			fontFamily: 'Lucida-neueu',
			fontSize: 15,
			},	
		textAlign:  Ti.UI.TEXT_ALIGNMENT_CENTER,		
		});	
	
	var upgradeBtn = Ti.UI.createButton({	
		top:'42%',
		backgroundColor: '#0086c8',
		color: '#ffffff',
		borderRadius: 10,
		title: 'Upgrade Now - $4.95/mo',
		width: '85%'
	})
		
	row.add(upgradeText);	
	row.add(lockIcon);
	row.add(upgradeBtn);
	tableData.push(row);	
			
		
}


$.footer.addEventListener('click', function(e) {
	//paul how can I individually target views and animate them up and out of the way?

	$.table.setData([])
   	getPicks(7,5,true);
	
	
	//show ad to everyone
	
	
});

$.nav.addEventListener('click', function(e) {
	$.filter.open();
})
$.filterNav.addEventListener('click', function(e) {
	$.filter.close();
})

getPicks(7,5,true);
