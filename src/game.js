class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let x = 0; x < width; x += 100) {
      line(x, 0, x, height);
    }
    for (let y = 0; y < height; y += 100) {
      line(0, y, width, y);
    }
  }
}

class Player {
  constructor (col, row) {
    this.col = col;
    this.row = row;    
  }

  moveUp() {
    this.col -= 100;
    if (this.col < 0) {
      this.col = 0;
    }
  }
  moveDown() {
    this.col += 100;
    if (this.col > 1000) {
      this.col = 900;
    }
  }
  moveLeft() {
    this.row -= 100;
    if (this.row < 0) {
      this.row = 0;
    }
  }
  moveRight() {
    this.row += 100;
    if (this.row > 1000) {
      this.row = 900;
    }
  }

  draw() {
    this.image = new Player();
    this.imageUsed = loadImage("assets/character-down.png");
    


  }





}