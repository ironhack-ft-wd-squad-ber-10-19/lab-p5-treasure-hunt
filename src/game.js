class Game {
  drawGrid() {
    line(100, 0, 100, 1000);
    line(200, 0, 200, 1000);
    line(300, 0, 300, 1000);
    line(400, 0, 400, 1000);
    line(500, 0, 500, 1000);
    line(600, 0, 600, 1000);
    line(700, 0, 700, 1000);
    line(800, 0, 800, 1000);
    line(900, 0, 900, 1000);
    line(1000, 0, 1000, 1000);
    line(0, 0, 0, 1000);
    //rows
    line(1000, 100, 0, 100);
    line(1000, 200, 0, 200);
    line(1000, 300, 0, 300);
    line(1000, 400, 0, 400);
    line(1000, 500, 0, 500);
    line(1000, 600, 0, 600);
    line(1000, 700, 0, 700);
    line(1000, 800, 0, 800);
    line(1000, 900, 0, 900);
    line(1000, 1000, 0, 1000);
    line(1000, 0, 0, 0);
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= 100;
  }

  moveDown() {
    this.row += 100;
  }

  moveRight() {
    this.col += 100;
  }

  moveLeft() {
    this.col -= 100;
  }

  draw() {
    image(img, this.col, this.row, 100, 100);
  }
}

class Treasure {
  constructor(col, row){
    this.col=col;
    this.row=row;
  }

    draw(){
      image(img2, this.col, this.row, 100,100)    
    }
}

