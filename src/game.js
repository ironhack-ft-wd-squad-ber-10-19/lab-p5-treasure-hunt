class Game {
  drawGrid() {
    // Iteration 1
    for (let axisX = 0; axisX < WIDTH; axisX += 100) {
      line(axisX, 0, axisX, HEIGHT);
    }
    for (let axisY = 0; axisY < HEIGHT; axisY += 100) {
      line(0, axisY, WIDTH, axisY);
    }
  }

  loadGame() {
    this.player = new Player(100, 100);
    this.treasure = new Treasure()
    console.log(this.treasure.col)
    this.playerImg = loadImage("assets/character-down.png");
    this.treasureImg = loadImage("assets/treasure.png");
  }

  doRenderSomething() {
    clear();
    frameRate(10);
    image(this.playerImg, this.player.row, this.player.col, 100, 100);
    image(this.treasureImg, this.treasure.row, this.treasure.col, 100, 100);
  }

  playCommand() {
    if (keyIsDown(40)) {
      this.playerImg = loadImage("assets/character-down.png");
      return this.player.moveUp();
    }
    if (keyIsDown(38)) {
      this.playerImg = loadImage("assets/character-up.png");
      return this.player.moveDown();
    }
    if (keyIsDown(37)) {
      this.playerImg = loadImage("assets/character-left.png");
      return this.player.moveLeft();
    }
    if (keyIsDown(39)) {
      this.playerImg = loadImage("assets/character-right.png");
      return this.player.moveRight();
    }
  }


}
