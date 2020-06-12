// 2.1 build the Player class With the correct properties + methods

class Player {
  constructor(col, row) {
    // 2.2 location properties
    this.col = col;
    this.row = row;
    this.score = 0;
    this.image;
  }

  // 2.2 movement controls. The side variable is linked to the SQUARE_SIDE variable in the contansts.js
  moveUp() {
    this.row -= side;
    this.image = characterUp;
  }
  moveDown() {
    this.row += side;
    this.image = characterDown;
  }
  moveRight() {
    this.col += side;
    this.image = characterRight;
  }
  moveLeft() {
    this.col -= side;
    this.image = characterLeft;
  }

  // 3.1 handles the initial 'creation' of the character + the placement of the treasure if there is a collision with the treasure.
  draw() {
    image(this.image || characterDown, this.col, this.row, side, side);
    if (this.col === game.treasure.col && this.row === game.treasure.row) {
      this.playerScore();
    }
  }

  // This function handles the collisions with the player and the treasure.
  playerScore() {
    this.score += 100;
    game.treasure.setRandomPosition();
    game.treasure.drawTreasure();
    console.log(this.score);
  }
}
