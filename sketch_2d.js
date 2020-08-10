function setup() {
    createCanvas(800, 620); // make an HTML canvas element width x height pixels
}

function draw() {
    background(225);
    //    textSize(32);
    //    fill(180);
    //    text(hour(), 10, 30);
    //    fill(100);
    //    text(minute(), 10, 60);
    //    fill(0);
    //    text(second(), 10, 90);

    yPos = second() * height / 60;
    line(0, yPos, width, yPos);

    fill(255, 0, 0, 63);
    rect(0, 0, width, yPos);


    xPos = minute() * width / 60;
    line(xPos, 0, xPos, height);

    fill(255, 200, 0, 80);
    rect(0, 0, xPos, height);

    fill(0, 255, 255, 60);
    ellipse(width / 2, height, Math.floor(hour() / 48 * 2 * width), Math.floor(minute() / 60 * 2 * height));

    fill(0, 0, 255, 60);
    for (i = 0; i < hour(); i++) {
        circle(Math.floor((minute() / 100 * (i + 1) * height / 4) * (i * minute() % 37 / 27) + 10), Math.floor((minute() / 100 * (i + 1) * width / 4) * (i * minute() % 43 / 39) + 10), 3 + 6 * i);
    }

}
