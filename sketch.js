const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var particle;
var gameState = "play";
var divisions;


var divisionHeight=300;
var score =0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   divisions = new Divisions(150, 700, 20, 300);
   divisions2 = new Divisions(250, 700, 20, 300);
   divisions3 = new Divisions(350, 700, 20, 300);
   divisions4 = new Divisions(450, 700, 20, 300);
   divisions5 = new Divisions(550, 700, 20, 300);
   divisions6 = new Divisions(650, 700, 20, 300);
   divisions7 = new Divisions(50, 700, 20, 300);

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
   text("Score : "+score,20,30);
  Engine.update(engine);
 
  divisions.display();
  divisions2.display();
  divisions3.display();
  divisions4.display();
  divisions5.display();
  divisions6.display();
  divisions7.display();
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle = null){
     particle.display();

     if(particle.body.position.y>760){
       if(particle.body.position.x < 300){
         score = score + 500;
         particle = null;
       }
       if(particle.body.position.x > 300 && particle.body.position<600){
        score = score + 100;
        particle = null;
      
    }
    if(particle.body.position.x > 600 && particle.body.position<900){
      score = score + 200;
      particle = null;
    
  }
     }

     
      

    if(particle.body.position.y>760){
      if(particle.body.position.x < 300){
        score = score + 500;
        particle = null;
      }
    }
    }

    if( count>= 5){
      gameState = "end";
      text("GAMEOVER", 400, 400);
    }
}

function mousePressed(){
  if(gameState === "end"){
    particle = new Particle(mouseX, 10, 10, 10);
  }
}