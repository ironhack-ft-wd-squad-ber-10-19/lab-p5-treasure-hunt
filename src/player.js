class Player {
  constructor(playerImg){
    this.col = (WIDTH / 2 - SQUARE_SIDE);
    this.row = (WIDTH / 2 - SQUARE_SIDE);
    this.img = playerImg;
    this.score = 0;
  }

  setup() {
    frameRate(10);
    this.img = loadImage('./assets/character-down.png');
  }
  
  preload(){
  }
  
  draw() {
    image(this.img,this.col + SQUARE_SIDE * 0.1,this.row + SQUARE_SIDE * 0.1, SQUARE_SIDE * 0.8, SQUARE_SIDE * 0.8);
    if(keyIsDown(keyCode)) {
      this.handleKeyboardEvents();
    }
  }

  moveUp() {
    this.img = loadImage('./assets/character-up.png');
    this.row -= (this.row > 0) ? SQUARE_SIDE : 0;
  }
  
  moveDown() {
    this.img = loadImage('./assets/character-down.png');
    this.row += (this.row < WIDTH - SQUARE_SIDE) ? SQUARE_SIDE : 0;
  }
  
  moveLeft() {
    this.img = loadImage('./assets/character-left.png');
    this.col -= (this.col > 0) ? SQUARE_SIDE : 0;
  }
  
  moveRight() {
    this.img = loadImage('./assets/character-right.png');
    this.col += (this.col < WIDTH - SQUARE_SIDE) ? SQUARE_SIDE : 0;
  }

  handleKeyboardEvents() {
    switch(keyCode){
      case UP_ARROW:
        game.player.moveUp();
        break;
      case DOWN_ARROW:
        game.player.moveDown();
        break;
      case LEFT_ARROW:
        game.player.moveLeft();
        break;
      case RIGHT_ARROW:
        game.player.moveRight();
        break;
    }
  
    if(game.player.col === game.treasure.col && game.player.row === game.treasure.row) {
      game.player.score++;
      game.treasure.setRandomPosition();
    }
  
  }
}