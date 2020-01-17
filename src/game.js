class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    for (let row = 0; row <= HEIGHT; row += SQUARE_SIDE) {
      line(0, row, WIDTH, row);
      for (let col = 0; col <= WIDTH; col += SQUARE_SIDE) {
        line(col, 0, col, HEIGHT);
      }
    }
    /* for (let square = 0; square <= 1000; square += SQUARE_SIDE) {
      line(0, square, WIDTH, square);
      line(square, 0, square, HEIGHT);
    } */
  }
}
