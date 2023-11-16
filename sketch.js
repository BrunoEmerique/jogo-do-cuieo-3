var imagemDeFundo
var pernalongaANI , pernalonga
var tsunamiANI , tsunami 
var plataforma

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
imagemDeFundo = loadImage("./assets/city.png");
pernalongaANI =  loadAnimation("1coelho.png","2coelho.png", "3coelho.png");
//tsunamiANI = loadAnimation("tsunami.png","tsunami2.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    pernalonga = createSprite(160,600);
	pernalonga.addAnimation('animacao',pernalongaANI);
    pernalonga.scale = 0.3;


	//tsunami = createSprite(100,500);
	//tsunami.addAnimation('tsunamiDeCenoura',tsunamiANI);
	//tsunami.addAnimation('animacao2',tsunamiANI);
	//tsunami.scale = 0.5;


	plataforma = createSprite(160, 650, 100000, 10);
    plataforma.visible = false;
	Engine.run(engine);
}


function draw() {
	
  rectMode(CENTER);
  background(imagemDeFundo);

    //tsunami = createSprite(100,500);
	//tsunami.addAnimation('animacao',tsunamiANI);
	//tsunami.scale = 0.5;

   


    if (keyDown("espace") && pernalonga.y >= 600) {
	pernalonga.velocityY = -100;
	pernalonga.velocityY = pernalonga.velocityY + 0.5;

  }
  pernalonga.velocityY = pernalonga.velocityY + 0.5;

  pernalonga.collide(plataforma);

  drawSprites();
 
}



