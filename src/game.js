class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i=0; i<=10; i++) {
      line(SQUARE_SIDE*i, 0, SQUARE_SIDE*i, HEIGHT)
      line(0, SQUARE_SIDE*i, WIDTH, SQUARE_SIDE*i)
    }
  }
}
let playerImg = loadImage("./assets/character-down.png");
class Player {
  constructor(col, row) {
    this.column = col;
    this.row = row;
  }
    moveUp() {
      this.row++
    }
    moveDown() {
      this.row--
    }
    moveLeft() {
      this.column--
    }
    moveRight() {
      this.column++
    }
    draw() {
      image(this.playerImg, this.row, this.column, SQUARE_SIDE, SQUARE_SIDE);
    }
  
}