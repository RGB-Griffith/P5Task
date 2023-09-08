"use strict";

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
}