class Game {
  constructor() {
    this.player1 = new Player(0, 0);
  }

  drawGame() {
    // Draw grid:
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i)
    }

    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, WIDTH)
    }

    // Draw player:
    game.player1.draw();
  }

}
