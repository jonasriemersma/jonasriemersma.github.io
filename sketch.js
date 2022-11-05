function preload() {
  antiqueolive = loadFont("fonts/Antique-Olive-Std-Nord_3868.ttf");
  garamond = loadFont("fonts/EBGaramond-Regular.ttf");
  bau = loadFont("fonts/bau.ttf");
  franziska = loadFont("fonts/FF Franziska OFFC Black Italic.ttf");
  spiky = loadFont("fonts/spiky.ttf");
  img1 = loadImage("fonts/spook.jpeg");
}
let fonts;
let bigness = 10;
// var fonts = ["antiqueolive", "spiky", "EBGaramond-Regular", "bau", "FF Franziska OFFC Black Italic"];
var index;
let x = 100;
let y = 100;
let xcat = 100;
let ycat = 100;
let xSpeed = 5;
let ySpeed = 5;
let textdirect = 10;

function setup() {
  createCanvas(640, 480);
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);
  index = round(random(0, 4));
  catshow = 2;

  fonts = [antiqueolive, spiky, garamond, bau, franziska];
}

function draw() {
  background(255, -xSpeed * 10, -ySpeed * 10);

  noStroke();
  fill(0, xSpeed * 10, ySpeed * 10);
  ellipse(x, y, 150, 150);

  image(img1, xcat - 75, ycat - 75, 150, 150);

  x = x + xSpeed;
  y = y + ySpeed;
  xcat = xcat + xSpeed;
  ycat = ycat + ySpeed;

  if (x > 567 || x < 73) {
    xSpeed = -xSpeed * 1.05;
    catshow = random(0, 50);
    bigness = bigness * 1.05;
  }
  if (y > 407 || y < 73) {
    ySpeed = -ySpeed * 1.05;
    catshow = random(0, 50);
    bigness = bigness * 1.05;
  }
  if (x > 650) {
    x = random(0, 640);
    y = random(0, 480);
    xSpeed = random(-40, 40);
    ySpeed = random(-40, 40);
  }
  if (y > 490) {
    x = random(0, 640);
    y = random(0, 480);
    xSpeed = random(-40, 40);
    ySpeed = random(-40, 40);
  }
  if (catshow > 1) {
    xcat = -1000;
    ycat = -1000;
  }
  if (catshow < 1) {
    xcat = x;
    ycat = y;
  }
  if (xSpeed > 80 || ySpeed > 80) {
    catshow = 2;
  }

  if (bigness > 800) {
    xSpeed = random(5, 15);
    ySpeed = random(5, 15);
    bigness = 1;
    index = round(random(0, 4));
    textFont(fonts[index]);
    textdirect = -10;
  }
  textAlign(CENTER);
  textSize(bigness);

  text("THERE IS NO DANGER", width / 2, height / 2 - textdirect * 0.5);
}

// use mask
