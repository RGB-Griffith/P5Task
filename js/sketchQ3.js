"use strict";

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
    fill("turquoise")
    rect(0,300,width,100);
    fill("grey");
    triangle(25,325,
            25,375,
            75,350);
}