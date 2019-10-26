let scorePlayer1 = 0;
let scorePlayer2 = 0;

const game = new Game();
const player1 = new Player(0, 0);
const player2 = new Player2(9, 9);
const treasure = new Treasure(5, 5);

function preload() {
  player1.preload();
  player2.preload();
  treasure.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();

  player1.draw();
  player2.draw();

  if (player1.col == treasure.col && player1.row == treasure.row) {
    treasure.setRandomPosition();
    scorePlayer1 += 1;
    document.getElementsByTagName("span")[0].innerHTML = scorePlayer1;
  }

  if (player2.col == treasure.col && player2.row == treasure.row) {
    treasure.setRandomPosition();
    scorePlayer2 += 1;
    document.getElementsByTagName("span")[1].innerHTML = scorePlayer2;
  }

  textSize(32);
  text("Player1 Score : " + scorePlayer1, 10, 30);
  text("Player2 Score : " + scorePlayer2, 10, 70);

  treasure.drawTreasure();
}

function keyPressed() {
  player1.keyPressed();
  player2.keyPressed();
}
