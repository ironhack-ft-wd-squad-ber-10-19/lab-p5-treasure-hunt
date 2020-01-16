const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure(1, 1);

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

// function preload() {
//   player.preload();
// }

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.draw();
  treasure.checkIfPlayerGotIt();
  // keyIsDown();
}
function keyPressed() {
  console.log(keyCode);
  if (keyCode === 37) {
    player.moveLeft();
  }
  if (keyCode === 38) {
    player.moveUp();
  }
  if (keyCode === 39) {
    player.moveRight();
  }
  if (keyCode === 40) {
    player.moveDown();
  }
}
