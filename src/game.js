class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
      line(i, 0, i, HEIGHT);
    }
  }
}

class Player {
  constructor(initX, initY) {
    this.col = initX;
    this.row = initY;
    this.playerImage;
  }
  moveUp() {
    if (this.row > 0) {
      this.row -= SQUARE_SIDE;
      console.log("row->", this.row, "col->", this.col);
    }
    this.playerImage = charUp;
  }
  moveDown() {
    let boundary = WIDTH - SQUARE_SIDE;
    if (this.row < boundary) {
      this.row += SQUARE_SIDE;
      console.log("row->", this.row, "col->", this.col);
    }
    this.playerImage = charDown;
  }
  moveLeft() {
    if (this.col > 0) {
      this.col -= SQUARE_SIDE;
      console.log("row->", this.row, "col->", this.col);
    }
    this.playerImage = charLeft;
  }
  moveRight() {
    let boundary = WIDTH - SQUARE_SIDE;

    if (this.col < boundary) {
      this.col += SQUARE_SIDE;
      // console.log("col", this.col);
      console.log("row->", this.row, "col->", this.col);
    }
    this.playerImage = charRight;
  }

  draw() {
    image(
      this.playerImage || charDown,
      this.col,
      this.row,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }
}

class Treasure {
  constructor() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
  }

  draw() {
    image(imageOfTreasure, this.col, this.row, 100, 100);
  }
  positionRandomly() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
    this.draw();
  }
  checkIfPlayerGotIt() {
    if (player.row === this.row && player.col === this.col) {
      this.positionRandomly();
      console.log("yup");
    }
  }
}
