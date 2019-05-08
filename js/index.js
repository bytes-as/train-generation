start_x = 0.00;
increment = 0.01;
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    offset = start_x;
    stroke(255);
    noFill();
    beginShape();
    for(var x=0; x<innerWidth; x++){
        vertex(x, height* noise(offset));
        offset += increment;
    }
    start_x += increment;
    endShape();
}