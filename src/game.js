class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    background(220);
    for(let x = 0; x <= WIDTH; x += WIDTH / 10) {
      for(let y = 0; y <= HEIGHT; y += HEIGHT / 10) {
        stroke(100);
        strokeWeight(3);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y)
      }
    }
  }
}



class Player {
  constructor(row, col) {
    this.col = col
    this.row = row
  }
  drawPlayer() {
    image(mickoImg, this.row, this.col, 100, 100)
  }
  moveUp() {
    this.col -= 100;
  }
  moveDown() {
    this.col += 100;
  }
  moveLeft() {
    this.row -= 100;
  }
  moveRight() {
    this.row += 100;
  }
}

class Treasure {
  constructor(){
    this.col = Math.floor(Math.random() * 1000)
    this.row = Math.floor(Math.random() * 1000)
  }
  // setRandomPosition(){
  //   this.col = Math.floor(Math.random() * 1000)
  //   this.row = Math.floor(Math.random() * 1000)
  // }
  drawTreasure() {
    image(treasureImg, this.col, this.row, 100, 100)
  }
}