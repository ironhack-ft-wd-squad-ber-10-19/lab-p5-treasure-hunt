class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    background(220); 
    for (let y = 0; y <= WIDTH; y += WIDTH /10) {
      for (let x = 0; x <= HEIGHT; x += HEIGHT / 10) {
        strokeWeight(10);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
  }
}

class Player {
  constructor() {
    this.column = 0;
    this.row = 0;
  }
  moveUp() {
    this.column-=10;
  }
  moveDown() {
    this.column +=10;
  }
  moveLeft() {
    this.row -=10;
  }
  moveRight() {
    this.row +=10;
  }
}

doSomething() {
  clear();
  image(this.playerImg, this.playerImg.column, this.playerImg.row, 10, 10)
  if (keyIsDown(87)) {
    this.Player.moveUp();
  }
  if (keyIsDown(83)) {
    this.Player.moveDown();
  }
  if (keyIsDown(65)) {
    this.Player.moveLeft();
  }
  if (keyIsDown(68)) {
    this.Player.moveRight();
  }

  moveUp() {
    this.column -=10;
   }
   moveDown() {
     this.column +=10;
   }
   moveLeft() {
     this.row -=10;
   }
   moveRight() {
     this.row +=10;
   }
}

*/
