$.window.open();


// generate random number
function randomInt(max){
  return Math.floor(Math.random() * max) + 1;
}




// returns picks # of balls, # of results, if powerball is to be played
function getPicks(balls, rows, power){

	//create empty table
	var tableData = [];
	
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
			
			//create text label for ball		
			var labelBall = Ti.UI.createLabel({
			    text: randomInt(38),			
			  });		
			
			//Check to see if it is the last ball
			if(j==balls){
			
				
				// if it is the last ball, make it blue (if we powerball is in play)
				if(power === true)  {	
					$.addClass(labelBall, "lottoBallBlue");
				}
			}else{
				//assign normal ball class
				$.addClass(labelBall, "lottoBall");
				
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
	
	//show ad to everyone
	if(1==1){
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
	text: 'Unlimited Winning Lottery Picks',	
		width: '100%',
		font: {
			fontFamily: 'Lucida-neueu',
			fontSize: 15,
			},	
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,		
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

	
// set the table on our main view with the table data
$.table.setData(tableData);
}





$.footer.addEventListener('click', function(e) {
	//paul how can I individually target views and animate them up and out of the way?
	

	var tableData = [];
	$.table.setData(tableData);
   		getPicks(7,5,true);
	
	
	//show ad to everyone
	if(1==1){
			var row = Ti.UI.createTableViewRow({
	backgroundColor: '#ffffff',

	});
	var lockIcon = Ti.UI.createLabel({
	color: '#949fab',   
	 text: '',	
		top:'5%',
		font: {
			fontFamily: 'icomoon',
			fontSize: 35,
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			},		
		});
	var upgradeText = Ti.UI.createLabel({
	top:'25%',
	color: '#949fab',    
	text: 'Pick and Save unlimited numbers with Premium Membership',	
		width: '100%',
		font: {
			fontFamily: 'Lucida-neueu',
			fontSize: 15,
			},	
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,		
		});	
	
	var upgradeBtn = Ti.UI.createButton({	
		top:'45%',
		backgroundColor: '#0086c8',
		color: '#ffffff',
		borderRadius: 10,
		title: 'Get Started for just $4.95',
		width: '85%'
	})
		
	row.add(upgradeText);	
	row.add(lockIcon);
	row.add(upgradeBtn);
	tableData.push(row);	
			
		}
	
});

$.nav.addEventListener('click', function(e) {
	$.filter.open();
})
$.filterNav.addEventListener('click', function(e) {
	$.filter.close();
})

getPicks(7,5,true);
