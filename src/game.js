class Game {
  drawGrid() {
    // Iteration 1
    line(1000, 0, WIDTH, HEIGHT);
    line(0, 1000, WIDTH, HEIGHT);
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let x = 0; x < WIDTH; x += WIDTH / 10) {
      // strokeWeight(1);
      line(x, 0, x, HEIGHT);

    }
    for (let y = 0; y < HEIGHT; y += HEIGHT / 10) {
      // strokeWeight(1);
      line(0, y, WIDTH, y);
    }
  }

}

