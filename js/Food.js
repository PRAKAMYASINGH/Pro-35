class Food {

//preloading the image of milk...

milk_img = loadImage("Milk.png");

//the constructor of my class...

constructor() {

    //the variables for this class...

    var foodStock,lastFed;
    var foodObj;

    
    
}

//the function to get the foodStock...

getFoodStock() {
        
}

updateFoodStock() {

}

deductFood() {



}



display() {
    var x=80,y=100

    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.foodStock!=0) {
        for(var i=0;i<this.foodStock;i++) {
            if(i%10==0) {
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
    }
}
}

