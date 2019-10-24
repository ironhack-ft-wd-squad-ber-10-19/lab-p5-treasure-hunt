class Player {
  constructor(col, row, color) {
    this.col = col;
    this.row = row;
    this.score = 0;
  }
  moveUp() {
    this.row -= side;
  }
  moveDown() {
    this.row += side;
  }
  moveRight() {
    this.col += side;
  }
  moveLeft() {
    this.col -= side;
  }
  draw() {
    image(characterDown, this.col, this.row, side, side);
  }
}
class Treasure {
  constructor() {
    this.row = 100;
    this.col = 200;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
  }
  drawTreasure() {
    image(treasureImg, this.col, this.row, side, side);
  }
}
let side = 100;
const player1 = new Player(0, 0);
const player2 = new Player(900, 900);
const treasure = new Treasure();

class Game {
  drawGrid() {
    let positionStart = 0;
    let positionEnd = 1000;
    let lineCount = 10;
    let heightSquare = positionEnd / lineCount;
    function horizontalLines(lineCount) {
      let lineHeightTotal = 0;
      for (let i = 0; i <= lineCount; i++) {
        line(positionStart, lineHeightTotal, positionEnd, lineHeightTotal);
        stroke("white");
        lineHeightTotal += heightSquare;
      }
    }
    function verticalLines(lineCount) {
      let lineHeightTotal = 0;
      for (let i = 0; i <= lineCount; i++) {
        line(lineHeightTotal, positionStart, lineHeightTotal, positionEnd);
        stroke("white");
        lineHeightTotal += heightSquare;
      }
    }

    function score1() {
      player1.score += 100;
      treasure.setRandomPosition();
      treasure.drawTreasure();
      console.log(player1.score);
    }
    function score2() {
      player2.score += 100;
      treasure.setRandomPosition();
      treasure.drawTreasure();
      console.log(player2.score);
    }

    horizontalLines(lineCount);
    verticalLines(lineCount);
    treasure.drawTreasure();
    player1.draw();
    player2.draw();
    if (player1.col === treasure.col && player1.row === treasure.row) {
      score1();
    }
    if (player2.col === treasure.col && player2.row === treasure.row) {
      score2();
    }
  }
}

function keyPressed() {
  if (keyCode === 37 && player1.col > 0) {
    player1.moveLeft();
  } else if (keyCode === 39 && player1.col < 1000 - side) {
    player1.moveRight();
  } else if (keyCode === 40 && player1.row < 1000 - side) {
    player1.moveDown();
  } else if (keyCode === 38 && player1.row > 0) {
    player1.moveUp();
  }
  if (keyCode === 65 && player2.col > 0) {
    player2.moveLeft();
  } else if (keyCode === 68 && player2.col < 1000 - side) {
    player2.moveRight();
  } else if (keyCode === 83 && player2.row < 1000 - side) {
    player2.moveDown();
  } else if (keyCode === 87 && player2.row > 0) {
    player2.moveUp();
  }
}
