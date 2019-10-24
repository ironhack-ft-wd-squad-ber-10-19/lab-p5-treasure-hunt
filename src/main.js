const game = new Game();
const player = new Player();
const player2 = new Player();
const treasure = new Treasure();
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

let img;
let treasureImg;

function preload() {
  img = loadImage("assets/character-down.png");
  treasureImg = loadImage("assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition();
}

function draw() {
  game.drawGrid();

  player.draw();
  player2.draw();
  treasure.drawTreasure();
}

function keyPressed() {
  if (keyCode === 37 && player.x > 0) {
    player.moveLeft();
  } else if (keyCode === 39 && player.x < 900) {
    player.moveRight();
  } else if (keyCode === 40 && player.y < 900) {
    player.moveDown();
  } else if (keyCode === 38 && player.y > 0) {
    player.moveUp();
  }
  if (keyCode === 65 && player2.x > 0) {
    player2.moveLeft();
  } else if (keyCode === 68 && player2.x < 900) {
    player2.moveRight();
  } else if (keyCode === 83 && player2.y < 900) {
    player2.moveDown();
  } else if (keyCode === 87 && player2.y > 0) {
    player2.moveUp();
  }
}

function keyReleased() {
  addScore();
  translateTreasure();
}

function addScore() {
  if (player.x === treasure.x && player.y === treasure.y) {
    score1.innerHTML = Number(score1.innerHTML) + 100;
  } else if (player2.x === treasure.x && player2.y === treasure.y) {
    score2.innerHTML = Number(score2.innerHTML) + 100;
  }
}

function translateTreasure() {
  if (player.x === treasure.x && player.y === treasure.y) {
    treasure.x = Math.floor(Math.random() * 9) * 100;
    treasure.y = Math.floor(Math.random() * 9) * 100;
  } else if (player2.x === treasure.x && player2.y === treasure.y) {
    treasure.x = Math.floor(Math.random() * 9) * 100;
    treasure.y = Math.floor(Math.random() * 9) * 100;
  }
}
