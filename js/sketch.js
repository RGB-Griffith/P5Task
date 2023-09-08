"use strict";
let rectX=0;
let rectY=0;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
    rect(rectX,rectY,200,100);
    console.log("rectX",rectX,rectY);
    rectX+=5;
    rectY+=5;
}