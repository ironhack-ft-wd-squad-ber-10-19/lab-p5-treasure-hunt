class Game {
  drawGrid() {
    for(let i = 0; i <= WIDTH; i += 100) {
      line(0, i, WIDTH, i);
      line(i, 0, i, WIDTH);
    }
  }
}


class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score = 0;
    this.img;
  }
    moveUp() {
      this.row -= 1;
    }
    moveDown() {
      this.row += 1;
    }
    moveLeft() {
      this.col -= 1;
    }
    moveRight() {
      this.col += 1;
    }
    draw () {
      image(this.img, this.col*100, this.row*100, 100, 100);
    }

}

class Treasure {
  constructor() {
    this.col;
    this.row;
    this.prize;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.col = Math.round(Math.random() * 9);
    this.row = Math.round(Math.random() * 9);
  } 
  drawTreasure() {
    image(this.prize, this.col*100, this.row*100, 100, 100);
  }

}
