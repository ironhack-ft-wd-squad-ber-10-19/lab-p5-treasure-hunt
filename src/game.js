class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    // drawing horizontal lines
    strokeWeight(3);
    for (let i = 0; i <= 1000; i += 100) {
      line(0, i, 1000, i);
      line(i, 0, i, 1000);
    }
  }
}

class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
  }

  draw() {
    image(characterPic, this.col, this.row, 100, 100);
  }

  moveUp() {
    if (this.row >= 100) {
      this.row -= 100;
      characterPic = loadImage("assets/character-up.png");
    }
  }

  moveDown() {
    if (this.row < 900) {
      this.row += 100;
      characterPic = loadImage("assets/character-down.png");
    }
  }

  moveLeft() {
    if (this.col >= 100) {
      this.col -= 100;
      characterPic = loadImage("assets/character-left.png");
    }
  }

  moveRight() {
    if (this.col < 900) {
      this.col += 100;
      characterPic = loadImage("assets/character-right.png");
    }
  }
}

// Create a class Treasure with a method setRandomPosition() and a property col and row.
class Treasure {
  constructor() {
    this.col = this.ranCol;
    this.row = this.ranRow;
    this.score1 = 0;
    this.score2 = 0;
  }

  setRandomPosition() {
    this.ranCol = Math.floor(Math.random() * 10) * 100;
    this.ranRow = Math.floor(Math.random() * 10) * 100;
  }

  drawTreasure() {
    image(treasurePic, this.ranCol, this.ranRow, 100, 100);
  }

  gotTreasure() {
    if (player1.col === this.ranCol && player1.row === this.ranRow) {
      this.setRandomPosition();
      this.drawTreasure();
      this.score1 += 100;
      document.querySelector(".score1").innerHTML = this.score1;
    }

    if (player2.col === this.ranCol && player2.row === this.ranRow) {
      this.setRandomPosition();
      this.drawTreasure();
      this.score2 += 100;
      document.querySelector(".score2").innerHTML = this.score2;
    }
  }
}

// Create a function drawTreasure() that displays the treasure on the canvas. The picture is images/treasure.png
