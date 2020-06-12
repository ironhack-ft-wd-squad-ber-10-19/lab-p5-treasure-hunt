class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let x = 0; x <= WIDTH; x += WIDTH / 10) {
      for (let y = 0; y <= HEIGHT; y += HEIGHT / 10) {
        stroke(3);
        strokeWeight(5);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
  }
}



