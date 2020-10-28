class Game {

  preLoadGame() {
    this.playerImage = loadImage("../assets/character-down.png");
    this.treasureImage = loadImage("../assets/treasure.png");
  }

  setupGame() {
    this.player = new Player(0,0);
    this.player.image = this.playerImage;
    this.treasure = new Treasure();
    this.treasure.image = this.treasureImage;
  }

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

  drawGame() {
    this.player.drawPlayer();
    this.treasure.drawTreasure();
  }
}


class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image;
  }
  moveUp() {
    if (this.row > 0) {
      this.row -= 100;
    }
  }
  moveDown() {
    if (this.row < 900) {
      this.row += 100;
    }
  }
  moveLeft() {
    if (this.column < 0) {
      this.col -= 100;
    }
  }
  moveRight() {
    if (this.column > 900) {
      this.col += 100;
    }
  }
  drawPlayer() {
    image(this.image, this.col, this.row, 100, 100);
  }
}

class Treasure {
  constructor() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
    this.image;
  }
  // setRandomPosition() {
  //   this.col = Math.floor(Math.random() * 10) * 100;
  //   this.row = Math.floor(Math.random() * 10) * 100;
  // }
  drawTreasure() {
    image(this.image, this.col, this.row, 100, 100);
  }
}
