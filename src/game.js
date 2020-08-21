
class Game {
  drawGrid() {
    for (let i = 0; i <= WIDTH; i += 100) {
      line(i, 0, i, WIDTH)
      line(0,i, HEIGHT,i)
    }
  }

  preloadGame() {
    this.treasureImg = loadImage("assets/treasure.png")
    this.playerImg = loadImage("assets/character-down.png")
  }

  setupGame() {
    this.treasure = new Treasure(500,500)
    this.treasure.setRandomPosition()
    this.treasure.image = this.treasureImg
    this.player1 = new Player(0,0);
    this.player1.image = this.playerImg;
    this.player2 = new Player(900,0);
    this.player2.image = this.playerImg;
  }

  drawGame() {
    this.treasure.drawTreasure();
    this.player1.drawPlayer();
    this.player2.drawPlayer();
    if (this.player1.col === this.treasure.col && this.player1.row === this.treasure.row) {
      this.treasure.setRandomPosition()
    }
    if (this.player2.col === this.treasure.col && this.player2.row === this.treasure.row) {
      this.treasure.setRandomPosition()
    }
  }

}

