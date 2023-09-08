"use strict";
let circleX=200; //let is needed otherwise no output :)
let circleY=200;
let circleDiam=5;
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

let imgs
function preload() {
  let img = loadImage('images/icon.png');
}

function setup(){
    createCanvas(400,400);
    image(img,0,0);
}

function draw(){
    background(120,120,120);
    /*circle(circleX,circleY,circleDiam);
    if(circleX <=400){
        circleX += 1;
        if(circleX){
            circleX -= 1;
    }*/

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
    
    
    } 
    

    

    //task 2 flipped
    /*line(0,200,400,200);
    if(mouseY<height/2){

    triangle(
            leftX, leftY,
            topX, topY, 
            rightX, rightY);
    }
    else {

        triangle(
                leftX2, leftY2,
                topX2, topY2, 
                rightX2, rightY2);
           } 

    //task 3 catch a circle
} */
