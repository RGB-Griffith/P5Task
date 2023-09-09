"use strict";
let circX = 200;
let circY = 400;
let directionX = 0;
let directionY = 0;
let moving = false;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,0);
    circle(circX,circY,25);
    if (keyIsPressed){
      moving = true;

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
    }
  if (moving === true){
    circX += directionX;
    circY += directionY;

        if(circX>width){
            circX=0;
        }
        if (circX<0){
            circX=width;
        }
        if (circY>height){
            circY=0;
        }
        if (circY<0){
            circY=height;
        }
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


    
