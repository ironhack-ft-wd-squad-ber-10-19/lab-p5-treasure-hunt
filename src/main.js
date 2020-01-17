const game = new Game();

let viking;
let treasureImg;

function preload() {
  viking = loadImage('/assets/character-down.png');
  treasureImg = loadImage('/assets/treasure.png');
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('canvas');
}

function draw() {
  clear();
  game.drawGrid();
  player1.draw();
  treasure.draw();
}
class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    if (this.col > 0) {
      console.log('Player moved UP');
      this.col -= 100;
    }
  }
  moveDown() {
    if (this.col < 900) {
      console.log('Player moved DOWN');
      this.col += 100;
    }
  }
  moveLeft() {
    if (this.row > 0) {
      console.log('Player moved LEFT');
      this.row -= 100;
    }
  }
  moveRight() {
    if (this.row < 900) {
      console.log('Player RIGHT');
      this.row += 100;
    }
  }
  checkPosition() {
    if (this.row === treasure.row && this.col === treasure.col) {
      console.log('within the if statement');
      treasure.setRandomPosition();
    }
  }
  draw() {
    image(viking, this.row, this.col, 100, 100);
    this.checkPosition();
  }
}

const player1 = new Player(0, 0);

function keyPressed() {
  console.log('key pressed ', keyCode);
  if (keyCode === 38) {
    player1.moveUp();
  } else if (keyCode === 40) {
    player1.moveDown();
  } else if (keyCode === 39) {
    player1.moveRight();
  } else if (keyCode === 37) {
    player1.moveLeft();
  }
}

class Treasure {
  constructor() {
    this.col = 400;
    this.row = 200;
  }
  setRandomPosition() {
    let randomPosition1 = Math.floor(Math.random() * 10);
    let randomPosition2 = Math.floor(Math.random() * 10);
    this.row = Math.floor(randomPosition1 * 100);
    this.col = Math.floor(randomPosition2 * 100);
  }

  draw() {
    image(treasureImg, this.row, this.col, 100, 100);
  }
}

const treasure = new Treasure();
treasure.setRandomPosition();

// setRandomPosition() {
//   let randomPosition = Math.floor(Math.random() * 1000);
//   this.row = Math.floor(randomPosition / 100) * 100;
//   this.col = Math.floor(randomPosition / 100) * 100;
// }
