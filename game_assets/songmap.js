// GUIDE: tempo... position (pitch), interval (duration), speed (volume), beat-marker (optional)
// PLEASE USE FRACTIONS FOR SPEED, NOT DECIMALS!!
// INTEGERS ONLY FOR POSITION AND SPEED!!
class Songs { 
constructor(){


	this.song1 = {

	audio: new Audio("game_assets/Highscore.mp3"),
	audioVolume: 0.5,
	playerSpeed: 130,

	main : ["110,4", "50,1.21,0,0"
	,"20,6,80,1","80,1,0,0", "70"								
	,"80,1,80,1","70,1/2,60","100","90","80","70","60" //Intro
	,"30,1,80,1","50,1/4,90", "40", "30", "20"
	,"10,1/2,60", "0", "10", "20"
	,"40,1,90,1","70,1/4,100", "60", "50", "40"
	,"80,1/2,70", "70", "20", "30"
	,"40,1,90,1","45,1/4,30", "40", "35", "30"
	,"50,1/2,40", "40", "30", "20"
	,"10,1,30,1","20,1/4,0,0","0,1/4,90,1","10","20"
	,"50,1,50", "60,1,50"
	,"30,1,50,1","50,1/4,0,0","40,1/4,100,1","50","60"
	,"80,1,80", "90,1,80"
	,"50,1,80,1","60,1/4,0,0","50,1/4,100,1","60","70"
	,"80,1,100", "100,1,100"	
	,"70,1,100,1", "90,1/4,0,0", "75,1/4,120,1", "80", "85"
	,"95,1,150", "100,1,180"
	,"0,1,80,1","0,1/2,60", "40", "30", "20", "30", "10"
	,"0,1,80,1","20,1/4,60,1","15","10","5"
	,"10,1/2,60", "0", "10", "20"
	,"30,1/2,50,1", "20,1/2,0,0", "60,1/4,80,1", "50", "40", "30"
	,"80,1/2,100", "70", "30", "40"
	,"50,1/2,80,1", "40,1/2,0,0", "100,1/4,80,1", "90", "80", "70"
	,"40,1/2,30", "35", "30", "25"
	,"0,1,50,1","30,1/4,0,0","20,1/4,90,1","40","60"
	,"70,1,120", "80,1,120"
	,"20,1,50,1","50,1/4,0,0","30,1/4,90,1","50","70"
	,"80,1,140", "90,1,140"
	,"40,1,50,1","70,1/4,0,0","40,1/4,90,1","60","80"
	,"90,1,160", "100,1,160"
	,"60,1,40,1","90,1/4,0,0","60,1/4,90,1","80","100"
	,"90,1/2,100", "80,1/2,0,0", "100,1/4,200,1", "0", "80", "20"
	,"50,1/2,100,1", "0,1/2,0,0" 								//Main part 1
	,"40,1/4,200,1", "0", "50", "10" 
	,"60", "20", "80", "30"
	,"90", "40", "100", "50"
	,"30,1/2,300,1", "20,1/2,0,0"
	,"80,1/4,200,1", "60", "40", "20"
	,"30", "50", "70", "90"
	,"80", "55", "35", "20"
	,"70,1/8,300,1", "50", "30", "30,1/8,0,0","0,1/2,0,0"
	,"60,1/4,200,1", "40", "70", "30"
	,"80", "20", "90", "10"
	,"100", "0", "70", "30"
	,"100,1/8,300,1", "66", "33", "0","50,1/2,0,0"
	,"100,1/4,200,1","66","33","0"
	,"30","60","30","70"
	,"40,1/4,300","80","40","90"
	,"20,1/16,300,1", "40", "60", "80","100", "80", "60", "40", "20,1/2,0,0" //Main part 2
	,"0,1/4,200,1", "10", "30", "40"
	,"70", "70", "70", "70"
	,"50", "60", "50", "60"
	,"10,1/16,300,1", "30", "50", "70","90", "70", "50", "30", "10,1/2,0,0"
	,"20,1/4,230,1", "30", "50", "60"
	,"40", "40", "40", "40"
	,"60", "70", "60", "70"	
	,"0,1/16,300,1", "10", "20", "30","40", "50", "60", "70", "30,1/2,0,0"
	,"50,1/4,250,1", "60", "70", "80"
	,"90", "70", "100", "60"
	,"50", "20", "40", "10"		
	,"100,1/16,300,1", "90", "80", "70","60", "50", "40", "30", "10,1/2,0,0"
	,"30,1/4,270,1", "40", "50", "60"
	,"40,1/4,50", "45", "50", "55"		//the quiet part
	,"5", "20", "80", "95"								
	,"50,1/16,30,1","50","50","50","50","50","50","50", "10,1/2,0,0"
	,"70,1/4,200,1","30","65", "35"
	,"55", "45", "60", "40"
	,"30", "40", "60", "70"
	,"60,1/16,40,1","60","60","60","60","60","60","60", "10,1/2,0,0"
	,"100,1/4,230,1","0","55", "45"
	,"90", "10", "60", "40"
	,"20", "30", "70", "80"	
	,"40,1/16,50,1","40","40","40","40","40","40","40", "10,1/2,0,0"
	,"80,1/4,250,1","4","49", "72"
	,"62", "17", "48", "32"
	,"10", "20", "80", "90"	
	,"100,1/8,280,1", "80", "70", "60", "50", "30", "20", "10" //90,40 //ZOOM ZOOM
	,"0", "10", "20", "30", "40", "50", "70", "80" //100,60
	,"90", "70", "60", "50", "40", "20", "10", "0" //80,30
	,"10", "30", "40", "50", "60", "80", "90", "100" //70,20
	,"69,1,30,1"
	,"80,1/4,230,1","40","50", "60"
	,"90", "50", "50,1/2,0,0"
	,"30,1/4,230,1", "60", "70", "80"
	,"45,1,30,1"
	,"80,1/2,250,1","80,1/4,250", "80"
	,"80", "80", "80,1/2,0,0"
	,"20,1/4,230,1", "40", "70", "90"	
	,"50,1,30,1"
	,"90,1/2,280,1","90,1/4,280", "90"
	,"90", "90", "90,1/2,0,0"
	,"10,1/4,280,1", "30", "80", "100"
	,"100,1/8,300,1", "80", "70", "60", "50", "40", "30", "10" //90,20 //ZOOM ZOOM
	,"0", "10", "20", "30", "40", "50", "70", "80" //100,60
	,"90", "70", "60", "50", "40", "20", "10", "0" //80,30
	,"60,1/2,30", "40,1/4", "50"	
	,"25,1/8,300,1","20,7/8"											//Main part 3
	,"80,1/2,200","60,1/4","80,1/2", "50,1/4", "80,1/2", "40,1/4", "80,1/2", "30,1/4"	
	,"25,1/8,300,1","20,7/8"
	,"40,1/2,230","20,1/4","70,1/2", "50,1/4", "60,1/2", "20,1/4", "60,1/2", "20,1/4"	
	,"25,1/8,300,1","20,7/8"
	,"100,1/2,250","0,1/4","100,1/2", "0,1/4", "100,1/2", "0,1/4", "100,1/2", "0,1/4"
	,"100,1/8,320,1", "90", "80", "50", "40", "30", "20", "10" //70,0 //ZOOM ZOOM
	,"0", "10", "20", "30", "40", "60", "70", "80" //90,50
	,"100", "80", "85", "75", "80", "70", "75", "55" 
	,"45", "25", "30", "20", "25", "15", "20", "10" 
	,"50,1/8,10,1","55,7/8"	
	,"80,1/2,450","60,1/4","80,1/2", "50,1/4", "80,1/2", "40,1/4", "80,1/2", "30,1/4"
	,"45,1/8,15,1","40,7/8"
	,"40,1/2,450","20,1/4","70,1/2", "50,1/4", "60,1/2", "20,1/4", "60,1/2", "20,1/4"
	,"60,1/8,15,1","65,7/8"
	,"100,1/2,500","0,1/4","80,1/2", "20,1/4", "70,1/4", "30,1/4,0,0"
	,"10,1/4,250,1", "50", "60", "90"
	,"100,1/8,400,1", "80", "70", "60", "50", "30", "20", "10" //90,40 //ZOOM ZOOM
	,"0", "10", "20", "30", "50", "60", "70", "80" //100,40	
	,"90,1/2,100", "80", "20", "30"
	,"40,1,120,1", "70", "70,1/2", "50", "60,1" //break
	,"70,1/2,120,1","80","70","60","70","60", "30,1"
	,"35,1,120,1","25","15,1/2","25","35,1"
	,"55,1/2,120,1","65","55","45","55","45", "35,1"	
	,"90,1,150,1", "70", "70,1/2", "50", "60,1" 
	,"70,1/2,150,1","80","70","60","70","60", "30,1"
	,"35,1,150,1","25","15,1/2","25","35,1"
	,"55,1/2,150,1","65","55","45","55","45", "50,1/4,200,1", "10", "80", "40"	//end of break
	,"100,1/4,300,1","50","30","90"
	,"70","40","50","50"
	,"50","27","13","0"
	,"10,1/8","20","30","40,1/16","70,1/16","60,1/4","70"
	,"60,1/4,320,1","50","40","30"
	,"50,1/2","30,1/4","20,1/4", "30,1/2", "10,1/4", "0"
	,"50,1/8,400,1", "40", "30", "10", "0", "10", "20", "30"
	,"70,1/4,350,1","58","99","16"
	,"72", "32", "42", "69"
	,"13", "37", "42", "0"
	,"25", "50", "60,1/8", "70", "80,1/4"
	,"70,1/4,350,1", "60", "70", "80"
	,"90", "30", "40", "50"
	,"70,1/2", "80,1/8", "70", "60,1/4", "93,1/2,200", "100"
	,"30,5/4,250,1","0,1/4,400","10", "20"
	,"50,1/8", "60", "55", "65", "45", "70", "40", "75", "100", "0", "90", "10", "80", "20", "70", "50"
	,"40,5/4,280,1","10,1/4,420","20", "30"
	,"50,1/8", "40", "45", "35", "55", "30", "60", "25", "0", "100", "10", "90", "20", "80", "30", "50"
	,"50,5/4,350,1","20,1/4,450","30", "40"
	,"0,1/8", "10", "20", "30", "40", "60", "70", "80", "100,1"
	,"60,1/2,30", "40,1/2,40", "60,1/2,50", "40,1/2,60", "60,1/2,70", "40,1/2,90", "60,1/2,110", "40,1/2,130"
	,"60,1/2,150", "40,1/2,180", "60,1/2,210", "40,1/2,240", "60,1/2,270", "40,1/2,300", "70,1/4,350", "60", "40", "30"
	,"80,1/2,420,1", "20,1/2,0,0" 								//Repeat : Main part 1
	,"40,1/4,300,1", "0", "50", "10" 
	,"60", "20", "80", "30"
	,"90", "40", "100", "50"
	,"30,1/2,420,1", "20,1/2,0,0"
	,"80,1/4,300,1", "60", "40", "20"
	,"30", "50", "70", "90"
	,"80", "55", "35", "20"
	,"70,1/8,420,1", "50", "30", "30,1/8,0,0","0,1/2,0,0"
	,"90,1/4,320,1", "10", "80", "20"
	,"70", "30", "60", "40"
	,"55", "45", "65", "35"
	,"100,1/8,420,1", "66", "33", "0","50,1/2,0,0"
	,"100,1/4,320,1","66","33","0"
	,"30","60","30","70"
	,"40,1/4,420","80","40","90"
	,"20,1/16,420,1", "40", "60", "80","100", "80", "60", "40", "20,1/2,0,0" //Main part 2
	,"0,1/4,320,1", "10", "30", "40"
	,"70", "70", "70", "70"
	,"50", "60", "50", "60"
	,"10,1/16,420,1", "30", "50", "70","90", "70", "50", "30", "10,1/2,0,0"
	,"20,1/4,350,1", "30", "50", "60"
	,"40", "40", "40", "40"
	,"60", "70", "60", "70"	
	,"0,1/16,380,1", "10", "20", "30","40", "50", "60", "70", "30,1/2,0,0"
	,"50,1/4,380,1", "60", "70", "80"
	,"90", "70", "100", "60"
	,"50", "20", "40", "10"		
	,"100,1/16,380,1", "90", "80", "70","60", "50", "40", "30", "10,1/2,0,0"
	,"0,1/4,450,1", "30", "70", "100"
	,"40,1/4,50", "45", "50", "55"		//the quiet part
	,"5", "20", "80", "95"	




	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"		
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"
	,"0,1,1,1","10,1,30","20,1,30", "50,1,60"
	,"30,1,30,1", "40,1,40", "50,1,100", "70,1,50"
	,"60,1,20,1","70,1,25","80,1,30","90,1,35"							
	],

	sub1 : ["60,4", "50,2,0,0"
	, "0,1,1,1"
	],

	sub2 : ["60,4", "50,2,0,0"
	, "0,1,1,1"
	]

	};



	this.song2 = {

	audio: new Audio("game_assets/Highscore.mp3"),
	audioVolume: 0.5,
	playerSpeed: 130,

	main : ["100,4", "50,2,0,0"								
	,"0,1,1,1","10,1,30","20,2,30"
	,"30,1,30,1", "40,1,40", "50,2,100"
	,"60,1/2,20,1","70,1/2,25","80,1/2,30","90,1/2,35"
	,"100,1/2,40","45,1/2,45","50,1/2,50","60,1/2,60"
	,"0,1/4,20,1","15,1/4,25","20,1/4,30","35,1/4,35"
	,"80,1/4,40","85,1/4,45","90,1/4,50","95,1/4,60"	
	,"20,1/4,60","25,1/4,65","30,1/4,70","35,1/4,75"
	,"40,1/4,40","45,1/4,45","50,1/4,50","60,1/4,60"
	,"50,4,120,1"			
	],

	sub1 : ["100,4", "50,2,0,0"
	, "0,1,1,1","10,1,30","20,2,30"
	],

	sub2 : ["100,4", "50,2,0,0"
	, "0,1,1,1","10,1,30","20,2,30"
	]

	};




}
}

