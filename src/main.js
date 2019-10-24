const game = new Game();
const player1 = new Player(0, 0);
const treasure = new Treasure();
let imgPlayer;
let imgTreasure;

function preload() {
  console.log("Preload");
  imgPlayer = loadImage("assets/character-down.png");
  imgTreasure = loadImage("assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid()
  player1.draw()
  treasure.draw();
}

function keyPressed() {
  player1.keyPressed()
}

function setRandomPosition() {
  treasure.setRandomPosition();
}