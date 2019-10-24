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

let imgUp;
let imgDown;
let imgLeft;
let imgRight;

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

  drawTreasure() {
    this.x === player.col && this.y === player.row
      ? ((this.x = this.setRandomPosition()),
        (this.y = this.setRandomPosition()))
      : null;
    image(this.imgTreasure, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
  }
}
