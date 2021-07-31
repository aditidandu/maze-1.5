var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20
var player, playerImage, playerImage2
var wallGroup
var coinGroup, c1, c2, c3, c4, c5
var coinImage
function preload(){
playerImage = loadAnimation("boy-1.png","boy-2.png", "boy-3.png", "boy-4.png", "boy-5.png" )
playerImage2 = loadAnimation("boy-1-flip.png", "boy-2-flip.png","boy-3-flip.png", "boy-4-flip.png", "boy-5-flip.png")
coinImage = loadImage("coin.png")
}
function setup() {

  createCanvas(800,800);
  player = createSprite(25,25, 40, 40)
  player.addAnimation("running", playerImage)
  player.addAnimation("run", playerImage2)

wallGroup = new Group()
coinGroup = new Group()
//coinGroup.setAnimationEach(coinImage)
player.scale = 0.15
  
  w1 = createSprite(100, 50, 200, 3);
  w2 = createSprite(250, 50, 3, 100);
  w3 = createSprite(150, 100, 200, 3);
  w4 = createSprite(100, 150, 500, 3);
  w5 = createSprite(300, 75, 3, 50);
  w6 = createSprite(425, 100, 250, 3);
  w7 = createSprite(400, 50, 200, 3);
  w8 = createSprite(550, 50, 3, 100);
  w9 = createSprite(450, 150, 100, 3);
  w10 = createSprite(350, 200, 3, 100);
  w11 = createSprite(400, 225, 3, 150);
  w12= createSprite(225, 300, 350, 3);
  w13= createSprite(225, 250, 250, 3);
  w14 = createSprite(100, 225, 3, 50);
  w15 = createSprite(200, 200, 200, 3);
  w16 = createSprite(50, 250, 3, 100);

  c1 = createSprite(325,75,20, 20)
  c2 = createSprite(125, 225,20, 20)
  
  c1.addImage(coinImage)
  c2.addImage(coinImage)
  c1.scale = 0.2
  c2.scale = 0.2
  wallGroup.add(w1)
  wallGroup.add(w2)
  wallGroup.add(w3)
  wallGroup.add(w4)
  wallGroup.add(w5)
  wallGroup.add(w6)
  wallGroup.add(w7)
  wallGroup.add(w8)
  wallGroup.add(w9)
  wallGroup.add(w10)
  wallGroup.add(w11)
  wallGroup.add(w12)
  wallGroup.add(w13)
  wallGroup.add(w14)
  wallGroup.add(w15)
  wallGroup.add(w16)

  coinGroup.add(c1)
  coinGroup.add(c2)

}

function draw() {
  background("white"); 

  player.collide(wallGroup)
  if(keyIsDown(RIGHT_ARROW)){
    player.x +=2
    player.changeAnimation("running", playerImage)

      }
      
  if(keyIsDown(LEFT_ARROW)){
    player.x +=-2
    player.changeAnimation("run", playerImage2)
      }
      
  if(keyIsDown(DOWN_ARROW)){
    player.y +=2
      }

    if(keyIsDown(UP_ARROW)){
       player.y +=-2
          }
  for(var i = 0; i<coinGroup.length;i++){
console.log(i)
    if(coinGroup.get(i).isTouching(player)){
 coinGroup.get(i).destroy()
    }
  }


    
  drawSprites();

}