const game = new Game();
const player1 = new Player(0, 0);
const player2 = new Player(9, 9);
const treasure = new Treasure();

function preload() {
  player1.preLoadPlayer();
  player2.preLoadPlayer();
  treasure.preLoadTreasure();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  player1.setupPlayer();
  player2.setupPlayer();
  treasure.setRandomPosition();
}

function draw() {
  clear();
  game.drawGrid();
  player1.drawPlayer();
  player2.drawPlayer();
  treasure.drawTreasure();
}

function keyPressed() {
  if (keyCode === 37) player1.moveLeft();
  if (keyCode === 39) player1.moveRight();
  if (keyCode === 38) player1.moveUp();
  if (keyCode === 40) player1.moveDown();
  if (keyCode === 65) player2.moveLeft();
  if (keyCode === 68) player2.moveRight();
  if (keyCode === 87) player2.moveUp();
  if (keyCode === 83) player2.moveDown();
  // move();
  win();
}

function win() {
  let distPlayer1 = dist(player1.col, player1.row, treasure.col, treasure.row);
  let distPlayer2 = dist(player2.col, player2.row, treasure.col, treasure.row);

  if (distPlayer1 === 0) {
    player1.score += 1;
    updateScoreBoard();
    setup();
    draw();
  } else if (distPlayer2 === 0) {
    player2.score += 1;
    updateScoreBoard();
    setup();
    draw();
  }
}

function updateScoreBoard() {
  document.querySelector('.player1 > span').innerText = player1.score;
  document.querySelector('.player2 > span').innerText = player2.score;
}
