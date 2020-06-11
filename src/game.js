class Game {
  drawGrid() {
    // Iteration 1
    for (let i = 0; i <= HEIGHT; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
    }
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, HEIGHT);
    }

  }

  loadGame() {
    this.player = new Player(100, 100);
    this.treasure = new Treasure()
    console.log(this.treasure.col)
    this.playerImg = loadImage("assets/character-down.png");
    this.treasureImg = loadImage("assets/treasure.png");
    this.score = 0
  }

  doRenderSomething() {
    clear();
    frameRate(10);
    image(this.playerImg, this.player.row, this.player.col, SQUARE_SIDE, SQUARE_SIDE);
    image(this.treasureImg, this.treasure.row, this.treasure.col, SQUARE_SIDE, SQUARE_SIDE);
  }

  playCommand() {
    console.log(width)
    if (keyIsDown(40) && this.player.col + SQUARE_SIDE < 1000) {
      this.playerImg = loadImage("assets/character-down.png");
      return this.player.moveUp();
    }
    if (keyIsDown(38) && this.player.col - SQUARE_SIDE > -100) {
      this.playerImg = loadImage("assets/character-up.png");
      return this.player.moveDown();
    }
    if (keyIsDown(37) && this.player.row - SQUARE_SIDE > -100) {
      this.playerImg = loadImage("assets/character-left.png");
      return this.player.moveLeft();
    }
    if (keyIsDown(39) && this.player.row + SQUARE_SIDE < 1000) {
      this.playerImg = loadImage("assets/character-right.png");
      return this.player.moveRight();
    }
  }

  takeTreasure() {
    if (this.player.col === this.treasure.col && this.player.row === this.treasure.row) {
      this.treasure = new Treasure()
      document.querySelector('#score').innerHTML = `Score: ${++this.score}`
    }
  }
}
