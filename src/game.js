class Game {
  drawGrid() {
    for (var x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      for (var y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
  }
}

class Player {
  constructor(row, col) {
    this.row = 0;
    this.col = 0;
    this.image;
  }

  preloadPlayer(){
    this.image = loadImage('/assets/character-down.png');
  }

  drawPlayer() {
    image(this.image, this.row*SQUARE_SIDE, this.col*SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
  }

  moveUp() {
    this.col -= 1;
    this.image = loadImage('/assets/character-up.png');
  }

  moveDown() {
    this.col += 1;
    this.image = loadImage('/assets/character-down.png');
  }
  moveLeft() {
    this.row -= 1;
    this.image = loadImage('/assets/character-left.png');
  }
  moveRight() {
    this.row += 1;
    this.image = loadImage('/assets/character-right.png');
  }  
}

class Treasure {
  constructor(row, col){
    this.row = 0;
    this.col = 0;
    this.image;
  }

  setRandomPosition(){
    this.row = Math.floor(Math.random()*10) ;
    this.col = Math.floor(Math.random()*10) ;
  }

  preloadTreasure(){
    this.image = loadImage('/assets/treasure.png');
  }

  drawTreasure(){
    image(this.image, this.row*SQUARE_SIDE, this.col*SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
  }
}

class Sound {
  constructor(){
  this.sound;
  }
  preloadSound() {
  this.sound = loadSound('/sfx.mp3');
  }
}
