"use strict";
let rect1X=150;
let rect1Y=100;
let rect1W=100;
let rect1H=100;

let rect2X=rect1X+100;
let rect2Y=rect1Y;
let rect2W=rect1W;
let rect2H=rect1H;

let rect3X=rect2X+100;
let rect3Y=rect1Y;
let rect3W=rect1W;
let rect3H=rect1H;

let rect4X=rect1X;
let rect4Y=rect1Y+100;
let rect4W=rect1W;
let rect4H=rect1H;

let rect5X=rect1X+100;
let rect5Y=rect1Y+100;
let rect5W=rect1W;
let rect5H=rect1H;

let rect6X=rect2X+100;
let rect6Y=rect1Y+100;
let rect6W=rect1W;
let rect6H=rect1H;

function setup(){
    createCanvas(600,600);
}

function draw(){
    background(120,120,120);
    fill("red");
    rect(rect1X,rect1Y,rect1W,rect1H);
    //fill("yellow");
        circle(rect1X,rect1Y,25);
    fill("yellow");
    rect(rect2X,rect2Y,rect2W,rect2H);
        rect(rect2X,rect2Y,25,25);
    fill("blue");
    rect(rect3X,rect3Y,rect3W,rect3H);
        triangle(rect3X,rect3Y,rect3X+25,rect3Y+25,rect3X+50,rect3Y+50);
    fill("red");
    rect(rect4X,rect4Y,rect4W,rect4H);
        rect(rect4X,rect4Y,25,50);
    fill("yellow");
    rect(rect5X,rect5Y,rect5W,rect5H);

    fill("blue");
    rect(rect6X,rect6Y,rect6W,rect6H);
        rect(rect6X,rect6Y,25,25);
}