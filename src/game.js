class Game {
  constructor() {
    this.player=new Player(0, 0);
    this.treasure=new Treasure();
  }
  drawGrid() {
    for (let i=0; i<=10; i++) {
      line(SQUARE_SIDE*i, 0, SQUARE_SIDE*i, HEIGHT)
      line(0, SQUARE_SIDE*i, WIDTH, SQUARE_SIDE*i)
    }
  }
}
  