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
        console.log(`Player row is ${((this.col/60)+1)}, player column is ${((this.row/60)+1)}`);
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
  


  }

  class Treasury {
    constructor(col, row) {
        this.cell = 60;
        this.col = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) * this.cell;
        this.row = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) * this.cell;
        this.image;
        console.log(`Treasury column is ${this.col}, treasury row is ${this.row}`);
      }

    // setRandomPosition(randomCol, randomRow) {
    //     console.log('set random works';)
    //     this.col = (this.cell * randomCol) - this.cell;
    //     this.row = (this.cell * randomRow) - this.cell;
    //     randomCol = Math.floor(Math.random() * 10);
    //     randomRow = Math.floor(Math.random() * 10);
    // }

    drawTreasury() {
        console.log('Treasury is loading');
        image(this.image, this.row, this.col, this.cell, this.cell);
      }

  }

