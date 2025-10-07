let Bvalue;
let col;
let topColor;
let bottomColor;
let leaves = [];
let appleColor;
let seasons = ["autumn", "winter"];
let appleScale = 1;

let scale = 100;
let scaleBiteX = 1;
let scaleBiteY = 1;

let season;
function setup() {
  createCanvas(400, 400);
  season = random(seasons);
}

function mousePressed() {
  season = random(seasons);
}

function draw() {
  let a = random(20, 200);
  noStroke();

  let Y = map(mouseX, 0, width, 0, 1, true);

  //sky colors differs by season
  if (season === "autumn") {
    topColor = color(255, 155, 131);
    bottomColor = color(237, 127, 28);
  } else if (season === "winter") {
    topColor = color(200, 230, 255);
    bottomColor = color(163, 136, 233);
  }

  col = lerpColor(topColor, bottomColor, Y);
  background(col);

  // apple position
  let xPos = map(mouseX, 0, width, width, 0, true);
  let yPos = map(mouseY, 0, height, 320, 0, true);

  // leaves
  fill(50, 180, 80);
  ellipse(xPos - 10, yPos - 65, 30, 15);
  ellipse(xPos - 35, yPos - 65, 30, 15);

  // stem
  fill(100, 60, 20);
  rect(xPos - 25, yPos - 60, 10, 40);

  // apple body
  fill(250, 102, 102);
  ellipse(xPos, yPos, 70, 80);
  ellipse(xPos - 30, yPos, 70, 80);

  //apple growth
  let appleWidth = 80 * appleScale;
  let appleHeight = 90 * appleScale;
  ellipse(xPos, yPos, appleWidth, appleHeight);
  ellipse(xPos - 30, yPos, appleWidth, appleHeight);

  // apple highlight
  fill(255, 246, 161, 100);
  ellipse(xPos - 30, yPos - 30, 10, 10);

  // apple bite
  let xPosbite = map(mouseX, 0, width, width + width / 2, -width / 2);
  let biteSize = map(mouseX, 0, width, 40, 60, true);
  fill(col);
  ellipse(xPosbite, yPos, biteSize, 70);

  // ground
  fill(182, 251, 174);
  rect(0, 350, 400, 50);
  if (season === "autumn") {
    fill(182, 251, 174);
    rect(0, 350, 400, 50);
  } else if (season === "winter") {
    noStroke();
    fill(225);
    rect(0, 350, 400, 50);
    fill(250);
    rect(0, 340, 400, 20);
  }

  // Tree
  fill(112, 76, 76);
  rect(350, 100, 40, 250);

  // tree shape
  if (season === "autumn") {
    fill(224, 74, 74);
    ellipse(350 + 15, 100, 200, 150);
    noStroke();
    ellipse(250-a, 100+a, 15, 10);
    ellipse(290-a, 90+a, 15, 10);
    ellipse(350-a, 70+a, 15, 10);
    ellipse(330-a, 50+a, 15, 10);
  } else if (season === "winter") {
    stroke(100);
    strokeWeight(7);
    line(350 + 15, 100, 350 - 40, 10);
    line(350 + 16, 100, 350 - 10, 10);
    line(350 + 17, 100, 350 + 40, 10);
    line(350 + 17, 100, 350 + 80, 10);
    fill(250);
    noStroke();
    ellipse(250-a, 100+a, 10, 10);
    ellipse(290-a, 90+a, 10, 10);
    ellipse(350-a, 70+a, 10, 10);
    ellipse(330-a, 50+a, 10, 10);
  }
}

//apple size growth *for this one, I tried it by myself, and there was an error that I could not fix it bymyself, so I asked chat gpt to help figure out what was wrong (the parts for growing/shrinking the size of apple through mouse click).
function keyPressed() {
  if (key === "a" || key === "A") {
    appleScale += 0.1;
    appleScale = constrain(appleScale, 0.5, 3);
  } else if (key === "s" || key === "S") {
    appleScale -= 0.1;
    appleScale = constrain(appleScale, 0.5, 3);
  }
}
