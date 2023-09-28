"use-strict";

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);

    // Create the rounded box in the top right
    fill(255, 0, 0); // Set the fill color to red
    stroke(0); // Set the stroke color to black
    strokeWeight(2); // Set the stroke weight
    rect(width - 200, 20, 180, 80, 20); // Draw the rounded box

    // Calculate the position for the wider rectangles to center them on the screen
    let rectCount = 3;
    let rectWidth = 200; // Make the rectangles wider
    let rectHeight = 100; // Make the rectangles shorter
    let rectSpacing = 20;
    let totalRectsWidth = (rectWidth + rectSpacing) * rectCount - rectSpacing;
    let x = (width - totalRectsWidth) / 2; // Centered horizontally
    let y = (height - rectHeight) / 2; // Centered vertically

    // Create three wider rectangles with rounded edges
    for (let i = 0; i < rectCount; i++) {
        fill(0, 0, 255); // Set the fill color to blue
        rect(x, y, rectWidth, rectHeight, 10); // Draw the wider rectangle
        x += rectWidth + rectSpacing; // Update x for the next rectangle
    }

    // Add a yellow circle to the top shape
    fill(255, 255, 0); // Set the fill color to yellow
    noStroke(); // No stroke for the circle
    let circleX = width - 110; // X-coordinate for the circle
    let circleY = 60; // Y-coordinate for the circle
    let circleDiameter = 40; // Diameter of the circle
    ellipse(circleX, circleY, circleDiameter, circleDiameter); // Draw the circle
}