class Player {
    constructor(col, row) {
      this.cell = 60;
      this.col = (this.cell * col) - this.cell;
      this.row = (this.cell * row) - this.cell;
      this.image;
    }
  
    drawPlayer() {
      // console.log('Player is loading');
      image(this.image, this.row, this.col, this.cell, this.cell);
    }
    
    keyIsPressed(keyCode) {
        if (keyCode === 37) {
            this.moveLeft();
        }
        if (keyCode === 38) {
            this.moveUp();
        }
        if (keyCode === 39) {
            this.moveRight();
        }
        if (keyCode === 40) {
            this.moveDown();
        }
        console.log(`Player column is ${this.col}, player row is ${this.row}`);
    }
  
    moveUp() {
        this.col -= this.cell;
    }

    moveDown() {
        this.col += this.cell;
        // Decrease by 1 the value of player.row
    }
  
    moveLeft() {
        this.row -= this.cell;
        // Increase by 1 the value of player.col
    }
  
    moveRight() {
        this.row += this.cell;
        // Decrease by 1 the value of player.col
    }
  
    // console.log(player.col, player.row) // => 1,2

  }