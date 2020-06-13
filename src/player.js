class Player {
    constructor(col, row) {
      this.column = col;
      this.row = row;
      this.image; //creates general property; the value is changed depending on command
      this.scores=0;
    }
      moveUp() {
          if (this.row>0) {
            this.row-=SQUARE_SIDE;
            this.image=playerBack;
        }
      }
      moveDown() {
          if (this.row<HEIGHT-SQUARE_SIDE) {
            this.row+=SQUARE_SIDE;
            this.image=playerFront;
          }
      }
      moveLeft() {
          if (this.column>0) {
            this.column-=SQUARE_SIDE;
            this.image=playerLeft;
          }
      }
      moveRight() {
          if (this.column<WIDTH-SQUARE_SIDE) {
            this.column+=SQUARE_SIDE;
            this.image=playerRight;
          }
      }
      drawPlayer() {
        clear();
        image(this.image||playerFront, this.column, this.row, SQUARE_SIDE, SQUARE_SIDE);
          //scoring for found treasure
        if (game.player.column==game.treasure.column&&game.player.row==game.treasure.row) {
            this.score();
  }
      }
      score() {
          this.scores+=100;
          game.treasure.placeRandomly();
          console.log(`${this.scores} points!`);
      }
    }
      
  