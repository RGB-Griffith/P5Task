"use strict";

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
    line(0,200,400,200);
    //if(mouseMoved){}
    let topX=200;
    let topY=200;
    let leftX=topX+100;
    let leftY=topY-100;
    let rightX=topX-100;
    let rightY=topY-100;
    triangle(
            leftX, leftY,
            topX, topY, 
            rightX, rightY);
    
    //if(mouseMoved){}
        let topX=200;
        let topY=200;
        let leftX=topX-100;
        let leftY=topY+100;
        let rightX=topX+100;
        let rightY=topY+100;
        triangle(
                leftX, leftY,
                topX, topY, 
                rightX, rightY);
}
