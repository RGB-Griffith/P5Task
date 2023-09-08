"use strict";
let x = o;

//let img;
//function preload() {
  //img = loadImage('images/icon.png');
//}

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
    //image(img,10,10);
    if(keyIsDown(RIGHT_ARROW)){
      x+=5;
    }
    if(keyIsDown(LEFT_ARROW)){
      x-=5;
    }
    if(keyIsDown(DOWN)){
      y+=5;
    }
    if(keyIsDown(UP_ARROW)){
      y-=5;
    }
    //ellipse(100,50,50);
    rect(x,0,100,100);
   
} 
    
