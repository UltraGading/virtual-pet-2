class Food{
constructor(){
this.lastFed = null;
this.foodStock= null;
this.image=loadImage('images/Milk.png');
}

updateFoodStock(foodStock){
this.foodStock=foodStock;
}

deductFood(){
if(this.foodStock>0){
this.foodStock=this.foodStock-1;
}
}

getFoodStock(){
return this.foodStock;
}

display(){
var x = 80
var y = 100
imageMode(CENTER);
image(this.image,720,220,60,55)
if(this.foodStock !== 0){
for(var i = 0; i < this.foodStock; i++){
if(i%10 === 0){
x = 60
y = y + 60
}
image(this.image, x, y , 60, 55)
x = x + 30
}
}
}
}