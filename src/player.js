class Player {
    constructor(col, row) {
      this.col = col;
      this.row = row;
      this.image;
      this.score = 0;
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

    // move() {
    //   if (keyCode === 37) this.moveLeft();
    //   if (keyCode === 39) this.moveRight();
    //   if (keyCode === 38) this.moveUp();
    //   if (keyCode === 40) this.moveDown();
    // }

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