class Game {
  constructor(){
    this.player = new Player();
    this.treasure = new Treasure();
  }

  setup(){
    this.score = createGraphics(200,HEIGHT);
    this.score.parent(canvas);
  
    this.player.setup();
    this.player.preload();
    this.treasure.setup();

  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    clear();

    for(let pos=0; pos<=WIDTH; pos+=SQUARE_SIDE){
      push();
      line(pos,0,pos,WIDTH);
      line(0, pos,WIDTH,pos);
      pop();
    }

    this.player.draw();
    this.treasure.drawTreasure();

  
  }

}

