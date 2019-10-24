let squareWidth = WIDTH / 10;

let margin = squareWidth / 5;

class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    /* let width = 500; */
    push();
    strokeWeight(3);
    stroke(255);
    for (let i = 0; i <= 10; i++) {
      line(0, squareWidth * i, WIDTH, squareWidth * i);
      line(squareWidth * i, 0, squareWidth * i, HEIGHT);
    }
    pop();
  }
}





class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score = 0;
  }

  draw() {
    push();
    tint(255, 100, 0, 255);
    image(imgPlayer, this.col + margin / 2, this.row + margin / 2, squareWidth - margin, squareWidth - margin);
    pop();
  }

  moveUp() {
    if (this.row >= 0 + squareWidth) {
      this.row = this.row - squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }

      if (this.col === player2.col && this.row === player2.row) {
        this.row = this.row + squareWidth;
      }
      if (this.col === player3.col && this.row === player3.row) {
        this.row = this.row + squareWidth;
      }
      if (this.col === player4.col && this.row === player4.row) {
        this.row = this.row + squareWidth;
      }
      /*       image(imgPlayer, this.row- squareWidth, this.col, 50, 50); */
    }
  }
  moveDown() {
    if (this.row <= HEIGHT - 2 * squareWidth) {
      this.row = this.row + squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }

      if (this.col === player2.col && this.row === player2.row) {
        this.row = this.row - squareWidth;
      }
      if (this.col === player3.col && this.row === player3.row) {
        this.row = this.row - squareWidth;
      }
      if (this.col === player4.col && this.row === player4.row) {
        this.row = this.row - squareWidth;
      }
      /*      image(imgPlayer, this.row+ squareWidth, this.col, 50, 50); */
    }
  }

  moveLeft() {
    if (this.col >= 0 + squareWidth) {
      this.col = this.col - squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }
      if (this.col === player2.col && this.row === player2.row) {
        this.col = this.col + squareWidth;
      }
      if (this.col === player3.col && this.row === player3.row) {
        this.col = this.col + squareWidth;
      }
      if (this.col === player4.col && this.row === player4.row) {
        this.col = this.col + squareWidth;
      }
    }
  }

  moveRight() {
    if (this.col <= WIDTH - 2 * squareWidth)
      this.col = this.col + squareWidth;
    if (this.col === treasure.col && this.row === treasure.row) {
      this.score++;
      treasure.setRandomPosition();
    }
    if (this.col === player2.col && this.row === player2.row) {
      this.col = this.col - squareWidth;
    }
    if (this.col === player3.col && this.row === player3.row) {
      this.col = this.col - squareWidth;
    }
    if (this.col === player4.col && this.row === player4.row) {
      this.col = this.col - squareWidth;
    }

  }

}

class Treasure extends Player {
  constructor(col, row) {
    super(col, row)
  }
  draw() {
    push();
    tint(255, 255, 255)
    image(imgTreasure, this.col - margin / 2, this.row - margin / 2, squareWidth + margin, squareWidth + margin);
    pop();

  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * squareWidth;
    this.row = Math.floor(Math.random() * 10) * squareWidth;

    /*     console.log(this.col);
        console.log(this.row); */
  }
}


class Player2 extends Player {
  constructor(col, row) {
    super(col, row)
    this.col = col;
    this.row = row;
    this.score = 0;
  }
  draw() {
    push();
    tint(100, 255, 200, 255)
    image(imgPlayer2, this.col + margin / 2, this.row + margin / 2, squareWidth - margin, squareWidth - margin);
    pop();
  }


  moveUp() {
    if (this.row >= 0 + squareWidth) {
      this.row = this.row - squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }

      if (this.col === player.col && this.row === player.row) {
        this.row = this.row + squareWidth;
      }
      if (this.col === player3.col && this.row === player3.row) {
        this.row = this.row + squareWidth;
      }
      if (this.col === player4.col && this.row === player4.row) {
        this.row = this.row + squareWidth;
      }
      /*       image(imgPlayer, this.row- squareWidth, this.col, 50, 50); */
    }
  }
  moveDown() {
    if (this.row <= HEIGHT - 2 * squareWidth) {
      this.row = this.row + squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }

      if (this.col === player.col && this.row === player.row) {
        this.row = this.row - squareWidth;
      }
      if (this.col === player3.col && this.row === player3.row) {
        this.row = this.row - squareWidth;
      }
      if (this.col === player4.col && this.row === player4.row) {
        this.row = this.row - squareWidth;
      }
      /*      image(imgPlayer, this.row+ squareWidth, this.col, 50, 50); */
    }
  }

  moveLeft() {
    if (this.col >= 0 + squareWidth) {
      this.col = this.col - squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }
      if (this.col === player.col && this.row === player.row) {
        this.col = this.col + squareWidth;
      }
      if (this.col === player3.col && this.row === player3.row) {
        this.col = this.col + squareWidth;
      }
      if (this.col === player4.col && this.row === player4.row) {
        this.col = this.col + squareWidth;
      }
    }
  }

  moveRight() {
    if (this.col <= WIDTH - 2 * squareWidth)
      this.col = this.col + squareWidth;
    if (this.col === treasure.col && this.row === treasure.row) {
      this.score++;
      treasure.setRandomPosition();
    }
    if (this.col === player.col && this.row === player.row) {
      this.col = this.col - squareWidth;
    }
    if (this.col === player3.col && this.row === player3.row) {
      this.col = this.col - squareWidth;
    }
    if (this.col === player4.col && this.row === player4.row) {
      this.col = this.col - squareWidth;
    }

  }

}



class Player3 {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score = 0;
  }


  draw() {
    push();
    tint(0, 100, 255, 255);
    image(imgPlayer3, this.col + margin / 2, this.row + margin / 2, squareWidth - margin, squareWidth - margin);
    pop();
  }

  moveUp() {
    if (this.row >= 0 + squareWidth) {
      this.row = this.row - squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }

      if (this.col === player.col && this.row === player.row) {
        this.row = this.row + squareWidth;
      }
      if (this.col === player2.col && this.row === player2.row) {
        this.row = this.row + squareWidth;
      }
      if (this.col === player4.col && this.row === player4.row) {
        this.row = this.row + squareWidth;
      }
      /*       image(imgPlayer, this.row- squareWidth, this.col, 50, 50); */
    }
  }
  moveDown() {
    if (this.row <= HEIGHT - 2 * squareWidth) {
      this.row = this.row + squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }

      if (this.col === player.col && this.row === player.row) {
        this.row = this.row - squareWidth;
      }
      if (this.col === player2.col && this.row === player2.row) {
        this.row = this.row - squareWidth;
      }
      if (this.col === player4.col && this.row === player4.row) {
        this.row = this.row - squareWidth;
      }
      /*      image(imgPlayer, this.row+ squareWidth, this.col, 50, 50); */
    }
  }

  moveLeft() {
    if (this.col >= 0 + squareWidth) {
      this.col = this.col - squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }
      if (this.col === player.col && this.row === player.row) {
        this.col = this.col + squareWidth;
      }
      if (this.col === player2.col && this.row === player2.row) {
        this.col = this.col + squareWidth;
      }
      if (this.col === player4.col && this.row === player4.row) {
        this.col = this.col + squareWidth;
      }
    }
  }

  moveRight() {
    if (this.col <= WIDTH - 2 * squareWidth)
      this.col = this.col + squareWidth;
    if (this.col === treasure.col && this.row === treasure.row) {
      this.score++;
      treasure.setRandomPosition();
    }
    if (this.col === player.col && this.row === player.row) {
      this.col = this.col - squareWidth;
    }
    if (this.col === player2.col && this.row === player2.row) {
      this.col = this.col - squareWidth;
    }
    if (this.col === player4.col && this.row === player4.row) {
      this.col = this.col - squareWidth;
    }

  }



}

class Player4 {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score = 0;
  }


  draw() {
    push();
    tint(210, 255, 0, 255);
    image(imgPlayer4, this.col + margin / 2, this.row + margin / 2, squareWidth - margin, squareWidth - margin);
    pop();
  }

  moveUp() {
    if (this.row >= 0 + squareWidth) {
      this.row = this.row - squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }

      if (this.col === player.col && this.row === player.row) {
        this.row = this.row + squareWidth;
      }

      if (this.col === player2.col && this.row === player2.row) {
        this.row = this.row + squareWidth;
      }
      if (this.col === player3.col && this.row === player3.row) {
        this.row = this.row + squareWidth;
      }
      /*       image(imgPlayer, this.row- squareWidth, this.col, 50, 50); */
    }
  }
  moveDown() {
    if (this.row <= HEIGHT - 2 * squareWidth) {
      this.row = this.row + squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }

      if (this.col === player.col && this.row === player.row) {
        this.row = this.row - squareWidth;
      }
      if (this.col === player2.col && this.row === player2.row) {
        this.row = this.row - squareWidth;
      }
      if (this.col === player3.col && this.row === player3.row) {
        this.row = this.row - squareWidth;
      }
      /*      image(imgPlayer, this.row+ squareWidth, this.col, 50, 50); */
    }
  }

  moveLeft() {
    if (this.col >= 0 + squareWidth) {
      this.col = this.col - squareWidth;
      if (this.col === treasure.col && this.row === treasure.row) {
        this.score++;
        treasure.setRandomPosition();
      }
      if (this.col === player.col && this.row === player.row) {
        this.col = this.col + squareWidth;
      }
      if (this.col === player2.col && this.row === player2.row) {
        this.col = this.col + squareWidth;
      }
      if (this.col === player3.col && this.row === player3.row) {
        this.col = this.col + squareWidth;
      }
    }
  }

  moveRight() {
    if (this.col <= WIDTH - 2 * squareWidth)
      this.col = this.col + squareWidth;
    if (this.col === treasure.col && this.row === treasure.row) {
      this.score++;
      treasure.setRandomPosition();
    }
    if (this.col === player.col && this.row === player.row) {
      this.col = this.col - squareWidth;
    }
    if (this.col === player2.col && this.row === player2.row) {
      this.col = this.col - squareWidth;
    }
    if (this.col === player3.col && this.row === player3.row) {
      this.col = this.col - squareWidth;
    }

  }



}