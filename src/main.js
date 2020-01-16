let imageDown;
let treasureImage;

function preload() {
  imageDown = loadImage("assets/character-down.png")
  treasureImage = loadImage("assets/treasure.png")

}


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  // game.drawGrid()
  // rect(, 0, 500, 500);
  // preLoad()
}



function draw() { //60 times per sec
  clear()
  game.drawGrid()
  player.draw()
  treasure.draw()
}
// player.draw

class Treasure {
  constructor(treasureCol, treasureRow) {

    this.tresCol = treasureCol;
    this.tresRow = treasureRow;

  }

  setRandomPosition() {

    this.col = Math.floor(Math.random() * treasureCol);
    this.row = Math.floor(Math.random() * treasureRow);
  }
  draw() {
    image(treasureImage, 500, 500, 100, 100) // we couldn't give it a random position!!!
  }


}

// (0,0) = Initial position (col, row)

class Player {

  constructor() {

    this.col = 0;
    this.row = 0;
  }

  moveDown() {

    if (this.row == HEIGHT - SQUARE_SIDE) {
      this.row = HEIGHT - SQUARE_SIDE
    } else this.row += SQUARE_SIDE

  }
  moveUp() {
    if (this.row <= 0) {
      this.row = 0
    } else
      this.row -= SQUARE_SIDE
    // this.col--;
  }
  moveLeft() {
    // this.row--
    if (this.col <= SQUARE_SIDE) {
      this.col = 0
    } else {
      this.col -= SQUARE_SIDE
      // this.col--;
    }
  }
  moveRight() {
    // this.row++
    if (this.col == WIDTH - SQUARE_SIDE) {
      this.col = WIDTH - SQUARE_SIDE
    } else {
      this.col += SQUARE_SIDE
      // this.col--;
    }
  }

  draw() {
    image(imageDown, this.col, this.row, 100, 100)
  }



}

function keyPressed() {
  console.log(keyCode);
  const step = 100;
  if (keyCode === 37) {
    // left arrow
    player.moveLeft()
  } else if (keyCode === 39) {
    // right arrow
    player.moveRight()
  } else if (keyCode === 38) {
    // up arrow
    player.moveUp();
  } else if (keyCode === 40) {
    // down arrow
    player.moveDown()
  }

}
// functio keyPressed()

const game = new Game()
const player = new Player()
let treasure = new Treasure()


// function keyPressed() {
//   // called once on key press
//   console.log("key pressed", keyCode);
//   const step = 10;
//   if (keyCode === 37) {
//     // left arrow
//     rectX -= step;
//   } else if (keyCode === 39) {
//     // right arrow
//     rectX += step;
//   }
// }

// (imageDown, rectX, rectY, 100, 100);