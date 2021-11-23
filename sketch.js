var starImg, fadaImg, bgImg;
var fada , vozFada;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fadaImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	vozFada = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	vozFada.play();

	fada = createSprite(130, 520);
	fada.addAnimation("fadaVoando",fadaImg);  
	fada.scale = 0.2;
    

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
   
  
  

  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();
keyPressed();
}
function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fada.x = fada.x + 5;
	}
	
        if(keyCode === LEFT_ARROW){
           fada.x = fada.x - 5;

	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}
