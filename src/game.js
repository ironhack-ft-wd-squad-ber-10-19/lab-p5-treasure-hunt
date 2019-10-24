class Game {
  drawGrid() {
    strokeWeight(2)
    rect(0, 0, 800, 800)

    push()
    strokeWeight(4)
    for (let i = 0; i < 800; i += 80) {
      line(i + 80, 0, i + 80, 800);
      line(0, i + 80, 800, i + 80)
    }
    pop()
  }
}

let side = 80;

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveDown() {
    if (this.row < 720) {
      this.row += side;
      console.log(this.col)
    }
  }

  moveUp() {
    if (this.row > 0) {
      this.row -= side;
      console.log(this.col)

    }
  }

  moveLeft() {
    if (this.col < 800 && this.col >= 80) {
      this.col -= side;
    }
  }

  moveRight() {
    if (this.col < 720) {
      this.col += side;
    }
  }
  preload() {
    this.img = loadImage("../assets/character-down.png")
  }

  draw() {
    image(this.img, this.col, this.row, 80, 80)
  }

  keyPressed() {
    if (keyCode === 37) {
      this.moveLeft();
    } else if (keyCode === 39) {
      this.moveRight();
    } else if (keyCode === 40) {
      this.moveDown();
    } else if (keyCode === 38) {
      this.moveUp();
    }
  }
}

class Treasure {
  constructor() {
    this.setRandomPositon()
  }

  setRandomPositon() {

    this.col = Math.floor((Math.random() * 10)) * SQUARE_SIDE;
    this.row = Math.floor((Math.random() * 10)) * SQUARE_SIDE;

  }


  preload() {
    this.img2 = loadImage("../assets/treasure.png")
  }


  drawTreasure() {
    image(this.img2, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
  }


}


const player = new Player(0, 0);

console.log(player.col, player.row);