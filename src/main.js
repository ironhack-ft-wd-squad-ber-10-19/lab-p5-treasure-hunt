const game = new Game();
let player = new Player(0, 0);
let treasure = new Treasure();

let imgS;
let imgN;
let imgE;
let imgW;
let imgTreasure;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  imgS = loadImage("./assets/character-down.png");
  imgN = loadImage("./assets/character-up.png");
  imgE = loadImage("./assets/character-right.png");
  imgW = loadImage("./assets/character-left.png"); 
  imgTreasure = loadImage("./assets/treasure.png");
}

function draw() {
  game.drawGrid();
  player.draw();
  treasure.draw();
  player.newGame();
  treasure.newGame();
}

function keyPressed() {
  console.log(keyCode);
  if (keyCode === 37) {
    // move left
    player.moveLeft(); //x = x - 20
  } else if (keyCode === 39) {
    //move right
    player.moveRight();
  } else if (keyCode === 40) {
    //move down
    player.moveDown();
  } else if (keyCode === 38) {
    //move up
    player.moveUp();
  } 
}