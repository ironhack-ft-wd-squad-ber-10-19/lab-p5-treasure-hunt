class Game {
  drawGrid() {
    strokeWeight(3);
    stroke("grey");
    for (let i = 0; i <= WIDTH; i += SIDE) {
      line(1 * i, 0, 1 * i, HEIGHT);
    }
    for (let i = 0; i <= WIDTH; i += SIDE) {
      line(0, 1 * i, width, 1 * i);
    }
  }
}