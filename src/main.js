const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure(0, 0);
treasure.setRandomPosition();

function preload() {
  //imgPlayerUp = loadImage("../assets/character-up.png");
  imgPlayerDown = loadImage("../assets/character-down.png"); // default
  //imgPlayerLeft = loadImage("../assets/character-left.png");
  //imgPlayerRight = loadImage("../assets/character-right.png");
  imgTreasure = loadImage("../assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}
