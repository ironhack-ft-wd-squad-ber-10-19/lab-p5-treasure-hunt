const game = new Game();
const player1 = new Player(0, 0);
const treasure = new Treasure();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('canvas');
}

function draw() {
  clear();

  game.drawGrid();
  player1.draw();
  treasure.drawTreasure();
  updateScoreBoard();
  hunted();
  // keyPressed();
}

function hunted() {
  if (player1.col === treasure.col && player1.row === treasure.row) {
    // set new position until treasure place != playersplace
    while (player1.col === treasure.col && player1.row === treasure.row) {
      treasure.setRandomPosition();
    }
    player1.score += 100;
    updateScoreBoard(player1);
  }
}

function updateScoreBoard() {
  //update player 1

  const $player1Score = document.getElementById('player1Score');
  const $player2Score = document.getElementById('player2Score');

  //update player 2

  $player1Score.innerHTML = player1.score;
  //$player2Score.innerHTML = player2.score;
}

function keyPressed() {
  if (keyCode === 38) {
    player1.moveUp();
  }
  if (keyCode === 40) {
    player1.moveDown();
  }
  if (keyCode === 37) {
    player1.moveLeft();
  }
  if (keyCode === 39) {
    player1.moveRight();
  }
}

function preload() {
  let player1Image = {
    down: loadImage('assets/character-down.png'),
    up: loadImage('assets/character-up.png'),
    left: loadImage('assets/character-left.png'),
    right: loadImage('assets/character-right.png'),
  };

  /*   let player2Image = {
    down: loadImage('assets/character2-down.png'),
    up: loadImage('assets/character2-up.png'),
    left: loadImage('assets/character2-left.png'),
    right: loadImage('assets/character2-left.png'),
  }; */

  player1.addImages(player1Image);
  treasure.setRandomPosition();
  treasure.addImage(loadImage('assets/treasure.png'));
  //player1 = new Player(0, 0, playerImage);
}
