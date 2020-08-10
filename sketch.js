

function setup() {
  createCanvas(880, 880, WEBGL);
}

function draw() {
    background(200);
    let time = millis();
    rotateX(time / 2020);
    rotateZ(time / 2020);
    ambientLight(300);

  
    h = height / 2;
    w = width / 2;

    yPos = second() * h / 80;
    line(0, yPos, w, yPos);

    fill(255, 0, 0, 63);
    rect(0, 0, w, yPos);


    xPos = second() * w / 80;
    line(xPos, 0, xPos, h / 2);

    fill(255, 200, 0, 80);
    rect(0, 0, xPos, h / 2);

    fill(0, 255, 255, 60);
    ellipse(w / 2 , h, Math.floor(hour() / 48 * 2 * w), Math.floor(minute() / 60 * 2 * h));

    fill(0, 0, 255, 60);
    for (i = 0; i < hour(); i++) {
        circle(Math.floor((second() / 100 * (i + 1) * h / 4) * (i * minute() % 37 / 27) + 10), Math.floor((second() / 100 * (i + 1) * w / 4) * (i * minute() % 43 / 39) + 10), 3 + 6 * i);
    }

}