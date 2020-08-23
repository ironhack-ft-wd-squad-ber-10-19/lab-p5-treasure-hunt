class Game {

  constructor(){
    this.treasure = new Treasure ();
    this.player = new Player ();
    this.player2 = new Player ();
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
    const scoreCount = document.querySelector('.score');
    for (let i=0; i<WIDTH+SQUARE_SIDE;i+=SQUARE_SIDE) {
      console.log(i);
      push();
      line(0, i, WIDTH, i);
      line(i, 0, i, WIDTH);
      pop ();
      if (this.treasure.col === this.player.col && this.treasure.row === this.player.row) {
        this.treasure.setRandomPosition();
        this.player.score+=1;
      scoreCount.innerHTML = `Score: ${this.player.score}`
      }
    }
    
    this.player.drawPlayer();
    this.treasure.drawTreasure();
  }


}
