// this is the game CLASS. This is where the whole 'game' is put together. It uses the player CLASS and the treasure CLASS as a blueprint to create elements for the game as well as a specific METHOD to draw the grid.

class Game {
  constructor() {
    // 3.2 here we call the Player() CLASS and pass in 2 arguments.
    this.player1 = new Player(0, 0);
    this.player2 = new Player(900, 900);
    // here we call the Treasure() CLASS
    this.treasure = new Treasure();

    // variables for the grid
    this.firstPoint = 0;
    this.secondPoint = WIDTH;
    this.lines = 10;
    this.squareSize = SQUARE_SIDE;
  }

  // 1.1 method to draw the grid
  drawGrid() {
    let linePosition = 0;
    for (let i = 0; i <= this.lines; i++) {
      stroke(3);
      strokeWeight(5);
      line(this.firstPoint, linePosition, this.secondPoint, linePosition);
      line(linePosition, this.firstPoint, linePosition, this.secondPoint);
      linePosition += this.squareSize;
    }
  }
}

let side = SQUARE_SIDE;
