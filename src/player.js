class Player {
    constructor(col, row) {
      this.col = col
      this.row = row
      this.image;
    }
    drawPlayer() {
        image(mickoImg, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE)
        // game.gold.setRandomPosition();
        if(this.col === game.gold.col && this.row === game.gold.row) {
        game.gold.setRandomPosition();
        }
    }
    // Movement functions
    moveUp() {
      this.col -= SQUARE_SIDE;
    //   this.image = mickoImgUp;
    }
    moveDown() {
      this.col += SQUARE_SIDE;
    //   this.image = mickoImgDown;
    }
    moveLeft() {
      this.row -= SQUARE_SIDE;
    //   this.image = mickoImgLeft
    }
    moveRight() {
      this.row += SQUARE_SIDE;
    //   this.image = mickoImgRight
    }
  }