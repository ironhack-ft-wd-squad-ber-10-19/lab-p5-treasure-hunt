
class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    // stroke("black");
    // strokeWeight(5);
    // line(0, 0, 0, 1000);

    for (var x = 0; x <= WIDTH; x += WIDTH / 10) {
      for (var y = 0; y <= HEIGHT; y += HEIGHT / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
  }
}