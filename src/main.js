const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure(0, 0);

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
  // keyIsDown();
  /*  if (keyIsDown(37)) {
    // console.log("key left");
    player.moveLeft();
  } else if (keyIsDown(39)) {
    // console.log("another key is right");
  } else if (keyIsDown(40)) {
    // console.log("key down");
  } else if (keyIsDown(38)) {
    // console.log("key up");
  } */
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

// function keyIsDown() {
//   console.log("key pressed");
//   if (keyCode === 37) {
//   }
// }
