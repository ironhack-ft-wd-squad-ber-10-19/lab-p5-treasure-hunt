class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    
    background('cyan');
    let w = 100;
    let h = 100;

    for (let i = 0; i < 1000; i=i+100) {
      for (let j = 0; j < 1000; j=j+100) {
        rect(i, j, w, h);
      }
    }
    
  }
}

class Player {
  
  constructor(col, row) {
    this.column = col;
    this.row = row;
  }
  
  moveUp() {
    if (this.row > 0) {
      this.row -= 1;
    }
  }

  moveDown() {
    if (this.row < 10) {
      this.row += 1;
    }
  }

  moveRight() {
    if (this.column < 10) {
      this.column += 1;
    }
  }

  moveLeft() {
    if (this.column > 0) {
      this.column -= 1;
    }
  }
  
  draw() {
    image(img, this.column * 100, this.row * 100, 100, 100);
  }
  
}

class Treasure {
  constructor() {
    this.column = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }

  draw() {
    image(imgTreasure, this.column * 100, this.row * 100, 100, 100)
  }


}