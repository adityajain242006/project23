var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var packageCover;
var packageCover2;
var packageCover3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	packageCover = Bodies.rectangle(400,640, 20,200 , {restitution:0, isStatic:true});

	World.add(world, packageCover);
	packageCover2 = Bodies.rectangle(310,580, 20,100 , {restitution:0, isStatic:true});
	World.add(world, packageCover2);
	packageCover3 = Bodies.rectangle(490,580, 20,100 , {restitution:0, isStatic:true});
	World.add(world, packageCover3);

	//Create a Ground
	
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	World.add(world, ground);
console.log(ground);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  rect(ground.position.x,ground.position.y,width,10);
  rect(packageCover.position.x,packageCover.position.y,200,20);
  rect(packageCover2.position.x,packageCover2.position.y,20,100);
  rect(packageCover3.position.x,packageCover3.position.y,20,100);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	//packageSprite.velocityY=4
	Matter.Body.setStatic(packageBody,false);
  }
}



