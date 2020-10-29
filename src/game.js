class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (var x = 0; x <= width; x += width / 10) {
      for (var y = 0; y <= height; y += height / 10) {
        
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }
  
}
class Player {
  constructor(col =10, row=10) {
    this.col = col
    this.row = row
  }
  moveUp() {
    this.col++
  }
  moveDown() {
    this.col--
  }
  
  moveLeft() {
   this.row--
  }
  moveRight() {
   this.row++
  }
  draw() {
    
  }
}

