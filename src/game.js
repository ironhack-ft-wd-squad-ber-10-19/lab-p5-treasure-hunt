class Game {
  drawGrid() {
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
        stroke(0);
        strokeWeight(1);
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
  moveDown() {
    this.row += SQUARE_SIDE;
    console.log(this.col, this.row);
  }
  moveUp() {
    this.row -= SQUARE_SIDE;
    console.log(this.col, this.row);
  }
  moveRight() {
    this.col += SQUARE_SIDE;
    console.log(this.col, this.row);
  }
  moveLeft() {
    this.col -= SQUARE_SIDE;
    console.log(this.col, this.row);
  }
  draw() {
    image(imgPlayer, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
  keyPressed() {
    if (keyCode === 37 && this.col > -1 + SQUARE_SIDE) {
      this.moveLeft();
      clear();
    } else if (keyCode === 39 && this.col < WIDTH - SQUARE_SIDE) {
      this.moveRight();
      clear();
    } else if (keyCode === 40 && this.row < WIDTH - SQUARE_SIDE) {
      this.moveDown();
      clear();
    } else if (keyCode === 38 && this.row > -1 + SQUARE_SIDE) {
      this.moveUp();
      clear();
    }
  }
}

class Treasure {
  constructor(col, row) {
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * (WIDTH/50)) * SQUARE_SIDE;
    this.row = Math.floor(Math.random() * (WIDTH/50)) * SQUARE_SIDE;
   
  }
  draw() {
    image(imgTreasure, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}