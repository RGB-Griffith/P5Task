"use strict";
let circX = 200;
let circY = 425;
let directionX = 0;
let directionY = 0;
let moving = false;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
    fill(144,238,144);
    circle(circX,circY,25);
    if (keyIsPressed){
      moving = true;

        if(keyIsDown(RIGHT_ARROW)){
          directionX=6;
          directionY=0;
        }
        if(keyIsDown(LEFT_ARROW)){
          directionX=-6;
          directionY=0;
        }
        if(keyIsDown(DOWN_ARROW)){
          directionY=6;
          directionX=0;
        }
        if(keyIsDown(UP_ARROW)){
          directionY=-6;
          directionX=0;
        }
    }
  if (moving === true){
    circX += directionX;
    circY += directionY;

        if(circX>399){
            circX=1;
        }
        if (circX<1){
            circX=399;
        }
        if (circY>399){
            circY=1;
        }
        if (circY<1){
            circY=399;
        }
  }
  if (mouseIsPressed) {
    directionX = 0;
    directionY = 0;
  }
}
  //if (mouseClicked){
    //moving = false;
  //}


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


    
