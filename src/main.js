const game = new Game();

let characterDown;
let treasureImg;
let background1;
function preload() {
  characterDown = loadImage("assets/character-down.png");
  treasureImg = loadImage("assets/treasure.png");
  background1 = loadImage("assets/background.jpeg");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  background(background1);
  game.drawGrid();
}
