class Game {
  constructor() {
    // this.col = 0;
    // this.row = 0;
  }

  drawGrid() {
      //console.log("draw grid");
      clear();
      background(255, 255, 255);
      stroke(191, 191, 191);
      strokeWeight(2);
    
    for (let x = 0; x < width + 1; x += width / 10) {
      for (let y = 0; y < height + 1; y += height / 10) {
        stroke(191, 191, 191);
        strokeWeight(2);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }

    // https://p5js.org/reference/#/p5/line
  }

  preLoadGame() {
    // console.log("preload this game");
    this.playerImage = loadImage('../assets/character-down.png');
    this.treasuryImage = loadImage('../assets/treasure.png');
  }

  setupGame() {
    // console.log("setup this game");
    this.player = new Player(3, 9);
    this.player.image = this.playerImage;
    this.treasury = new Treasury();
    this.treasury.image = this.treasuryImage;
  }

  drawGame() {
    // console.log("draw this game");
    this.player.drawPlayer();
    this.treasury.drawTreasury();
    // this.treasury.setRandomPosition();
  }

  keyIsPressed(keyCode) {
    //console.log(`key pressed: ${keyCode}`);
    this.player.keyIsPressed(keyCode);
  }

  // setRandomPosition() {
  //   this.treasury.setRandomPosition();
  // }

}



