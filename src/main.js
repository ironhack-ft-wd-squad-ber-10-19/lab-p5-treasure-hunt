const game = new Game();
const player = new Player(0, 500);
const treasure = new Treasure(0, 100);

let img;
let img2;

function preload() {
  img = loadImage("../assets/character-down.png");
  img2 = loadImage("../assets/treasure.png");
}

//setup
function setup() {
  let canvas = createCanvas(1000, 1000);
  canvas.parent("canvas");
}

let x = 100;
let y = 100;
let side = 100;

//draw
function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.draw();
}

//KEY PRESS LRUD
function keyPressed() {
  console.log(keyCode);
  if (keyCode === 37) {
    // move left
    player.col -= side; // x = x - 20;
  } else if (keyCode === 39) {
    // move right
    player.col += side;
  } else if (keyCode === 40) {
    // move down
    player.row += side; // y = y + 20;
  } else if (keyCode === 38) {
    // move up
    player.row -= side; // y = y - 20;
  }
}
