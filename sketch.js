//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg1, dogImg2, dogImg3, dogImg4;

function preload()
{
	//load images here
  dogImg1 = loadImage("images/Dog.png");
  dogImg2 = loadImage("images/dogImg.png");
  dogImg3 = loadImage("images/dogImg1.png");
  dogImg4 = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog.addImage(dogImg1);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addimage(dogImg4);
  }

  drawSprites();
  //add styles here
  textSize = 10;
  // textfill("red");
  // textStroke = 5;
  text("Note: Press UP_ARROW Key to feed Drago Milk!");

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  } else{
    x = x-1;
  }

  database.ref('/').update({
    Food: x
  })
}