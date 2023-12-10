let x = 100;
let y = 100;
let xSpeed = 5;
let ySpeed = 5;

let x1 = 200;
let y1 = 200;
let xSpeed1 = 5;
let ySpeed1 = 5;

let x3 = 100;
let y3 = 100;
let xSpeed3 = 5;
let ySpeed3 = 5;

let x4 = 100;
let y4 = 100;
let xSpeed4 = 5;
let ySpeed4 = 5;

let x5 = 100;
let y5 = 100;
let xSpeed5 = 5;
let ySpeed5 = 5;

let x6 = 100;
let y6 = 100;
let xSpeed6 = 5;
let ySpeed6 = 5;

let x7 = 100;
let y7 = 100;
let xSpeed7 = 5;
let ySpeed7 = 5;


function setup() {
let c = createCanvas(640, 480);
c.parent('pfiveone');
  
//  createCanvas(640, 480);
  xSpeed = random(-0.1,0.1);
  ySpeed = random(-0.1,0.1);
  xSpeed1 = random(-0.1,0.1);
  ySpeed1 = random(-0.1,0.1);
  xSpeed2 = random(-0.1,0.1);
  ySpeed2 = random(-0.1,0.1);
  xSpeed3 = random(-0.1,0.1);
  ySpeed3 = random(-0.1,0.1);
  xSpeed4 = random(-0.1,0.1);
  ySpeed4 = random(-0.1,0.1);
  xSpeed5 = random(-0.1,0.1);
  ySpeed5 = random(-0.1,0.1);
  xSpeed6 = random(-0.1,0.1);
  ySpeed6 = random(-0.1,0.1);
  xSpeed7 = random(-0.1,0.1);
  ySpeed7 = random(-0.1,0.1);
  
  x = random(50,200);
  y = random(50,300);
  x1 = random(250,550);
  y1 = random(200,400);
  x2 = random(50,550);
  y2 = random(50,400);
  x3 = random(50,550);
  y3 = random(50,400);
  x4 = random(50,550);
  y4 = random(50,400);
  x5 = random(50,550);
  y5 = random(50,400);
  x6 = random(50,550);
  y6 = random(50,400);
  x7 = random(50,550);
  y7 = random(50,400);
  

}

function draw() {
  background(0, 0, 0, 100);

  noStroke();
  fill(255, 255, 255);
  textSize(23);
 
  textFont("happy times at the ikob new game plus edition")
  text("Jonas", x, y);
  text("Riemersma", x1, y1);
  textSize(40);
  text("*", x2, y2);
  text("*", x3, y3);
  text("*", x4, y4);
  text("*", x5, y5);
  text("*", x6, y6);
  

  textAlign(CENTER);

  if ((windowWidth / windowHeight) < 1){
    resizeCanvas(0,0);
    noLoop();
  }


  x = x + xSpeed;
  y = y + ySpeed;

  if (x > 510 || x < 101) {
    xSpeed = -xSpeed;
  }

  if (y > 450 || y < 30) {
    ySpeed = -ySpeed;
  }
  
  x1 = x1 + xSpeed1;
  y1 = y1 + ySpeed1;

  if (x1 > 510 || x1 < 101) {
    xSpeed1 = -xSpeed1;
  }

  if (y1 > 450 || y1 < 30) {
    ySpeed1 = -ySpeed1;
  }

    x2 = x2 + xSpeed2;
  y2 = y2 + ySpeed2;

  if (x2 > 510 || x2 < 101) {
    xSpeed2 = -xSpeed2;
  }

  if (y2 > 450 || y2 < 30) {
    ySpeed2 = -ySpeed2;
  }
  
  x3 = x3 + xSpeed3;
  y3 = y3 + ySpeed3;

  if (x3 > 510 || x3 < 101) {
    xSpeed3 = -xSpeed3;
  }

  if (y3 > 450 || y3 < 30) {
    ySpeed3 = -ySpeed3;
  }

    x4 = x4 + xSpeed4;
  y4 = y4 + ySpeed4;

  if (x4 > 510 || x4 < 101) {
    xSpeed4 = -xSpeed4;
  }

  if (y4 > 450 || y4 < 30) {
    ySpeed4 = -ySpeed4;
  }
  
    x5 = x5 + xSpeed5;
  y5 = y5 + ySpeed5;

  if (x5 > 510 || x5 < 101) {
    xSpeed5 = -xSpeed5;
  }

  if (y5 > 450 || y5 < 30) {
    ySpeed5 = -ySpeed5;
  }
  
    x6 = x6 + xSpeed6;
  y6 = y6 + ySpeed;

  if (x6 > 510 || x6 < 101) {
    xSpeed6 = -xSpeed6;
  }

  if (y6 > 450 || y6 < 30) {
    ySpeed6 = -ySpeed6;
  }
  
    x7 = x7 + xSpeed7;
  y7 = y7 + ySpeed7;

  if (x7 > 510 || x7 < 101) {
    xSpeed7 = -xSpeed7;
  }

  if (y7 > 450 || y7 < 30) {
    ySpeed7 = -ySpeed7;
  }

  
  
  
}
