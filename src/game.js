class Game {
  drawGrid() {
    for (let row = 0; row <= 1000; row += HEIGHT / 10) {
      for (let col = 0; col <= 1000; col += WIDTH / 10) {
        line(0, row, 1000, row);
        line(col, 0, col, 1000);
      }
    }
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    clear();
    this.row -= 100;
  }

  moveDown() {
    clear();
    this.row += 100;
  }

  moveLeft() {
    clear();
    this.col -= 100;
  }

  moveRight() {
    clear();
    this.col += 100;
  }

  draw() {
    image(img, this.col, this.row, 100, 100);
  }
}

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
  }

  draw() {
    image(
      img2,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }

  setRandomPosition() {
    this.row = Math.floor(random(1,10));
    this.col = Math.floor(random(1,10));
  }
}
