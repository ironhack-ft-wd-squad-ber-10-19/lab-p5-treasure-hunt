class Player2 {
  constructor(row, col) {
    this.col = col;
    this.row = row;
  }

  preload() {
    console.log("player2 is Preloaded");
    this.playerDown = loadImage("assets/character-down.png");
    this.playerUp = loadImage("assets/character-up.png");
    this.playerleft = loadImage("assets/character-left.png");
    this.playerRight = loadImage("assets/character-right.png");

    this.playerImg = this.playerDown;
    //important , needed to be assigned;
  }

  moveDown() {
    if (this.col <= 8) {
      this.col += 1;
    }
    this.playerImg = this.playerDown;
  }
  moveUp() {
    if (this.col >= 1) {
      this.col -= 1;
    }
    this.playerImg = this.playerUp;
  }
  moveRight() {
    if (this.row <= 8) {
      this.row += 1;
    }
    this.playerImg = this.playerRight;
  }
  moveLeft() {
    if (this.row >= 1) {
      this.row -= 1;
    }
    this.playerImg = this.playerleft;
  }

  draw() {
    image(
      this.playerImg,
      this.row * SQUARE_SIDE,
      this.col * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }

  keyPressed() {
    if (keyCode == 68) {
      this.moveRight();
    }
    if (keyCode == 65) {
      this.moveLeft();
    }
    if (keyCode == 87) {
      this.moveUp();
    }
    if (keyCode == 83) {
      this.moveDown();
    }
  }
}
