class Game {
  drawGrid() {
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, HEIGHT);
      line(0, i, WIDTH, i);
    }

  }
}
