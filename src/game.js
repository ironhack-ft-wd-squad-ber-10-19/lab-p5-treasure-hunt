class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    background(200);
    for (let x = 0; x < WIDTH; x += WIDTH / 10) {
      for (let y = 0; y < HEIGHT; y += HEIGHT / 10) {
        strokeWeight(2);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  drawPlayer() {
    frameRate(10);
    image(playerImg, this.col, this.row, 100, 100);
  }

  moveUp() {
    this.row -= 100;
  }

  moveDown() {
    this.row += 100;
  }

  moveLeft() {
    this.col -= 100;
  }
  moveRight() {
    this.col += 100;
  }
}

