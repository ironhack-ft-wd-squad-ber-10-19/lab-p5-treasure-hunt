let img;
let img2;


function preload() {
  // img = loadImage("assets/character-down.png")\
  player.preload()
  treasure.preload()
}

function keyPressed() {
  player.keyPressed()
}
const game = new Game()
const treasure = new Treasure;

function setup() {
  let canvas = createCanvas(WIDTH, WIDTH);
  canvas.parent("canvas");
}


treasure.setRandomPositon()

if (treasure.col === player.col) {
  treasure.setRandomPositon()
}

function draw() {
  game.drawGrid();
  player.draw();

  treasure.drawTreasure();

}