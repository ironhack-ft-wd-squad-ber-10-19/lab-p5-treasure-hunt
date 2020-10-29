class Game {
  preLoadGame(){
    console.log('preload this game');
    this.playerImage = loadImage('/assets/character-down.png')
    this.treasureImage = loadImage('/assets/treasure.png')
    // this.player2 = 
    this.player2Image = loadImage('/assets/player2.png')
    // this.playerImageRight = loadImage('/assets/character-right.png')
}
  setupGame(){
    this.player = new Player();
    this.player2 = new Player();
    this.treasure = new Treasure();
    this.player.image = this.playerImage;
    this.player2.image = this.player2Image;
    this.treasure.image = this.treasureImage;
    // this.player.image

  }
  drawGrid() {
    // line(30, 20, 85, 75);
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    // background(220);
	//For (var BEGIN; END; INTERVAL){
	//DO SOMETHING }
	for (var x = 0; x < width + 1; x += width / 10) {
		for (var y = 0; y < height + 1; y += height / 10) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
}
}
drawGame(){
  // console.log('draw this game');
  // clear();
  // fill('red');
  // rect(this.x, this.y, 55, 55);
  // rect(300, 200, 55, 55);
  // fill('blue');
  // circle(this.circleX, this.circleY, 50)
  //
  this.player.drawPlayer();
  // this.player2.drawPlayer();
  this.treasure.drawTreasure();
}

win(){
  let distance = dist(this.player.col, this.player.row, this.treasure.col, this.treasure.row);
  

  if (distance < 10){
    alert('Winner');
    
    setup();
    draw();
    this.score();
  }

}

score(){ 
  console.log(1)
  // player.score1();
}
  // this.player.score += 1
  // // winCounter += 1;
  // console.log(winCounter)
  // let p1Score = document.querySelector('#score-p1')
  // p1Score.innerText = player.score
}


