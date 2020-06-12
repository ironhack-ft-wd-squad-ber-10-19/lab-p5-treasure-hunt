class Game {
  drawGrid() {
    for (let x = 0; x <= WIDTH; x += WIDTH / 10) {
      line(x, 0, x, HEIGHT);
    }
    for (let y = 0; y <= HEIGHT; y += HEIGHT / 10) {
      line(0, y, WIDTH, y);
      }
    }
    preload() {
    this.player = new Player;
    this.playerImgDefault = loadImage("./assets/character-down.png");
    this.treasureImg = loadImage("./assets/treasure.png");
    }
    keyPressed () {
      if (keyIsDown(38)) {
        this.playerImgDefault = loadImage("assets/character-up.png");
        player.moveUp();
      }
      if (keyIsDown(40)) {
        this.playerImgDefault = loadImage("assets/character-down.png");
        player.moveDown();
      }
      if (keyIsDown(37)) {
        this.playerImgDefault = loadImage("assets/character-left.png");
        player.moveLeft();
      }
      if (keyIsDown(39)) {
        this.playerImgDefault = loadImage("assets/character-right.png");
        player.moveRight();
      }
    }
    win() {
      if (player.col === treasure.randomCol && player.row === treasure.randomRow) {
        treasure.setRandomPosition();
      }
    }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row-= 100;
  }
  moveDown() {
    this.row+= 100;
  }
  moveLeft() {
    this.col-= 100;
  }
  moveRight() {
    this.col+= 100;
  }
  render () {
    clear();
    frameRate(10);
    image(game.playerImgDefault, this.col, this.row, 100, 100);
  }
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    this.randomCol = Math.floor((Math.random()*900)/100) * 100
    this.randomRow = Math.floor((Math.random()*900)/100) * 100
  }
  render() {
    image(game.treasureImg, this.randomCol, this.randomRow, 100, 100);
  }
}