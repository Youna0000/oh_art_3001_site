//hw 2//
let x, y, n, m, r, g, b,j, extraCanvas;
x = 200;
y = 200;

function setup() {
  createCanvas(500, 500);
  extraCanvas = createGraphics(500, 500);
  extraCanvas.clear();
  background(0);
}

function draw() {
  background(197, 241, 299);//blue
  x += random(-5, 5);
  y += random(-5, 5);
  n = random(5, 30);
  m = random(-4, 5);
  r = random(255);
  g = random(600);
  b = random(500);

  extraCanvas.noStroke();
  extraCanvas.fill(250);
  extraCanvas. circle(mouseX, mouseY, 2);
  if (mouseX > 250) {
    background(75, 42, 6);//brown
  }

  if (25 > n > 20) {
    r = 53;
    g = 241;
    b = 216;
  } else if (n < 15) {
    r = 0;
    g = 180;
    b = 200;
  }

  if (mouseIsPressed) {
    extraCanvas.fill(r, g, b, 100);
    extraCanvas.noStroke();
    let dotX = random(width);
    let dotY = random(height);
    extraCanvas.ellipse(dotX, dotY, n, n + m);

    image(extraCanvas, 0, 0);
  }
}