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
    this.direction = 'S';
  }
  
  moveUp() {
    this.direction = 'N';
    if (this.row > 0) {
      this.row -= 1;
    }
  }

  moveDown() {
    this.direction = 'S';
    if (this.row < 10) {
      this.row += 1;
    }
  }

  moveRight() {
    this.direction = 'E';    
    if (this.column < 10) {
      this.column += 1;    
    }
  }

  moveLeft() {
    this.direction = 'W';
    if (this.column > 0) {
      this.column -= 1;
    }
  }
  
  draw() {
    if (this.direction == 'S') {
      image(imgS, this.column * 100, this.row * 100, 100, 100);
    } 
    else if (this.direction == 'N') {
      image(imgN, this.column * 100, this.row * 100, 100, 100);
    }
    else if (this.direction == 'E') {
      image(imgE, this.column * 100, this.row * 100, 100, 100);
    }
    else if (this.direction == 'W') {
      image(imgW, this.column * 100, this.row * 100, 100, 100);
    }
  }

  newGame() {
    if (this.column == treasure.column && this.row == treasure.row) {
      this.column = 0;
      this.row = 0;
      this.direction = 'S';
    }
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

  //this doesn't work :( --> how do I get the treasure to be reset?
  newGame() {
    if (this.column == player.column && this.row == player.row) {
      this.column = Math.floor(Math.random() * 10);
      this.row = Math.floor(Math.random() * 10);
    }
  }
}