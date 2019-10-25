class Game {
  drawGrid() {
    // vertical
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, WIDTH);
    }

    // horizontal
    for (let y = 0; y <= WIDTH; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
    }
  }
}

// Images
let imgUp;
let imgDown;
let imgLeft;
let imgRight;
// Score
let score1 = 0,
  score2 = 0;

class Player {
  constructor(x, y) {
    this.col = x;
    this.row = y;
  }

  moveUp() {
    if (this.row > 0) {
      this.row -= SQUARE_SIDE;
      this.img = imgUp;
    }
  }

  moveDown() {
    if (this.row < WIDTH - SQUARE_SIDE) {
      this.row += SQUARE_SIDE;
      this.img = imgDown;
    }
  }

  moveLeft() {
    if (this.col > 0) {
      this.col -= SQUARE_SIDE;
      this.img = imgLeft;
    }
  }

  moveRight() {
    if (this.col < WIDTH - SQUARE_SIDE) {
      this.col += SQUARE_SIDE;
      this.img = imgRight;
    }
  }
  preload() {
    imgLeft = loadImage("../assets/character-left.png");
    imgRight = loadImage("../assets/character-right.png");
    imgUp = loadImage("../assets/character-up.png");
    imgDown = loadImage("../assets/character-down.png");
    this.img = imgDown;
  }

  draw() {
    image(this.img, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}

class Treasure {
  constructor() {
    this.x = this.setRandomPosition();
    this.y = this.setRandomPosition();
  }

  preload() {
    this.imgTreasure = loadImage("../assets/treasure.png");
  }

  setRandomPosition() {
    let randomPosition =
      Math.floor(Math.random() * Math.floor(WIDTH / SQUARE_SIDE)) * SQUARE_SIDE;
    return randomPosition;
  }

  redrawTreasure(score, scoreBox) {
    this.x = this.setRandomPosition();
    this.y = this.setRandomPosition();
    score += 1;
    scoreBox.innerText = score;
  }

  drawTreasure() {
    this.x === player1.col && this.y === player1.row
      ? this.redrawTreasure(score1, scorePlayer1)
      : null;
    this.x === player2.col && this.y === player2.row
      ? this.redrawTreasure(score2, scorePlayer2)
      : null;
    image(this.imgTreasure, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
  }
}
