/* eslint-disable */
const game = new Game();

let player1Gamescore = document.querySelector('.player1Gamescore');
let player1Score = 0;
player1Gamescore.innerText = player1Score;

let scoreContainer = document.querySelector('.score-container');

let player2Gamescore = document.querySelector('.player2Gamescore');
let player2Score = 0;
player2Gamescore.innerText = player2Score;

let playerDown;
let playerLeft;
let playerRight;
let playerUp;
let treasureImg;
function preload() {
  playerDown = loadImage('./assets/character-down.png');
  playerLeft = loadImage('./assets/character-left.png');
  playerRight = loadImage('./assets/character-right.png');
  playerUp = loadImage('./assets/character-up.png');
  treasureImg = loadImage('./assets/treasure.png');
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('canvas');
  treasure.setRandomPosition();
  console.log(treasure);
}

function draw() {
  switch(player1.direction) {
    case 'down':
      player1.playerImg = './assets/character-down.png';
      break;
    case 'left':
      player1.playerImg = './assets/character-left.png';
      break;
    case 'right':
        player1.playerImg = './assets/character-right.png';
        break;
    case 'up':
        player1.playerImg = './assets/character-up.png';
        break;
  }
  switch(player2.direction) {
    case 'down':
      player2.playerImg = './assets/character-down.png';
      break;
    case 'left':
      player2.playerImg = './assets/character-left.png';
      break;
    case 'right':
        player2.playerImg = './assets/character-right.png';
        break;
    case 'up':
        player2.playerImg = './assets/character-up.png';
        break;
  }
  clear();
  game.drawGrid();
  treasure.drawTreasure();
  player1.draw();
  player2.draw();
}
  

function keyPressed() {
  if (keyCode === 37 && player1.row > 0) {
    // move left
    player1.direction = 'left';
    player1.moveLeft();
  } 
  else if (keyCode === 38 && player1.col > 0) {
    // move up
    player1.direction = 'up';
    player1.moveUp();
  }
  else if (keyCode === 39 && player1.row < 10 * SQUARE_SIDE - SQUARE_SIDE) {
    // move right
    player1.direction = 'right';
    player1.moveRight();
  } else if (keyCode === 40 && player1.col < 10 * SQUARE_SIDE - SQUARE_SIDE) {
    // move down
    player1.direction = 'down';
    player1.moveDown();
  }
  if (
    player1.col / SQUARE_SIDE === treasure.col &&
    player1.row / SQUARE_SIDE === treasure.row
  ) {
    // player1 found treasure!
    player1Score += 1;
    player1Gamescore.innerText = player1Score;
    treasure.setRandomPosition();
  }
  if (keyCode === 65 && player2.row > 0) {
    // move left
    player2.direction = 'left';
    player2.moveLeft();
  } 
  else if (keyCode === 87 && player2.col > 0) {
    // move up
    player2.direction = 'up';
    player2.moveUp();
  }
  else if (keyCode === 68 && player2.row < 10 * SQUARE_SIDE - SQUARE_SIDE) {
    // move right
    player2.direction = 'right';
    player2.moveRight();
  } else if (keyCode === 83 && player2.col < 10 * SQUARE_SIDE - SQUARE_SIDE) {
    // move down
    player2.direction = 'down';
    player2.moveDown();
  }
  if (
    player2.col / SQUARE_SIDE === treasure.col &&
    player2.row / SQUARE_SIDE === treasure.row
  ) {
    // player21 found treasure!
    player2Score += 1;
    player2Gamescore.innerText = player2Score;
    treasure.setRandomPosition();
  }
  if (player1Score === 10) {
    let player1Wins = document.createElement('h1');
    player1Wins.innerText = 'PLAYER 1 WINS!!!'
    document.querySelector('.score-container').appendChild(player2Wins);
    let glitter = document.createElement('img'); 
    glitter.setAttribute('src', './assets/glitter.gif');
    scoreContainer.appendChild(glitter);

  } else if (player2Score === 10) {
    let player2Wins = document.createElement('h1');
    player2Wins.innerText = 'PLAYER 2 WINS!!!'
    scoreContainer.appendChild(player2Wins);
    let glitter = document.createElement('img'); 
    glitter.setAttribute('src', './assets/glitter.gif');
    scoreContainer.appendChild(glitter);
  }
}



// if (player === 'player1') {
//   [left, up, right, down] = [37, 38, 39, 40];
// } else if (player === 'player2') {
//   [left, up, right, down] = [65, 87, 68, 83]
// }