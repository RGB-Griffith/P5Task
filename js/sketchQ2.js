"use strict";
let circX = 200;
let circY = 200;
let directionX = 0;
let directionY = 0;
//let circX = 50;
//let circY = 0;

//let img;
//function preload() {
  //img = loadImage('images/icon.png');
//}

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
    circle(circX,circY,25);
    //image(img,10,10);
    if(keyPressed(RIGHT_ARROW)){
      directionX+=6;
    }
    if(keyPressed(LEFT_ARROW)){
      directionX-=6;
    }
    if(keyPressed(DOWN_ARROW)){
      directionY+=6;
    }
    if(keyPressed(UP_ARROW)){
      directionY-=6;
    }
    if(circX>399){
        circX=1
    }
    if (circX<1){
        circX=399
    }
    if (circY>399){
        circY=1
    }
    if (circY<1){
        circY=399
    }
}

    /*function mouseMoved(){
      circX=mouseX;
      circY=mouseY;
    }*/
   

    
/*"use strict";
let circleX=200; //let is needed otherwise no output :)
let circleY=200;
let circleDiam=25;
let velocity=6;

let topX=200;
let topY=200;
let leftX=topX+100;
let leftY=topY-100;
let rightX=topX-100;
let rightY=topY-100;

let topX2=200;
let topY2=200;
let leftX2=topX-100;
let leftY2=topY+100;
let rightX2=topX+100;
let rightY2=topY+100;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
        if(circleX>width) {
        velocity=-6;
        }
        if (circleX<circleDiam/2){
        velocity+=6;
        }
        let isMouseIn=dist(mouseX,mouseY,circleX,circleY)<circleDiam/2
        if(isMouseIn===false){
            circleX+=velocity;
        }
    text(circleX, 20, 20);
    ellipse(circleX, height/2, circleDiam);
    
    
} */
    
