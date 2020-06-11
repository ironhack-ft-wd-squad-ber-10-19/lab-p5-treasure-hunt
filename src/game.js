class Game {
  drawGrid() {
    strokeWeight(4);
    for(let axisX = 0; axisX < WIDTH; axisX += 100) {
      for(let axisY = 0; axisY < HEIGHT; axisY += 100) {
        line(axisX, 0, axisX, HEIGHT);
        line(0, axisY, WIDTH, axisY)
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
    frameRate(10);
    image(characterImg, this.row, this.col, 100, 100)
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
  setRandomPosition(){
    this.col = Math.floor(Math.random() * 1000)
    this.row = Math.floor(Math.random() * 1000)
  }
  drawTreasure() {
    image(treasureImg, this.col, this.row, 100, 100)
  }
}