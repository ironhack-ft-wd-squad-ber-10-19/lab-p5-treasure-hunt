
class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    // horizontal lines
    line(0, 0, 1000, 0)
    line(0, 100, 1000, 100)
    line(0, 200, 1000, 200)
    line(0, 300, 1000, 300)
    line(0, 400, 1000, 400)
    line(0, 500, 1000, 500)
    line(0, 600, 1000, 600)
    line(0, 700, 1000, 700)
    line(0, 800, 1000, 800)
    line(0, 900, 1000, 900)
    line(0, 1000, 1000, 1000)
    // vertical lines
    line(0, 0, 0, 1000)
    line(100, 0, 100, 1000)
    line(200, 0, 200, 1000)
    line(300, 0, 300, 1000)
    line(400, 0, 400, 1000)
    line(500, 0, 500, 1000)
    line(600, 0, 600, 1000)
    line(700, 0, 700, 1000)
    line(800, 0, 800, 1000)
    line(900, 0, 900, 1000)
    line(1000, 0, 1000, 1000)
  }

  preloadGame() {
    this.treasureImg = loadImage("assets/treasure.png")
    this.playerImg = loadImage("assets/character-down.png")
  }

  setupGame() {
    this.treasure = new Treasure(0,0)
    this.treasure.image = this.treasureImg
    this.treasure.setRandomPosition()
    console.log(this.treasure.col, this.treasure.row)
    this.player = new Player(0,0);
    this.player.image = this.playerImg;
  }

  drawGame() {
    this.treasure.drawTreasure();
    this.player.drawPlayer();
    if (this.player.col === this.treasure.col && this.player.row === this.treasure.row) {
      this.treasure.setRandomPosition()
    }
    let score = 0
    if (this.player.col === this.treasure.col && this.player.row === this.treasure.row) {
      score += 1
      console.log(`Your score is ${score}`)
    }
  }

}

