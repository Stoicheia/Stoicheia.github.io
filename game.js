let canvas = document.querySelector("#gameScreen");
let ct = canvas.getContext("2d");

const WIDTH = 770;
const HEIGHT = 770;

const GAMESTATE = {
			PAUSED: 0,
			RUNNING: 1,
			MENU: 2,
			GAMEOVER: 3
		};

class Maths{
	static mod(a,b){
		return ((a%b)+b)%b; //real modulo, not integer remainder
	}
}

class Vector{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	magnitude(){ 
		return Math.pow(Math.pow(this.x,2)+Math.pow(this.y,2),1/2);
	}
	static multiply(c,v){ // scalar*vector
		return new Vector(v.x*c,v.y*c);
	}
	static add(v,u){ // vector+vector
		return new Vector(v.x+u.x, v.y+u.y);
	}
	static normalised(v){ // |vector/scalar|=1
		if(v.magnitude()==0) return v;
		return this.multiply(1/v.magnitude(), v);
	}
	static intersect(p1,s1,p2,s2){ // Key idea: look at the allowed range for p2-p1. thought of this in the shower
		let p = this.add(p2,this.multiply(-1,p1)); //p2-p1
		return (p.x>=-s2.x&&p.x<=s1.x)&&(p.y>=-s2.y&&p.y<=s1.y);
	}
	static copy(v){
		return new Vector(v.x,v.y);
	}
}

class InputStats{
	constructor(){
		this.characterHeld = Array(222).fill(false);
		this.inputVector = new Vector(0,0); // Directional input based on movement keys
	}
	reset(){
		this.characterHeld = Array(222).fill(false);
		this.inputVector = new Vector(0,0); // Directional input based on movement keys
	}
}	

class MenuInput{
	constructor(menu){
		this.keyDown = function(e){
			switch(e.keyCode){
				case 32:
					menu.selectables[menu.selectedButton].clickAction();
					break;
				case 87:
					menu.selectedButton = 
						Maths.mod((menu.selectedButton-1),menu.selectables.length);
					break;
				case 83:
					menu.selectedButton = 
						Maths.mod((menu.selectedButton+1),menu.selectables.length);
			}
		};
	}
}

class InputHandler{
	constructor(p){
		this.keyDown = function(e){
				inputstats.characterHeld[e.keyCode] = true;
				inputstats.inputVector.x 
					= parseInt(inputstats.characterHeld[68]-inputstats.characterHeld[65]);
				inputstats.inputVector.y 
					= parseInt(inputstats.characterHeld[83]-inputstats.characterHeld[87]);					
				/*case 65:
					inputstats.inputVector.x-=1;
					if(inputstats.inputVector.x<-1) inputstats.inputVector.x=-1;
					break;
				case 68:
					inputstats.inputVector.x+=1;
					if(inputstats.inputVector.x>1) inputstats.inputVector.x=1;
					break;
				case 87:
					inputstats.inputVector.y-=1;
					if(inputstats.inputVector.y<-1) inputstats.inputVector.y=-1;
					break;
				case 83:
					inputstats.inputVector.y+=1;
					if(inputstats.inputVector.y>1) inputstats.inputVector.y=1;
					break;
				case 16:
					inputstats.characterHeld[16] = true;
					break;
				case 32:
					inputstats.characterHeld[32] = true;*/
		}
		this.keyUp = function(e){
				inputstats.characterHeld[e.keyCode] = false;
				inputstats.inputVector.x 
					= parseInt(inputstats.characterHeld[68]-inputstats.characterHeld[65]);
				inputstats.inputVector.y 
					= parseInt(inputstats.characterHeld[83]-inputstats.characterHeld[87]);					
				/*case 68:
					inputstats.inputVector.x-=1;
					if(inputstats.inputVector.x>1) inputstats.inputVector.x=1;
					break;
				case 65:
					inputstats.inputVector.x+=1;
					if(inputstats.inputVector.x<-1) inputstats.inputVector.x=-1;
					break;
				case 83:
					inputstats.inputVector.y-=1;
					if(inputstats.inputVector.y<-1) inputstats.inputVector.y=-1;
					break;
				case 87:
					inputstats.inputVector.y+=1;
					if(inputstats.inputVector.y>1) inputstats.inputVector.y=1;
					break;
				case 16:
					inputstats.characterHeld[16] = false;
					break;
				case 32:
					inputstats.characterHeld[32] = false;*/
		}
	}
}

class Menu{
	constructor(w,h){
		this.width = w;
		this.height = h;
	}
	start(){
		this.songs = new Songs();
		this.menuObjects = [];
		this.selectables = [];

		this.input = new MenuInput(this);
		document.addEventListener("keydown", this.input.keyDown);

		let song1Button = new SongButton(new Vector(150,350), new Vector(480,50)
			,"Teminite & Panda Eyes - Highscore",this.startGame,this.songs.song1);
		this.menuObjects.push(song1Button); this.selectables[0] = song1Button;

		this.selectedButton = 0;

		let song2Button = new SongButton(new Vector(150,420), new Vector(140,50)
			,"Custom",this.startGame,this.songs.song2);
		this.menuObjects.push(song2Button); this.selectables[1] = song2Button;

		let titleText = new MenuText(new Vector(95,200), 100
			,"Bullet Purgatory","#fde");
		this.menuObjects.push(titleText);

		let selectSongText = new MenuText(new Vector(150,325), 30
			,"Select Song","#a00");
		this.menuObjects.push(selectSongText);
	}
	update(dt){

	}
	draw(c){
		this.menuObjects.forEach((o)=>o.draw(c));
		c.fillStyle = "#3d3";
		c.fillRect(this.selectables[this.selectedButton].position.x-20
			,this.selectables[this.selectedButton].position.y
			,15,this.selectables[this.selectedButton].size.y);
	}
	startGame(){
		document.removeEventListener("keydown", menu.input.keyDown);
		inputstats.reset();
		frame.state = GAMESTATE.RUNNING;
		game.start(menu.selectables[menu.selectedButton].song);
	}
}

class MenuText{
	constructor(pv,s,text,style){
		this.size = s;
		this.position = pv;
		this.text = text;
		this.style = style
	}
	draw(c){
		c.fillStyle = this.style;
		c.font = this.size+"px Yokel";
		c.fillText(this.text, this.position.x, this.position.y);
	}	
}

class Button{
	constructor(pv,sv,text,click){
		this.size = sv;
		this.position = pv;
		this.text = text;
		this.clickAction = click;
	}
	update(dt){

	}
	draw(c){
		c.fillStyle = "#359";
		c.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
		c.fillStyle = "#fff";
		c.font = this.size.y/1.5+"px Yokel";
		c.fillText(this.text, this.position.x+15, this.position.y+this.size.y/1.5);
	}
}

class SongButton extends Button{
	constructor(pv,sv,text,click,song){
		super(pv,sv,text,click);
		this.song = song;
	}
}

class Game{
	constructor(w,h){
		this.width = w;
		this.height = h;
	}
	start(song){
		this.song = song;
		this.gameObjects = [];

		this.timer = 0;
		this.lastAudioTime = 0;
		this.audioDt = 0.001; //avoid division by zero

		this.score = 0;

		this.playerSpeed = song.playerSpeed;
		this.player = new Player(this, this.playerSpeed);
		this.input = new InputHandler(this.player);
		document.addEventListener("keydown", this.input.keyDown);
		document.addEventListener("keyup", this.input.keyUp);				

		this.gameObjects.push(this.player);

		this.shooters = [];
		this.loadShooters(song);
		this.shooters.forEach((s)=>this.gameObjects.push(s));

		song.audio.volume = song.audioVolume;
		song.audio.play();
	}
	update(dt){
		if(dt)
			this.timer += 1/dt;
		this.audioDt = this.song.audio.currentTime - this.lastAudioTime;
		this.lastAudioTime = this.song.audio.currentTime;

		if(!document.hasFocus()){
			this.end();
		}

		this.gameObjects.forEach((o)=>o.update(dt));
		document.querySelector("#score").textContent=Math.round(this.score);
	}
	draw(ct){
		this.gameObjects.forEach((o)=>o.draw(ct));
	}
	loadShooters(map){
		//this.shooters.push(new Shooter(this, new Vector(70,70), new Vector(-35,0), map.sub1, 0));
		this.shooters.push(new Shooter(this, new Vector(70,70), new Vector(this.width-70,-35), map.main, 1));
		//this.shooters.push(new Shooter(this, new Vector(70,70), new Vector(0,this.height-30), this.songs.song1,2));
		//this.shooters.push(new Shooter(this, new Vector(70,70), new Vector(this.width-35,this.height-70), map.sub2,3));
	}
	end(){
		document.querySelector("#lastScore").textContent=Math.round(this.score);		
		document.removeEventListener("keydown", this.input.keyDown);
		document.removeEventListener("keyup", this.input.keyUp);
		inputstats.reset();
		frame.state = GAMESTATE.MENU;
		this.song.audio.pause();
		menu.start();
		//break the animation loop -> go to end screen
	}
}

class Player{
	constructor(game, s){
		this.game = game;
		this.screenWidth = WIDTH;
		this.screenHeight = HEIGHT;
		this.size = new Vector(30,30);
		this.speed=s;
		this.vel=new Vector(0,0);
		this.position=new Vector(this.screenWidth/2-this.size.x/2, this.screenHeight/2-this.size.y/2);

		this.sprintFactor=1.67;
		this.status="normal";
		this.scoreMod=1;
		this.scorePenalty=2.5;
		this.scoreShield=1.8;
	}
	draw(c){
		c.fillStyle = "#fee"
		c.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
	}
	update(dt){
		this.vel = Vector.multiply(this.speed,Vector.normalised(inputstats.inputVector));
		if(inputstats.characterHeld[16]) this.sprint();
		if(inputstats.characterHeld[32]) this.focus();
		else if(!inputstats.characterHeld[16]) this.status = "normal";

		switch(this.status){
			case "sprinting":
				this.vel = Vector.multiply(this.sprintFactor,this.vel);
				this.scoreMod = this.scorePenalty;
				break;
			case "crawling":	
				this.vel = Vector.multiply(1/this.sprintFactor,this.vel);
				this.scoreMod = 1/this.scoreShield;
				break;
			case "normal":
				this.scoreMod = 1;						
		}
			
		this.move(this.vel,dt);
	}	
	move(v,dt){
		this.position = Vector.add(this.position, Vector.multiply(1/dt,v));
		if(this.position.x<0) this.position.x=0;
		else if(this.position.x>this.screenWidth-this.size.x) this.position.x=this.screenWidth-this.size.x;
		if(this.position.y<0) this.position.y=0;
		else if(this.position.y>this.screenHeight-this.size.y) this.position.y=this.screenHeight-this.size.y;
	}
	sprint(){
		this.status = "sprinting";
	}
	focus(){
		this.status = "crawling";
	}
}

class Bullet{
	constructor(game, sv, pv, vv){
		this.game = game;
		this.image = document.querySelector("#bullet");
		this.vel = vv;
		this.position = pv;
		this.size = sv;

		this.baseDamage = 40;

		this.leniency = 0.8;
		this.collisionSize = Vector.multiply(this.leniency, this.size);
		this.collisionPos = Vector.add(this.position,
			new Vector(this.size.x*(1-this.leniency)/2, this.size.y*(1-this.leniency)/2));
	}

	draw(c){
		c.drawImage(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
	}

	update(dt){
		this.move(this.vel, dt);
		//ct.fillStyle = "#000";
		//ct.fillRect(this.collisionPos.x, this.collisionPos.y, this.collisionSize.x, this.collisionSize.y);
		if(Vector.intersect(this.collisionPos,this.collisionSize,game.player.position,game.player.size)){
			this.game.score-=this.game.player.scoreMod*(this.vel.magnitude()+this.baseDamage)*this.game.audioDt;
			this.image = document.querySelector("#bullet_contact");
		}
		else{
			this.image = document.querySelector("#bullet");
		}
	}
	move(v, dt){
		this.position = Vector.add(this.position, Vector.multiply(1/dt,v));
		this.collisionPos = Vector.add(this.position,
			new Vector(this.size.x*(1-this.leniency)/2, this.size.y*(1-this.leniency)/2));	
	}
}

class Shooter{
	constructor(game, sv, pv, bulletSequence, d){
		this.game = game;
		this.image = document.querySelector("#shooter");
		this.position = pv;
		this.vel = new Vector(0,0);
		this.size = sv;
		this.sequence = bulletSequence;
		this.sequenceLength = this.sequence.length;
		this.active = true;
		this.dir = d;

		this.topScreenPenalty = 200;

		this.timer = 0;
		let songInfo = this.sequence[0].split(",");
		this.tempo = parseFloat(songInfo[0]);
		this.timeSignature = parseInt(songInfo[1]);
		this.currentAction = 1;
		this.currentInfo = this.sequence[1].split(",");
		this.toPos = parseFloat(this.currentInfo[0]);
		this.nextPos = parseFloat(this.sequence[2].split(",")[0]);
		this.interval = eval(this.currentInfo[1]);
		this.trueInterval = this.interval*60/this.tempo;
		this.bulletState = 0;
		this.bulletSpeed = parseFloat(this.currentInfo[2]);
		this.bulletVel;
		this.shootAction();
	}

	move(v){
		this.position = Vector.add(this.position, Vector.multiply(this.game.audioDt,v));	
	}

	update(dt){
		this.move(this.vel);

		if(Vector.intersect(this.position,this.size,game.player.position,game.player.size))
			this.game.score-=this.topScreenPenalty*this.game.audioDt;

		if(this.game.audioDt!=0)
			this.timer += this.game.audioDt; //Change to follow audio dt later


		if(this.timer>=this.trueInterval&&this.active){

			if(this.currentAction==this.sequenceLength-1){
				this.active=false;
				if(this.dir==1){
					this.game.end();
				}				
			}

			else{
				this.currentAction += 1;
				this.currentInfo = this.sequence[this.currentAction].split(",");
				this.toPos = parseFloat(this.currentInfo[0]);
				if(this.currentAction!=this.sequenceLength-1){
					this.nextPos = parseFloat(this.sequence[this.currentAction+1].split(",")[0]);			
				}
				if(this.currentInfo.length>1)
					this.interval = eval(this.currentInfo[1]);
				if(this.currentInfo.length>2)
					this.bulletSpeed = parseFloat(this.currentInfo[2]);
				if(this.currentInfo.length>3)
					this.bulletState = parseFloat(this.currentInfo[3]);
				if(this.currentInfo.length>4)
					this.tempo = parseFloat(this.currentInfo[4]);
				this.trueInterval = this.interval*60/this.tempo-(this.timer-this.trueInterval);
				this.timer = 0;
				this.shootAction();
			}
			
		}
	}


	draw(c){
		c.drawImage(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
	}

	shootAction(){
		let hitSound = new Audio("game_assets/hit.mp3");
		
		let bulletPos = new Vector(0,0);
		switch(this.dir){
				case 0:
					this.bulletVel = Vector.multiply(this.bulletSpeed,new Vector(1,0));
					this.position.y = (this.toPos/100)*(this.game.height-70);
					this.vel.y = ((this.nextPos-this.toPos)/100)*(this.game.height-70)/this.trueInterval;
					break;
				case 1:
					this.bulletVel = Vector.multiply(this.bulletSpeed,new Vector(0,1));
					this.position.x = (this.toPos/100)*(this.game.width-70);				
					this.vel.x = ((this.nextPos-this.toPos)/100)*(this.game.width-70)/this.trueInterval;										
					break;
				case 2:
					this.bulletVel = Vector.multiply(this.bulletSpeed,new Vector(0,-1));
					this.position.x = (this.toPos/100)*(this.game.width-70);			
					this.vel.x = ((this.nextPos-this.toPos)/100)*(this.game.width-70)/this.trueInterval;					
					break;
				default:
					this.bulletVel = Vector.multiply(this.bulletSpeed,new Vector(-1,0));
					this.position.y = (this.toPos/100)*(this.game.height-70);
					this.vel.y = ((this.nextPos-this.toPos)/100)*(this.game.height-70)/this.trueInterval;					
			}
		bulletPos = Vector.copy(this.position);
		let b;
		if(this.bulletState!=0){
			hitSound.play();
			b = new Bullet(this.game, new Vector(70,70),bulletPos,this.bulletVel);
			this.game.gameObjects.push(b);
		}	
	}	
}

class Frame{
	constructor(){
		this.state;
	}
	update(dt){
		switch (this.state){
			case GAMESTATE.MENU:
				menu.update(dt);
				break;
			case GAMESTATE.RUNNING:
				game.update(dt);
				break;
			default:
				game.update(dt);
		}
	}

	draw(ct){
		switch (this.state){
			case GAMESTATE.MENU:
				menu.draw(ct);
				break;
			case GAMESTATE.RUNNING:
				game.draw(ct);
				break;
			default:
				game.draw(ct);
		}
	}
}

ct.clearRect(0,0,WIDTH,HEIGHT);

let lastTime = 0;
let frame, menu, game, songs, inputstats;


function loop(t){
	gameAnimation = undefined;

	let dt = t - lastTime;
	lastTime = t;

	ct.clearRect(0,0,WIDTH,HEIGHT);
	ct.fillStyle = "#ff40b4"
	ct.fillRect(0,0,WIDTH,HEIGHT);	

	if(dt){
		frame.update(dt);
		frame.draw(ct);
	}

	requestAnimationFrame(loop);
}


/*game = new Game(WIDTH, HEIGHT);
songs = new Songs();

game.start(songs.song1);
requestAnimationFrame(loop);*/

frame = new Frame();
frame.state = GAMESTATE.MENU;
menu = new Menu(WIDTH, HEIGHT);
game = new Game(WIDTH, HEIGHT);
inputstats = new InputStats();
menu.start();
requestAnimationFrame(loop);

