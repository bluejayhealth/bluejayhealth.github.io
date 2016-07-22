function preload() {
  img = loadImage("videoplaying2.png");
}

function setup() {
  createCanvas(375, 667);
  x = 20;
  y = 12;
  a = 347.5;
  b = 234.5;
  shouldGrow = true;
}

function draw() {
  image(img, 0, 0);
  stroke(37, 165, 233);
  fill(255);
  ellipse(349, 230, x, x);
  textSize(y);
  fill(37, 165, 233);
  textFont("Times New Roman");
  text("i", a, b);
  
  if (x > 25) {
    shouldGrow = false;
  }
  else if (x < 19) {
    shouldGrow = true;
  }
  
  if (shouldGrow === false) {
    x = x - 0.07;
    y = y - 0.07;
    a = a + 0.01;
  }
  else {
    x = x + 0.07;
    y = y + 0.07;
    a = a - 0.01;
  }
}