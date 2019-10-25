class Game {
  constructor() {}
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    for (let row = 0; row <= 1000; row += SQUARE_SIDE) {
      for (let col = 0; col <= 1000; col += SQUARE_SIDE) {
        line(0, row, 1000, row);
        line(col, 0, col, 1000);
      }
    }
  }
}

class Player {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.score = 0;
    this.direction = DOWN_ARROW;
  }

  moveUp() {
    if (this.col > 0) {
      this.col -= 1;
    }
  }
  moveDown() {
    if (this.col < 9) {
      this.col += 1;
    }
  }
  moveLeft() {
    if (this.row > 0) {
      this.row -= 1;
    }
  }
  moveRight() {
    if (this.row < 9) {
      this.row += 1;
    }
  }

  draw() {
    if (this.direction === LEFT_ARROW) {
      image(
        playerLeft,
        this.row * SQUARE_SIDE,
        this.col * SQUARE_SIDE,
        SQUARE_SIDE,
        SQUARE_SIDE
      );
    } else if (this.direction === RIGHT_ARROW) {
      image(
        playerRight,
        this.row * SQUARE_SIDE,
        this.col * SQUARE_SIDE,
        SQUARE_SIDE,
        SQUARE_SIDE
      );
    } else if (this.direction === UP_ARROW) {
      image(
        playerUp,
        this.row * SQUARE_SIDE,
        this.col * SQUARE_SIDE,
        SQUARE_SIDE,
        SQUARE_SIDE
      );
    } else if (this.direction === DOWN_ARROW) {
      image(
        player1Img,
        this.row * SQUARE_SIDE,
        this.col * SQUARE_SIDE,
        SQUARE_SIDE,
        SQUARE_SIDE
      );
    }
  }
}

class Treasure {
  constructor() {
    this.row = 0;
    this.col = 0;
  }

  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
  }

  drawTreasure() {
    image(
      treasureImg,
      this.row * SQUARE_SIDE,
      this.col * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }
}
