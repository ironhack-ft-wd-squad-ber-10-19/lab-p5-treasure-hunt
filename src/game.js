let characterDown;
let characterUp;
let characterRight;
let characterLeft;
let treasureImg;

function preload() {
  characterDown = loadImage("./assets/character-down.png");
  characterUp = loadImage("./assets/character-up.png");
  characterRight = loadImage("./assets/character-right.png");
  characterLeft = loadImage("./assets/character-left.png");
  treasureImg = loadImage("./assets/treasure.png");
}

class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i = 0; i <= HEIGHT; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
    }
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, HEIGHT);
    }
  }
}

class Player {
  constructor(col, row, image) {
    this.col = col;
    this.row = row;
    this.characterImg = characterDown;
  }
  moveUp() {
    if (this.row > 0) {
      this.row -= SQUARE_SIDE;
    }
    this.characterImg = characterUp;
  }
  moveDown() {
    if (this.row < HEIGHT - SQUARE_SIDE) {
      this.row += SQUARE_SIDE;
    }
    this.characterImg = characterDown;
  }
  moveRight() {
    if (this.col < WIDTH - SQUARE_SIDE) {
      this.col += SQUARE_SIDE;
    }
    this.characterImg = characterRight;
  }
  moveLeft() {
    if (this.col > 0) {
      this.col -= SQUARE_SIDE;
    }
    this.characterImg = characterLeft;
  }
  draw() {
    image(
      this.characterImg || characterDown,
      this.col,
      this.row,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }
}
const player = new Player(0, 0, characterDown); // (0,0) = Initial position (col, row)
player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col
console.log(player.col, player.row); // => 1,2

class Treasure {
  constructor() {
    this.col;
    this.row;
  }
  setRandomPosition() {
    this.col = Math.floor((Math.random() * WIDTH) / SQUARE_SIDE) * SQUARE_SIDE;
    this.row = Math.floor((Math.random() * HEIGHT) / SQUARE_SIDE) * SQUARE_SIDE;
  }
  drawTreasure() {
    image(treasureImg, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}
const treasure = new Treasure();
treasure.setRandomPosition();
