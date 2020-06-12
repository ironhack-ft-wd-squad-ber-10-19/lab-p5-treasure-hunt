class Game {
  setup() {
    this.micko = new Player(200, 200);
    this.gold = new Treasure(400, 400);
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    background(220);
    for(let x = 0; x <= WIDTH; x += WIDTH / 10) {
      for(let y = 0; y <= HEIGHT; y += HEIGHT / 10) {
        stroke(100);
        strokeWeight(3);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y)
      }
    }
  }
}