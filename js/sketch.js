"use-strict";

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);

    fill(255, 0, 0);
    stroke(0);
    strokeWeight(2);
    rect(width - 225, 25, 180, 80, 20);
    fill(255,255,0);
    ellipse(width - 75, 75, 40);
    fill(0,0,255);
    rect(150, 150, 500, 100, 20);
}