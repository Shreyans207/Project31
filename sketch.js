const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine , world;
var drops = [];
var maxDrops = 100;

function prelaod(){
    thunder_img1 = loadImage("thunderbolt/1.png");
    thunder_img2 = loadImage("thunderbolt/2.png");
    thunder_img3 = loadImage("thunderbolt/3.png");
    thunder_img4 = loadImage("thunderbolt/4.png");

}
function setup(){

    var canvas = createCanvas(500,800);

    engine = Engine.create();
    world = engine.world;

    man = new Man(250,700,50);
    
    }

function draw(){
    background("black");

    for( var i = 0 ; i < maxDrops ; i = i + 1){
      drops.push(new createRain(random(0,400)),random(0,400));
  }

    if (frameCount % 2 === 0) {
      drops.push(new createRain(Math.round(random(0,400)),Math.round(random(0,400)),20));
  }
    drops.display();
    man.display();
    spawnThunder();
}   
  
  function spawnThunder() {
      rand = Math(random(1,4));
    if (frameCount % 60 === 0) {
      var thunder = createSprite(random(10,400),random(10,30),10,10);
      switch(rand){
          case 1 : thunder.addImage(thunder_img1);
          break;
          case 2 : thunder.addImage(thunder_img2);
          break;
          case 3 : thunder.addImage(thunder_img3);
          break;
          case 4 : thunder.addImage(thunder_img4);
          default : break;
      }
      thunder.lifetime = 10;
      thunder.scale = random(0,3,0.6)
    }
  }