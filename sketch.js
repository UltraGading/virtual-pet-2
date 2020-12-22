var dog, happyDog, database, foodS, foodStock
var dogImg
var feed, addFood
var fedTime, lastFed
var foodObj

function preload(){
dogImg = loadImage('images/dogImg.png')
happyDog = loadImage('images/dogImg1.png')
}

function setup() {
createCanvas(910,512);
database = firebase.database()
foodObj = new Food()
dog = createSprite(250,250,1,1)
dog.addImage(dogImg)
dog.scale = 0.2
foodStock = database.ref('Food')
foodStock.on("value", readStock)
feed = createButton('feed doggo')
feed.position(700,95)
feed.mousePressed(feedDog)
addFood = createButton('add food')
addFood.position(800,95)
addFood.mousePressed(addFoods)
}


function draw() {
background(46,139,87)
fedTime = database.ref('fedTime')
fedTime.on("value",function(data){
lastFed = data.val()
})
foodObj.display()
drawSprites();
textSize(15)
fill(28,215,164)
if(lastFed >= 12){
text('Last Feed: '+lastFed%12+' PM',350,30)
}
else if(lastFed == 0){
text('Last Feed: 12 AM',350,30)
}
else{
text('Last Feed: '+lastFed+' AM',350,30)
}
}

function readStock(data){
foodS = data.val()
}

function writeStock(x){
if(x<=0){
x=0
}
else{
x = x-1;
}
database.ref('/').update({
food : x
})
}

function feedDog(){
dog.addImage(happyDog)
foodObj.deductFood()
foodObj.updateFoodStock()
foodObj.getFoodStock()
}

function addFoods(){
foodS++
database.ref('Food/Food').update({
Food : foodS
})
}



