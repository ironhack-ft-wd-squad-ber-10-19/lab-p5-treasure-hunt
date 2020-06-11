class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let axisX = 0; axisX < WIDTH; axisX += 100) {
      line(axisX, 0, axisX, HEIGHT);
    }
    for (let axisY = 0; axisY < HEIGHT; axisY += 100) {
      line(0, axisY, WIDTH, axisY);
    }
  }

  loadGameImages() {
    this.player = new Player(100, 100);
    // we use loadImage to load the images BEFORE actually using it
    this.playerImg = loadImage("assets/character-down.png");
  }

  doRenderSomething() {
    clear();
    frameRate(10);
    image(this.playerImg, this.player.row, this.player.col, 100, 100);
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
