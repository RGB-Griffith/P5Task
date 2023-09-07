"use strict";

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
    let circleX=200; //let is needed otherwise no output :)
    let circleY=200;
    let circleDiam=50;
    circle(circleX,circleY,circleDiam);
    circleX+=1;
    //task 2 flipped
    /* line(0,200,400,200);
    if(mouseY <= 200){
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
    }
    if(mouseY >= 200) {
        let topX2=200;
        let topY2=200;
        let leftX2=topX-100;
        let leftY2=topY+100;
        let rightX2=topX+100;
        let rightY2=topY+100;
        triangle(
                leftX2, leftY2,
                topX2, topY2, 
                rightX2, rightY2);
           } */ 

    //task 3 catch a circle
    
}
