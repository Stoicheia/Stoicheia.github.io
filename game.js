let canvas = document.querySelector("#gameScreen");
let ct = canvas.getContext("2d");

const WIDTH = 800;
const HEIGHT = 600;

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
}

class InputHandler{
	constructor(p){
		this.shiftHeld = false;
		this.spaceHeld = false;
		this.inputVector = new Vector(0,0); // Directional input based on movement keys
		document.addEventListener("keydown", e=>{
			switch(event.keyCode){
				case 65:
					this.inputVector.x-=1;
					if(this.inputVector.x<-1) this.inputVector.x=-1;
					break;
				case 68:
					this.inputVector.x+=1;
					if(this.inputVector.x>1) this.inputVector.x=1;
					break;
				case 87:
					this.inputVector.y-=1;
					if(this.inputVector.y<-1) this.inputVector.y=-1;
					break;
				case 83:
					this.inputVector.y+=1;
					if(this.inputVector.y>1) this.inputVector.y=1;
					break;
				case 16:
					this.shiftHeld = true;
					break;
				case 32:
					this.spaceHeld = true;
			}
		});
		document.addEventListener("keyup", e=>{
			switch(event.keyCode){
				case 68:
					this.inputVector.x-=1;
					if(this.inputVector.x>1) this.inputVector.x=1;
					break;
				case 65:
					this.inputVector.x+=1;
					if(this.inputVector.x<-1) this.inputVector.x=-1;
					break;
				case 83:
					this.inputVector.y-=1;
					if(this.inputVector.y<-1) this.inputVector.y=-1;
					break;
				case 87:
					this.inputVector.y+=1;
					if(this.inputVector.y>1) this.inputVector.y=1;
					break;
				case 16:
					this.shiftHeld = false;
					break;
				case 32:
					this.spaceHeld = false;
			}
		});
	}
}

class Game{
	constructor(w,h){
		this.width = w;
		this.height = h;
	}
	start(){
		this.playerSpeed = 70;
		this.player = new Player(this.playerSpeed);
		this.bullet = new Bullet(new Vector(30,30), new Vector(0,0), new Vector(20,0));
		this.input = new InputHandler(this.player);

		this.gameObjects = [this.bullet, this.player];
	}
	update(dt){
		this.gameObjects.forEach((o)=>o.update(dt));
	}
	draw(ct){
		this.gameObjects.forEach((o)=>o.draw(ct));
	}
	
}

class Player{
	constructor(s){
		this.screenWidth = WIDTH;
		this.screenHeight = HEIGHT;
		this.size = new Vector(30,30);
		this.speed=s;
		this.vel=new Vector(0,0);
		this.position=new Vector(this.screenWidth/2-this.size.x/2, this.screenHeight-this.size.y-10);

		this.sprintFactor=1.6;
	}
	draw(c){
		c.fillStyle = "#f5a"
		c.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
	}
	update(dt){
		this.vel = Vector.multiply(this.speed,Vector.normalised(game.input.inputVector));
		if(game.input.shiftHeld) this.sprint(this.sprintFactor);
		if(game.input.spaceHeld) this.focus(this.sprintFactor);
		this.move(this.vel,dt);
	}	
	move(v,dt){
		this.position = Vector.add(this.position, Vector.multiply(1/dt,v));
		if(this.position.x<0) this.position.x=0;
		else if(this.position.x>this.screenWidth-this.size.x) this.position.x=this.screenWidth-this.size.x;
		if(this.position.y<0) this.position.y=0;
		else if(this.position.y>this.screenHeight-this.size.y) this.position.y=this.screenHeight-this.size.y;
	}
	sprint(f){
		this.vel = Vector.multiply(f,this.vel);
	}
	focus(f){
		this.vel = Vector.multiply(1/f,this.vel);
	}
}

class Bullet{
	constructor(sv, pv, vv){
		this.image = document.querySelector("#bullet");
		this.vel = vv;
		this.position = pv;
		this.size = sv;

		this.leniency = 0.5;
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
		if(Vector.intersect(this.collisionPos,this.collisionSize,game.player.position,game.player.size))
			console.log("we did it reddit");
	}
	move(v, dt){
		this.position = Vector.add(this.position, Vector.multiply(1/dt,v));
		this.collisionPos = Vector.add(this.position,
			new Vector(this.size.x*(1-this.leniency)/2, this.size.y*(1-this.leniency)/2));	
	}
}

ct.clearRect(0,0,WIDTH,HEIGHT);

let lastTime = 0;

let game = new Game(WIDTH, HEIGHT);
game.start();

function loop(t){
	let dt = t - lastTime;
	lastTime = t;

	ct.clearRect(0,0,WIDTH,HEIGHT);
	game.update(dt);
	game.draw(ct);

	requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

