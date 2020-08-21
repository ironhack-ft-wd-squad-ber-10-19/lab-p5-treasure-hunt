class Game {
  constructor() {
    this.score = 0;
  }

  preloadGame() {
    this.playerImgDown = loadImage('../assets/character-down.png');
    this.playerImgUp = loadImage('../assets/character-up.png');
    this.playerImgLeft = loadImage('../assets/character-left.png');
    this.playerImgRight = loadImage('../assets/character-right.png');
    this.treasureImg = loadImage('../assets/treasure.png');
  }

  setupGame() {
    this.player = new Player();
    this.player.image = this.playerImgDown;
    this.treasure = new Treasure();
    this.treasure.image = this.treasureImg;
    this.treasure.setRandomPosition();
  }

  drawGrid() {
    let grid = [];
    for(let i = 0; i <= 10; i++) {
      grid.push(line(0, i*100, 1000, i*100));
      grid.push(line(i*100, 0, i*100, 1000))
    }
    return grid;
  }

  treasureFound() {
    if(this.player.col === this.treasure.col && this.player.row === this.treasure.row) {
      this.treasure.setRandomPosition();
      this.score += 1;
      document.querySelector('#scoreboard').innerHTML = `Score: ${this.score}`;
    }
  }
}

