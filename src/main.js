// console.log("works");

const game = new Game();

function preload() {
  game.preLoadGame();
}
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
  game.setupGame();
}

function draw() {
  game.drawGrid();
  game.drawGame();
}

function keyPressed() {
  game.keyIsPressed(keyCode);
}

