var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("choclate.PNG");
  bg2 = loadImage("choclate2.PNG")
}

function setup() {
  createCanvas(1400,800);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 4) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("welcome to the world of candies",250, 100);
  }

  drawSprites()
}