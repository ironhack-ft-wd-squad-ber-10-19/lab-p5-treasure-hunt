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
  // treasure.setupTreasure();
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
  if (keyCode === 37) {
    player1.moveLeft();
  }
  if (keyCode === 39) {
    player1.moveRight();
  }
  if (keyCode === 38) {
    player1.moveUp();
  }
  if (keyCode === 40) {
    player1.moveDown();
  }
  if (keyCode === 65) {
    player2.moveLeft();
  }
  if (keyCode === 68) {
    player2.moveRight();
  }
  if (keyCode === 87) {
    player2.moveUp();
  }
  if (keyCode === 83) {
    player2.moveDown();
  }
  win();
}

function win() {
  let distPlayer1 = dist(player1.col, player1.row, treasure.col, treasure.row);
  let distPlayer2 = dist(player2.col, player2.row, treasure.col, treasure.row);

  let scoreBoardPlayer1 = document.querySelector('body > div.scores > h2.player1 > span').innerText;
  let scoreBoardPlayer2 = document.querySelector('.player2 > span').innerHTML;
console.log('SB1', scoreBoardPlayer1)
console.log('SB2', scoreBoardPlayer2)

  if (distPlayer1 === 0) {
    player1.score += 1;
    scoreBoardPlayer1 = player1.score;
    setup();
    draw();
  } else if (distPlayer2 === 0) {
    player2.score += 1;
    scoreBoardPlayer2 = player2.score;
    setup();
    draw();
  }
}

// function score() {
//   let scoreBoardPlayer1 = document.querySelector('.player1 span').innerText;
//   console.log(scoreBoardPlayer1)
//   let scoreBoardPlayer2 = document.querySelector('.player2 span').innerText;
  
//   // if (this.distPlayer1 === 0) {
//   //   player1.score += 1;
//   //   score()
//   // } else if (this.distPlayer2 === 0) {
//   //   player2.score += 1;
//   //   score()
//   // }
  
//   scoreBoardPlayer1 = player1.score;
//   scoreBoardPlayer2 = player2.score;
// }
