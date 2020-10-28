class Game {

  drawGrid() {
    let col = 10;
    let row = 10;
    background(230);
  
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        let x = i * 100;
        let y = j * 100;
        stroke(0);
        fill(255);
        rect(x, y, 100, 100);
      }
    }
  }
}


class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image;
  }
  preLoadPlayer() {
    this.playerImageDown = loadImage("../assets/character-down.png");
    this.playerImageUp = loadImage("../assets/character-up.png");
    this.playerImageLeft = loadImage("../assets/character-left.png");
    this.playerImageRight = loadImage("../assets/character-right.png");
  }
  setupPlayer() {
    this.image = this.playerImageDown;
  }
  moveUp() {
    if (this.row > 0) {
      this.row -= 1;
      this.image = this.playerImageUp;
    }
  }
  moveDown() {
    if (this.row < 9) {
      this.row += 1;
      this.image = this.playerImageDown;
    }
  }
  moveLeft() {
    if (this.col > 0) {
      this.col -= 1;
      this.image = this.playerImageLeft;
    }
  }
  moveRight() {
    if (this.col < 9) {
      this.col += 1;
      this.image = this.playerImageRight;
    }
  }
  drawPlayer() {
    image(this.image, this.col*SQUARE_SIDE, this.row*SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
  }
}

class Treasure {
  constructor() {
    this.col;
    this.row;
    this.image;
  }
  preLoadTreasure() {
    this.image = loadImage("../assets/treasure.png");
  }
  // setupTreasure() {
  //   this.treasure.image = this.treasureImage;
  // }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }
  drawTreasure() {
    image(this.image, this.col*SQUARE_SIDE, this.row*SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
  }
}
