class Game {
  drawGrid() {
    createCanvas(WIDTH, HEIGHT)
    strokeWeight(2)
    stroke(51)
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        rect(x * SQUARE_SIDE, y * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE)
        console.log()
      }
    }

    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    // this.positionColumn = (this.col * SQUARE_SIDE + (SQUARE_SIDE * 0.1))
    // this.positionRow = (this.row * SQUARE_SIDE + (SQUARE_SIDE * 0.1))
    this.image;
  }

  preload() {
    this.imageUp = loadImage('/assets/character-up.png')
    this.imageDown = loadImage('/assets/character-down.png')
    this.imageLeft = loadImage('/assets/character-left.png')
    this.imageRight = loadImage('/assets/character-Right.png')

    this.image = this.imageDown
  }

  moveUp() {
    if (this.row > 0) this.row -= 1;
    this.image = this.imageUp;
    checkIfTreasureFound();
  }
  moveDown() {
    if (this.row < 9) this.row += 1;
    this.image = this.imageDown;
    checkIfTreasureFound();
  }
  moveLeft() {
    if (this.col > 0) this.col -= 1;
    this.image = this.imageLeft;
    checkIfTreasureFound();
  }
  moveRight() {
    if (this.col < 9) this.col += 1;
    this.image = this.imageRight;
    checkIfTreasureFound();
  }
  draw() {
    // if (positionColumn < (this.col * SQUARE_SIDE + (SQUARE_SIDE * 0.1)) positionColumn ++;
    // if (positionColumn > (this.col * SQUARE_SIDE + (SQUARE_SIDE * 0.1)) positionColumn --;

    // if (positionRow < (this.row * SQUARE_SIDE + (SQUARE_SIDE * 0.1)) positionColumn ++;
    // if (positionRow > (this.row * SQUARE_SIDE + (SQUARE_SIDE * 0.1)) positionColumn --;
    
  
    // image(this.image, positionColumn, positionRow, SQUARE_SIDE * 0.8, SQUARE_SIDE * 0.8);

    image(this.image, (this.col * SQUARE_SIDE + (SQUARE_SIDE * 0.1)), (this.row * SQUARE_SIDE + (SQUARE_SIDE * 0.1)), SQUARE_SIDE * 0.8, SQUARE_SIDE * 0.8);

  }
}

class Treasure{
  constructor(){
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
    this.image;
  }

  preload(){
    this.image = loadImage('/assets/treasure.png');
  }

  draw() {

    image(this.image, (this.col * SQUARE_SIDE + (SQUARE_SIDE * 0.1)), (this.row * SQUARE_SIDE + (SQUARE_SIDE * 0.1)), SQUARE_SIDE * 0.8, SQUARE_SIDE * 0.8);

  }
}

function checkIfTreasureFound(){
  if ((player.col === treasure.col) && (player.row === treasure.row)) {
    treasure.col = Math.floor(Math.random() * 10);
    treasure.row = Math.floor(Math.random() * 10);
    draw()
  }
}
