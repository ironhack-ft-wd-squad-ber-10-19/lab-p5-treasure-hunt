class Game {
  constructor() {
    this.player1 = new Player("Marco", 0, 0);
    this.player2 = new Player("Luka", WIDTH-SQUARE_SIDE, WIDTH-SQUARE_SIDE)
    this.treasure = new Treasure(200, 200);
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
    game.player2.draw();
    game.treasure.draw();
  }

}
