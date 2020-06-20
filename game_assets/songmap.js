// GUIDE: tempo... position (pitch), interval (duration), speed (volume), beat-marker (optional)
// PLEASE USE FRACTIONS FOR SPEED, NOT DECIMALS!!
// INTEGERS ONLY FOR POSITION AND SPEED!!
class Songs { 
constructor(){


	this.song1 = {

	audio: new Audio("game_assets/Highscore.mp3"),
	audioVolume: 0.5,
	playerSpeed: 150,
	highScore: null,
	highCombo: 0,

	main : ["110,4", "50,1.19,0,0"


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
	,"40,1/2,280,1","40,1/2","50,1/4,0,0","10,1/4,420,1","20", "30"
	,"50,1/8", "40", "45", "35", "55", "30", "60", "25", "0", "100", "10", "90", "20", "80", "30", "50"
	,"50,1/2,350,1","50,1/2","60,1/4,0,0","20,1/4,450,1","30", "40"
	,"0,1/8", "10", "20", "30", "40", "60", "70", "80", "100,1"
	,"60,1/2,30", "40,1/2,40", "60,1/2,50", "40,1/2,60", "60,1/2,70", "40,1/2,90", "60,1/2,110", "40,1/2,130"
	,"60,1/2,150", "40,1/2,180", "60,1/2,210", "40,1/2,240", "60,1/2,270", "40,1/2,300", "100,1/8,400", "90", "80", "70", "30", "20", "10", "0"
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
	,"80,1/8,250,1", "75","70","65", "40,1/2,100", "60,1/2,250", "20,1/4,100", "50,1/2,250", "10,1/4,100", "60,1/4,250", "0,1/4,100", "90,1/2,250", "20,1/4", "80" //Main part 4
	,"40,1/16,150,1","38","36","34","32","30","28","25"
	,"60,1/4,250","20","60","30","70","40","90,1/2","20,1/4","50","10,1/2", "90,1/2"
	,"50,1/8,280,1", "55","60","65", "0,1/2,120", "60,1/2,280", "20,1/4,120", "70,1/2,280", "30,1/4,120", "80,1/4,280", "40,1/4,120", "90,1/2,280", "50,1/4", "100"
	,"50,1/16,150,1","48","46","44","42","40","38","35"
	,"40,1/4,280","10","40","0","70","30","100,1/2","30,1/4","50","20", "70", "20,1/2"
	,"30,1/16,300,1", "25","20","15","50,1/4,0,0","50,1/16,300,1","55","60","65","30,1/4,0,0", "80,1/2,300,1", "0,1/4", "70,1/2", "10,1/4", "60", "20", "90,1/2", "10,1/4", "50"
	,"40,1/16,100,1","38","36","34","32","30","28","25"
	,"60,1/4,300","60","60","60","70","80","90,1/2","60,1/4","50","100,1/2", "90,1/2"
	,"30,1/16,320,1", "25","20","15","50,1/4,0,0","80,1/16,320,1","75","70","65", "50,1/4,0,0", "60,1/2,320,1", "20,1/4", "70,1/2", "30,1/4", "80", "40", "90,1/2", "50,1/4", "100"
	,"50,1/16,100,1","48","46","44","42","40","38","35"
	,"30,1/4,320","10","30","0","20","40","90,1/2","80,1/4","70","40", "60", "50,1/2"
	,"80,1/8,350,1", "75","70","65", "40,1/2,100", "60,1/2,250", "20,1/4,100", "50,1/2,250", "10,1/4,100", "60,1/4,250", "0,1/4,100", "90,1/2,250", "20,1/4", "80" //Main part 4
	,"40,1/16,60,1","38","36","34","32","30","28","25"
	,"60,1/4,350","20","60","30","70","40","90,1/2","20,1/4","50","10,1/2", "90,1/2"
	,"50,1/8,380,1", "55","60","65", "0,1/2,120", "60,1/2,280", "20,1/4,120", "70,1/2,280", "30,1/4,120", "80,1/4,280", "40,1/4,120", "90,1/2,280", "50,1/4", "100"
	,"50,1/16,60,1","48","46","44","42","40","38","35"
	,"40,1/4,380","10","40","0","70","30","100,1/2","30,1/4","50","20", "70", "20,1/2"
	,"30,1/16,400,1", "25","20","15","50,1/4,0,0","50,1/16,300,1","55","60","65","30,1/4,0,0", "80,1/2,300,1", "0,1/4", "70,1/2", "10,1/4", "60", "20", "90,1/2", "10,1/4", "50"
	,"40,1/16,30,1","38","36","34","32","30","28","25"
	,"40,1/4,400","40","40","40","30","20","10,1/2","40,1/4","50","0,1/2", "10,1/2"
	,"30,1/16,420,1", "25","20","15","50,1/4,0,0","80,1/16,320,1","75","70","65", "50,1/4,0,0", "60,1/2,320,1", "20,1/4", "70,1/2", "30,1/4", "80", "40", "90,1/2", "50,1/4", "100"
	,"50,1/16,30,1","48","46","44","42","40","38","35"
	,"30,1/4,420","10","30","0","20","40","90,1/2","80,1/4","70","40", "60", "100", "50"
	,"0,1,150,1", "60", "30", "80,1/16,50", "79", "78", "77", "76", "75", "74", "73", "72", "71", "70", "69", "68", "67", "66", "65" //break 2
	,"20,1,150,1", "60", "10", "40,1/16,50", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55"
	,"40,1,150,1", "90", "30", "95,1/16,50", "94", "93", "92", "91", "90", "89", "88", "87", "86", "85", "84", "83", "82", "81", "80"
	,"20,1/2,150,1", "70,1", "60,1/2"
	,"95,1/16,50", "94", "93", "92", "91", "90", "89", "88", "87", "86", "85", "84", "83", "82", "81", "80"
	,"85,1/16,50", "84", "83", "82", "81", "80", "79", "78", "77", "76", "75", "74", "73", "72", "71", "70"
	,"0,1,200,1", "100", "30", "80,1/16,60", "79", "78", "77", "76", "75", "74", "73", "72", "71", "70", "69", "68", "67", "66", "65" //break 2
	,"20,1,200,1", "60", "10", "40,1/16,60", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55"
	,"40,1,200,1", "90", "30", "95,1/16,60", "94", "93", "92", "91", "90", "89", "88", "87", "86", "85", "84", "83", "82", "81", "80"
	,"20,1/2,200,1", "70,1", "60,1/2"
	,"95,1/16,60", "94", "93", "92", "91", "90", "89", "88", "87", "86", "85", "84", "83", "82", "81", "80"
	,"50,1,300"
	,"50,3,0,0", "90,1"
	,"40,1/16,200,1", "20", "50", "30", "60", "40", "70", "50", "50,1/2,0,0"								//Bridge
	,"20,1/4,350,1","90", "0", "45"
	,"80", "70", "60", "50"
	,"20", "30", "40", "50"
	,"10,1/16,200,1", "15", "20", "25", "30", "25", "20", "15", "50,1/2,0,0"								
	,"90,1/4,350,1","10", "80", "25"
	,"11", "22", "33", "44"
	,"88", "77", "66", "55"
	,"70,1/16,200,1", "65", "60", "55", "50", "55", "60", "65", "50,1/2,0,0"								
	,"0,1/4,350,1","30", "10", "40"
	,"20", "50", "30", "60"
	,"90", "60", "80", "50"	
	,"0,1/16,200,1", "20", "40", "60", "80", "100", "80", "60", "50,1/2,0,0"								
	,"10,1/4,350,1","40", "20", "50"		
	,"10", "30", "50", "70"
	,"90", "70", "50", "30"		
	,"30,1/4,400,1","0","10", "20", "70", "60", "90", "50"  	//bridge bridge
	,"50,1/8", "60", "55", "65", "45", "70", "40", "75", "100", "0", "90", "10", "80", "20", "70", "50"
	,"40,1/4,420,1","30","20","10","20", "40", "60", "80"
	,"50,1/8", "40", "45", "35", "55", "30", "60", "25", "0", "100", "10", "90", "20", "80", "30", "50"
	,"50,1/4,420,1","40","30","20","10", "30", "50", "70"
	,"0,1/8", "10", "20", "30", "40", "60", "70", "80", "100", "90", "80", "70", "60", "40", "30", "20"

	,"85,1/4,500,1","90","95","98","100", "66", "33", "0"		

	,"30,1/64,200,1","40","50","60", "70", "80", "90", "90,1/5-7/64,0,0" //TODO: COOL PATTERN HERE
	,"20,1/64,200,1", "20,1/5-1/64,0,0"
	,"20,1/64,200,1", "50", "60", "70", "70,1/5-4/64,0,0"
	,"23,1/64,200,1", "50", "55", "60", "70", "70,1/5-5/64,0,0"
	,"26,1/64,200,1", "50", "55", "60", "70", "70,1/5-5/64,0,0"
	,"15,1/64,200,1", "25", "50", "60", "70", "70,1/5-5/64,0,0"
	,"60,1/64,200,1", "60,1/5-1/64,0,0"
	,"20,1/64,200,1", "40", "50", "60", "70", "80", "80,1/5-6/64,0,0"
	,"23,1/64,200,1", "50", "70", "70,1/5-3/64,0,0"
	,"45,1/64,200,1", "75", "75,1/5-2/64,0,0"

	,"80,1/2,500,1", "20,1/2,0,0" 								//Repeat : Main part 1
	,"40,1/4,400,1", "0", "50", "10" 
	,"60", "20", "80", "30"
	,"90", "40", "100", "50"
	,"30,1/2,500,1", "20,1/2,0,0"
	,"80,1/4,400,1", "60", "40", "20"
	,"30", "50", "70", "90"
	,"80", "55", "35", "20"
	,"70,1/8,500,1", "50", "30", "30,1/8,0,0","0,1/2,0,0"
	,"90,1/4,400,1", "10", "80", "20"
	,"70", "30", "60", "40"
	,"55", "45", "65", "35"
	,"100,1/8,500,1", "66", "33", "0","50,1/2,0,0"
	,"100,1/4,400,1","66","33","0"
	,"30","60","30","70"
	,"40,1/4,500","80","40","90"
	,"20,1/16,500,1", "40", "60", "80","100", "80", "60", "40", "20,1/2,0,0" //Main part 2
	,"0,1/4,400,1", "10", "30", "40"
	,"70", "70", "70", "70"
	,"50", "60", "50", "60"
	,"10,1/16,500,1", "30", "50", "70","90", "70", "50", "30", "10,1/2,0,0"
	,"20,1/4,400,1", "30", "50", "60"
	,"40", "40", "40", "40"
	,"60", "70", "60", "70"	
	,"0,1/16,500,1", "10", "20", "30","40", "50", "60", "70", "30,1/2,0,0"
	,"50,1/4,500,1", "60", "70", "80"
	,"90", "70", "100", "60"
	,"50", "20", "40", "10"		
	,"100,1/16,400,1", "90", "80", "70","60", "50", "40", "30", "10,1/2,0,0"
	,"0,1/4,500,1", "30", "70", "100"
	,"40,1/4,20", "45", "50", "55"		//the quiet part
	,"0", "10", "90", "100"		
	,"20,1,200,1", "80", "20", "80"									//end
	,"30", "80", "30", "80"
	,"20,1,200,1", "80", "20", "80"									
	,"30", "80", "30", "80"
	,"20,1,200,1", "80", "20", "80"									
	,"30", "80", "30", "80"
	,"20,1,200,1", "80", "20", "80"									
	,"30", "80", "30,2", "80,1,0,0"			


	],

	sub1 : ["110,4", "50,1.19,0,0"
	, "20,7,0,0","80,1,0,0"
	, "70,4,100,1"
	, "100,4,100,1"
	, "80,4,100,1"
	, "90,4,100,1"
	, "50,4,50,1"
	, "60,4,50,1"
	, "70,4,50,1"
	, "75,4,50,1"						
	, "30,2,60,1", "60"		//intro 2
	, "90", "60"
	, "30", "0"
	, "30", "60"
	, "50,4,80,1"
	, "40"
	, "30"
	, "20,3", "100,1/4,150", "0,1/4,150", "100,1/4,150", "0,1/4,150"
	, "50,1,120,1", "70", "90", "100"				//MP1
	, "30,1,120,1", "50", "70", "80"
	, "0,1,120,1", "20", "0", "20"
	, "100,1,120,1", "80", "100", "80"
	, "70,1,120,1", "70", "70", "70"							//MP2	
	, "80,1,120,1", "80", "80", "80" 
	, "90,1,120,1", "90", "90", "90"
	, "100,1,120,1", "100", "0,2"
	, "80,1,120,1", "50", "80", "50"		//MP3
	, "90,1,120,1", "40", "90", "40"
	, "100,1,120,1", "30", "100", "30"
	, "50,1,120,1", "50", "50", "50"
	, "20,1,120,1", "50", "20", "50" 			//MP3
	, "10,1,120,1", "60", "10", "60"
	, "0,1,120,1", "70", "0", "70"
	, "60,1,120,1", "60", "60", "60"
	, "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0"	//swing part
	, "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0"
	, "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0"
	, "70,1,120,1", "70", "70", "70"
	, "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0"	
	, "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0"
	, "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0"
	, "80,1,120,1", "80", "80,2"
	, "0,4,50,1"
	, "50,4,50,1"
	, "30,4,50,1"
	, "40,4,50,1"
	, "0,1,50,1", "0", "0", "0"
	, "50,1,50,1", "50", "50", "50"
	, "30,1,50,1", "30", "30", "30"
	, "40,3,50,1", "10,1/4,150", "90", "10", "90"
	, "60,1,120,1", "60", "60", "60"		//end break
	, "80,1,120,1", "80", "80", "80"
	, "40,1,120,1", "40", "40", "40"
	, "20,1,120,1", "20", "20", "20"	
	, "30,4,30,1"
	, "40"
	, "50"
	,"100,1/2,30", "80,1/2,40", "100,1/2,50", "80,1/2,60", "100,1/2,70", "80,1/2,90", "100,1/2,110", "80,1/2,130"
	,"100,1/2,150", "80,1/2,180", "100,1/2,210", "80,1/2,240", "100,1/2,270", "80,1/2,300",	"100,1/4,350", "80", "70", "60"
	, "50,1,180,1", "60", "70", "80"				//MP1
	, "30,1,180,1", "50", "70", "80"
	, "0,1,180,1", "20", "0", "20"
	, "100,1,180,1", "80", "100", "80"	
	, "70,1,180,1", "70", "70", "70"							//MP2	
	, "80,1,180,1", "80", "80", "80" 
	, "90,1,180,1", "90", "90", "90"
	, "80,1,180,1", "80", "0,2"	
	, "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0"	//swing part
	, "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0"
	, "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0"
	, "70,1,120,1", "70", "70", "70"
	, "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0"	
	, "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0"
	, "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0"
	, "80,1,120,1", "80", "80,2"	
	, "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0"	//swing part
	, "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0"
	, "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0"
	, "70,1,120,1", "70", "70", "70"
	, "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0"	
	, "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0"
	, "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0"
	, "80,1,120,1", "80", "80,2"		
	, "20,3,50,1", "80,1,100"			//break 2
	, "20,3,50,1", "70,1,100"	
	, "20,3,50,1", "80,1,100"		
	, "20,2,50,1", "100,1,100", "80"	
	, "20,3,20,1", "80,1,200"			//break 2 part 2
	, "20,3,20,1", "70,1,200"	
	, "20,3,20,1", "80,1,200"		
	, "20,2,20,1", "100,1,200", "80"	
	, "0,4,0,0"
	, "100,1/2,120,1", "80", "100", "80", "100", "80", "100", "80"				//MP4
	, "80,1/2,120,1", "60", "80", "60", "80", "60", "80", "60"
	, "100,1/2,120,1", "80", "100", "80", "100", "80", "100", "80"	
	, "80,1/2,120,1", "60", "80", "60", "80", "60", "80", "60"	
	, "0,1/2,150,1", "10", "20", "30", "40", "70", "90", "100"
	, "0,1/2,150,1", "5", "10", "15", "20", "25", "30", "35"
	, "80,1/2,150,1", "75", "70", "50", "45", "40", "35", "30"
	, "100,1,0,0"
	, "50,1,240,1", "70", "90", "100"				//MP1
	, "30,1,240,1", "50", "70", "80"
	, "0,1,240,1", "20", "0", "20"
	, "100,1,240,1", "80", "100", "80"	
	, "70,1,240,1", "70", "70", "70"							//MP2	
	, "80,1,240,1", "80", "80", "80" 
	, "90,1,240,1", "90", "90", "90"
	, "80,1,240,1", "90", "0,2"		
	,"20,1,200,1", "80", "20", "80"									//end
	,"30", "80", "30", "80"
	,"20,1,200,1", "80", "20", "80"									
	,"30", "80", "30", "80"
	,"20,1,200,1", "80", "20", "80"									
	,"30", "80", "30", "80"
	,"20,1,200,1", "80", "20", "80"									
	,"30", "80", "30,2", "80,1,0,0"				

	],

	sub2 : ["110,4", "50,1.19,0,0"
	, "20,7,0,0","80,1,0,0"
	, "70,4,100,1"
	, "100,4,100,1"
	, "90,4,100,1"
	, "80,4,100,1"
	, "100,4,50,1"
	, "90,4,50,1"
	, "80,4,50,1"
	, "65,4,50,1"
	, "30,2,60,1", "0"
	, "30", "60"
	, "90", "60"
	, "30", "0"
	, "40,4,80,1"
	, "50"
	, "60"
	, "80,3", "0,1/4,150", "100,1/4,150", "0,1/4,150", "100,1/4,150"
	, "50,1,120,1", "70", "100", "90"							//MP1	
	, "80,1,120,1", "70", "50", "30" 
	, "100,1,120,1", "80", "100", "80"
	, "0,1,120,1", "20", "0", "20"
	, "70,1,120,1", "70", "70", "70"						//MP2	
	, "80,1,120,1", "80", "80", "80" 
	, "90,1,120,1", "90", "90", "90"
	, "100,1,120,1", "100", "0,2"
	, "20,1,120,1", "50", "20", "50" 			//MP3
	, "10,1,120,1", "60", "10", "60"
	, "0,1,120,1", "70", "0", "70"
	, "50,1,120,1", "50", "50", "50"	
	, "80,1,120,1", "50", "80", "50"		//MP3
	, "90,1,120,1", "40", "90", "40"
	, "100,1,120,1", "30", "100", "30"
	, "60,1,120,1", "60", "60", "60"
	, "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0"	//swing part
	, "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0"
	, "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0"
	, "70,1,120,1", "70", "70", "70"
	, "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0"
	, "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0"
	, "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0"
	, "80,1,120,1", "80", "80,2"
	, "0,4,50,1"
	, "50,4,50,1"
	, "30,4,50,1"
	, "40,4,50,1"
	, "0,1,50,1", "0", "0", "0"
	, "50,1,50,1", "50", "50", "50"
	, "30,1,50,1", "30", "30", "30"
	, "40,3,50,1", "90,1/4,150", "10", "90", "10"
	, "40,1,120,1", "40", "40", "40"	//end break
	, "60,1,120,1", "60", "60", "60"
	, "60,1,120,1", "60", "60", "60"
	, "90,1,120,1", "90", "90", "90"	
	, "50,4,30,1"
	, "40"
	, "30"	
	,"80,1/2,30", "100,1/2,40", "80,1/2,50", "100,1/2,60", "80,1/2,70", "100,1/2,90", "80,1/2,110", "100,1/2,130"
	,"80,1/2,150", "100,1/2,180", "80,1/2,210", "100,1/2,240", "80,1/2,270", "100,1/2,300", "60,1/4,350", "70", "80", "100"
	, "50,1,180,1", "60", "70", "80"							//MP1	
	, "80,1,180,1", "70", "50", "30" 
	, "100,1,180,1", "80", "100", "80"
	, "0,1,180,1", "20", "0", "20"
	, "70,1,180,1", "70", "70", "70"						//MP2	
	, "80,1,180,1", "80", "80", "80" 
	, "90,1,180,1", "90", "90", "90"
	, "80,1,180,1", "80", "0,2"	
	, "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0"	//swing part
	, "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0"
	, "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0"
	, "70,1,120,1", "70", "70", "70"
	, "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0"
	, "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0"
	, "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0"
	, "100,1,120,1", "100", "100,2"	
	, "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0", "60,1/2,80,1", "70,1/2,0,0"	//swing part
	, "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0", "50,1/2,80,1", "30,1/2,0,0"
	, "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0", "70,1/2,80,1", "100,1/2,0,0"
	, "70,1,120,1", "70", "70", "70"
	, "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0", "70,1/2,80,1", "60,1/2,0,0"
	, "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0", "30,1/2,80,1", "50,1/2,0,0"
	, "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0", "100,1/2,80,1", "70,1/2,0,0"
	, "100,1,120,1", "100", "100,2"		
	, "20,3,50,1", "80,1,100"			//break 2
	, "20,3,50,1", "70,1,100"	
	, "20,3,50,1", "80,1,100"		
	, "20,2,50,1", "100,1,100", "80"	
	, "20,3,20,1", "80,1,200"			//break 2 part 2
	, "20,3,20,1", "70,1,200"	
	, "20,3,20,1", "80,1,200"		
	, "20,2,20,1", "100,1,200", "90"
	, "0,4,0,0"
	, "100,1/2,120,1", "100", "80", "100", "80", "100", "80", "100" 				//MP4
	, "60,1/2,120,1", "80", "60", "80", "60", "80", "60", "80"
	, "80,1/2,120,1", "100", "80", "100", "80", "100", "80", "100"
	, "60,1/2,120,1", "80", "60", "80", "60", "80", "60", "80"		
	, "0,1/2,150,1", "10", "20", "30", "40", "70", "90", "100"
	, "0,1/2,150,1", "5", "10", "15", "20", "25", "30", "35"
	, "80,1/2,150,1", "75", "70", "50", "45", "40", "35", "30"
	, "100,1,0,0"		
	, "50,1,240,1", "70", "100", "90"							//MP1	
	, "80,1,240,1", "70", "50", "30" 
	, "100,1,240,1", "80", "100", "80"
	, "0,1,240,1", "20", "0", "20"
	, "70,1,240,1", "70", "70", "70"						//MP2	
	, "80,1,240,1", "80", "80", "80" 
	, "90,1,240,1", "90", "90", "90"
	, "80,1,240,1", "80", "0,2"	
	,"20,1,200,1", "80", "20", "80"									//end
	,"30", "80", "30", "80"
	,"20,1,200,1", "80", "20", "80"									
	,"30", "80", "30", "80"
	,"20,1,200,1", "80", "20", "80"									
	,"30", "80", "30", "80"
	,"20,1,200,1", "80", "20", "80"									
	,"30", "80", "30,2", "80,1,0,0"				
	]

	};



	this.song2 = {

	audio: new Audio("game_assets/Highscore.mp3"),
	audioVolume: 0.5,
	playerSpeed: 130,
	highScore: null,
	highCombo: 0,

	main : ["100,4", "50,2,0,0"								
	,"0,1,1,1"		
	],

	sub1 : ["100,4", "50,2,0,0"
	, "0,1,1,1"
	],

	sub2 : ["100,4", "50,2,0,0"
	, "0,1,1,1"
	]

	};




}
}

