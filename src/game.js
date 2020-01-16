class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    strokeWeight(3);

    // horizontal lines
    let numberOfLines = WIDTH / SQUARE_SIDE;
    for (let i = 0; i < numberOfLines + 1; i++) {
      line(0, i * SQUARE_SIDE, WIDTH, i * SQUARE_SIDE);
    }

    // vertical lines
    for (let i = 0; i < numberOfLines + 1; i++) {
      line(i * SQUARE_SIDE, 0, i * SQUARE_SIDE, HEIGHT);
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.images = {
      up: "",
      down: "",
      left: "",
      right: ""
    };
    this.currentImage = "";
  }

  loadImages() {
    this.images.up = loadImage("./assets/character-up.png");
    this.images.down = loadImage("./assets/character-down.png");
    this.images.left = loadImage("./assets/character-left.png");
    this.images.right = loadImage("./assets/character-right.png");
    this.currentImage = this.images.down;
  }

  moveUp() {
    if (this.row > 0) {
      this.row -= SQUARE_SIDE;
      this.currentImage = this.images.up;
    }
  }
  moveDown() {
    if (this.row < HEIGHT - SQUARE_SIDE) {
      this.row += SQUARE_SIDE;
      this.currentImage = this.images.down;
    }
  }
  moveLeft() {
    if (this.col > 0) {
      this.col -= SQUARE_SIDE;
      this.currentImage = this.images.left;
    }
  }
  moveRight() {
    if (this.col < WIDTH - SQUARE_SIDE) {
      this.col += SQUARE_SIDE;
      this.currentImage = this.images.right;
    }
  }

  drawPlayer() {
    image(this.currentImage, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image = "";
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * SQUARE_SIDE;
    this.row = Math.floor(Math.random() * 10) * SQUARE_SIDE;
  }

  drawTreasure() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}

class Trap extends Treasure {
  drawTrap() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}
