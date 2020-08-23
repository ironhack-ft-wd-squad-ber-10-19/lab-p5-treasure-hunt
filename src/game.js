class Game {

  constructor(){
    this.treasure = new Treasure ();
    this.player = new Player ();
  }

  preloadGame() {
    console.log('game preload');
    this.treasure.preloadTreasure();
    this.playerImg = loadImage ('./assets/character-down.png');
    this.player.preloadPlayer();
  }

  setupGame () {
    console.log('game setup');
    this.treasure.setupTreasure();
    this.player.setupPlayer();
  }


  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    
    clear ();
    for (let i=0; i<WIDTH+SQUARE_SIDE;i+=SQUARE_SIDE) {
      console.log(i);
      push();
      line(0, i, WIDTH, i);
      line(i, 0, i, WIDTH);
      pop ();
    }
    
    this.player.drawPlayer();
    this.treasure.drawTreasure();
  }
}
