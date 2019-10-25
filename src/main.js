const game = new Game();
const player1 = new Player(0, 0);
const treasure = new Treasure();

treasure.setRandomPosition();
let score = document.querySelector(".score");

let player1Img;
let treasureImg;
let playerUp;
let playerLeft;
let playerRight;
function preload() {
  player1Img = loadImage("assets/character-down.png");
  console.log("Preload");
  treasureImg = loadImage("assets/treasure.png");
  playerUp = loadImage("assets/character-up.png");
  playerLeft = loadImage("assets/character-left.png");
  playerRight = loadImage("assets/character-right.png");
}
function setup() {
  console.log("Setup");
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.background(190);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player1.draw();
  treasure.drawTreasure();
}

function keyPressed() {
  console.log(keyCode);

  if (keyCode === LEFT_ARROW) {
    player1.direction = LEFT_ARROW;
    player1.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player1.direction = RIGHT_ARROW;
    player1.moveRight();
  } else if (keyCode === DOWN_ARROW) {
    player1.direction = DOWN_ARROW;
    player1.moveDown();
  } else if (keyCode === UP_ARROW) {
    player1.direction = UP_ARROW;
    player1.moveUp();
  }

  if (player1.col === treasure.col && player1.row === treasure.row) {
    player1.score += 1;
    treasure.setRandomPosition();
    score.innerText = player1.score;
  }
}
