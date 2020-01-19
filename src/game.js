class Game {
  /*  constructor(width, height, squares){
    this.width = width;
    this.height = height; 
    this.squares = squares; 
  }
 */

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    //horizontal lines
    for (let y = 0; y <= width; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
    }

    //vertical lines
    for (let x = 0; x <= height; x += SQUARE_SIDE) {
      line(x, 0, x, HEIGHT);
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score = 0;
  }

  moveUp() {
    this.row -= 1;
    this.activePlayerImage = this.playerImageUp;
  }
  moveDown() {
    this.row += 1;
    this.activePlayerImage = this.playerImageDown;
  }
  moveLeft() {
    this.col -= 1;
    this.activePlayerImage = this.playerImageLeft;
  }
  moveRight() {
    this.col += 1;
    this.activePlayerImage = this.playerImageRight;
    // console.log(this.playerImageRight);
  }

  addImages(image) {
    this.playerImageUp = image.up;
    this.playerImageDown = image.down;
    this.playerImageLeft = image.left;
    this.playerImageRight = image.right;

    this.activePlayerImage = image.down;
  }

  draw() {
    //clear();
    // place the preloaded image on X and Y depending on the rows

    this.activePlayerImage.resize(SQUARE_SIDE, SQUARE_SIDE);
    image(
      this.activePlayerImage,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
    );
  }
}

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
  }
  addImage(image) {
    this.treasureImage = image;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * (WIDTH / SQUARE_SIDE));
    this.row = Math.floor(Math.random() * (HEIGHT / SQUARE_SIDE));
  }

  drawTreasure() {
    this.treasureImage.resize(SQUARE_SIDE, SQUARE_SIDE);
    image(this.treasureImage, this.col * SQUARE_SIDE, this.row * SQUARE_SIDE);
  }
}
