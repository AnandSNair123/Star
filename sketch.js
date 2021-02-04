var playBackground,backgroundAnimation,backgroundAnimation2;
var play,playAnimation,names,nameAnimation;
var display1,display2,displayAnimation;
var gamestate;
var start = 1;
var end = 0;
var beginning = 2;
var fairy,fairyAnimation;
var star,starAnimation;
var hand;
var sound;

function preload(){
backgroundAnimation = loadAnimation("starryNight.jpg");
backgroundAnimation2 = loadAnimation("starNight.png");
playAnimation = loadAnimation("play.png");
nameAnimation = loadAnimation("name.png");
displayAnimation = loadAnimation("stars.png");
fairyAnimation = loadAnimation("fairyImage1.png");
starAnimation = loadAnimation("starImage.png");
sound = loadSound("JoyMusic.mp3");


}

function setup(){
	createCanvas(600,600);
playBackground = createSprite(300,300);
playBackground.addAnimation("background",backgroundAnimation);
playBackground.addAnimation("backgrounds",backgroundAnimation2);
playBackground.scale = 0.4;

play = createSprite(300,300);
play.addAnimation("play",playAnimation);
play.scale = 0.4;

names = createSprite(300,100);
names.addAnimation("names",nameAnimation);
names.scale = 2;

display1 = createSprite(50,250);
display1.addAnimation("display1",displayAnimation);


display2 = createSprite(550,250);
display2.addAnimation("display2",displayAnimation);

fairy = createSprite(80,450);
fairy.addAnimation("fairyAnimation",fairyAnimation);
fairy.scale = 0.19;

star = createSprite(550,50);
star.addAnimation("starAnimation",starAnimation);
star.scale = 0.03;

hand = createSprite(fairy.x+95,fairy.y-10,10,10);
hand.visible = false;

gamestate = beginning;
}

function draw(){
	background(1);
	text("Press S to make the star fall",50,50);
	hand.x = fairy.x+95;
	hand.y = fairy.y-10;
	if(gamestate === beginning){
		fairy.visible = false;
		star.visible = false;
	}
	if(gamestate === play){
		sound.play();
fairy.visible = true;
star.visible = true;
if(keyDown(RIGHT_ARROW)){
	fairy.x = fairy.x+5;
}
if(keyDown(LEFT_ARROW)){
	fairy.x = fairy.x-5;
}if(keyDown("s")){
	star.velocityY = 7;
}
if(hand.isTouching(star)){
	star.velocityY = 0;
	gamestate = end;
}

	}if(gamestate === end){
		playBackground.changeAnimation("backgrounds",backgroundAnimation);
		//play.stop;
	}


	if(mousePressedOver(play)&& gamestate === beginning){
	 gamestate = play;
	 play.visible = false;
	 names.visible = false;
	 display1.visible = false;
	 display2.visible = false;
	 
	 playBackground.changeAnimation("backgrounds",backgroundAnimation2);
	}
	drawSprites();
}