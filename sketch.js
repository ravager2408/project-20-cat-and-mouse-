var bg, bgImg;
var cat, catImg1, catImg2, catImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    jerryImg1 = loadImage("mouse1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    jerryImg2 = loadAnimation("mouse2.png","mouse3.png");
    catImg3 = loadImage("cat4.png");
    jerryImg3 = loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400);
    bg.addImage(bgImg);

    cat = createSprite(800,675);
    cat.addImage(catImg1);
    cat.scale=0.1;
    //cat.debug=true;

    jerry = createSprite(100,675);
    jerry.addImage(jerryImg1);
    jerry.scale=0.1;
    //jerry.debug=true;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(keyDown("left")){
        keyPressed();
    }

    if(cat.x - jerry.x < (cat.width - jerry.width)/2){
        cat.velocityX = 0
        cat.addImage("happyCat",catImg3);
        cat.changeImage("happyCat");

        jerry.addImage("happyJerry",jerryImg3);
        jerry.changeImage("happyJerry");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  cat.velocityX=-4;
  cat.addAnimation("running",catImg2);
  cat.changeAnimation("running");
  cat.scale=0.14;

  jerry.addAnimation("teasing",jerryImg2);
  jerry.changeAnimation("teasing");

}
