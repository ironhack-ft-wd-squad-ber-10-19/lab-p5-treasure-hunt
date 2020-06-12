class Player {
    constructor(col, row) {
      this.col = 0;
      this.row = 0;
    }
    drawPlayer() {
  
      image(playerImg, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    }
  
    moveUp() {
      this.row -= SQUARE_SIDE;// variable defined in constants.js
   
   playerImg = characterUp;
  
    }

  
    moveDown() {
      this.row += SQUARE_SIDE;
      playerImg = characterDown;
      
    }
  
    moveLeft() {
      this.col -= SQUARE_SIDE;
      playerImg = characterLeft;
    }
    moveRight() {
      this.col += SQUARE_SIDE;
      playerImg = characterRight;
    }
  }