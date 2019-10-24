let imgPlayer;
let imgTreasure;


function preload() {
  imgPlayerDown = loadImage("../assets/character-down.png")
  imgPlayerUp = loadImage("../assets/character-up.png")
  imgPlayerLeft = loadImage("../assets/character-left.png")
  imgPlayerRight = loadImage("../assets/character-right.png")
  imgTreasure = loadImage("../assets/treasure.png")
}

const game = new Game();
const player1 = new Player();
let playerDirection = "down";
const treasure = new Treasure();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player1.drawPlayer(playerDirection);
  treasure.drawTreasure();
  treasure.treasureCheck();

}

function keyPressed() {
  if (keyCode === LEFT_ARROW && player1.col > 0) {
    player1.moveLeft();
    playerDirection = "left";
  } else if (keyCode === RIGHT_ARROW && player1.col < WIDTH - SIDE) {
    player1.moveRight();
    playerDirection = "right";
  } else if (keyCode === UP_ARROW && player1.row > 0) {
    player1.moveUp();
    playerDirection = "up";
  } else if (keyCode === DOWN_ARROW && player1.row < HEIGHT - SIDE) {
    player1.moveDown();
    playerDirection = "down";
  }
}