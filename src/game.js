class Game {
  constructor() {
    this.score1 = 0;
    this.score2 = 0;
  }

  preloadGame() {
    this.playerImgDown = loadImage('../assets/character-down.png');
    this.playerImgUp = loadImage('../assets/character-up.png');
    this.playerImgLeft = loadImage('../assets/character-left.png');
    this.playerImgRight = loadImage('../assets/character-right.png');
    this.treasureImg = loadImage('../assets/treasure.png');
  }

  setupGame() {
    this.player1 = new Player(0,0, 'blue');
    this.player1.image = this.playerImgDown;
    this.score1 = 0;
    document.querySelector('#scoreboard1').innerHTML = `Player 1: ${this.score1}`;
    this.player2 = new Player(900, 900, 'red');
    this.player2.image = this.playerImgDown;
    this.score2 = 0;
    document.querySelector('#scoreboard2').innerHTML = `Player 2: ${this.score2}`;
    this.treasure = new Treasure();
    this.treasure.image = this.treasureImg;
    this.setTreasurePosition();
  }

  setTreasurePosition() {
    this.treasure.setRandomPosition();
    if((this.treasure.col === this.player1.col && this.treasure.col === this.player1.row) || (this.treasure.col === this.player2.col && this.treasure.col === this.player2.row)) {
      this.treasure.setRandomPosition();
    }
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
    if(this.player1.col === this.treasure.col && this.player1.row === this.treasure.row) {
      this.treasure.setRandomPosition();
      this.score1 += 1;
      document.querySelector('#scoreboard1').innerHTML = `Player 1: ${this.score1}`;
    }
    if(this.player2.col === this.treasure.col && this.player2.row === this.treasure.row) {
      this.treasure.setRandomPosition();
      this.score2 += 1;
      document.querySelector('#scoreboard2').innerHTML = `Player 2: ${this.score2}`;
    }
  }

gameIsFinished() {
    if(this.score1 === 10) {
      alert('Player 1 has won!');
      this.score1 = 0;
      this.score2 = 0;
      setup();
      
    } else if(this.score2 === 10) {
      alert('Player 2 has won!');
      this.score2 = 0;
      this.score1 = 0;
      setup();
    }
  }
}
