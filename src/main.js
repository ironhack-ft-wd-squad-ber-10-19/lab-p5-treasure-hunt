const game = new Game();
let pointsPlayer1 = -1;
let pointsPlayer2 = 0;
let imageDown;


function setup() {
	let canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent("canvas");
}

function preload() {
	console.log("PRELOAD");
	imageDown = loadImage("assets/character-down.png");
	imageLeft = loadImage("assets/character-left.png");
	imageRight = loadImage("assets/character-right.png");
	imageUp = loadImage("assets/character-up.png");
	imageTreasure = loadImage("assets/treasure.png");
}

function draw() {
	clear();
	game.drawGrid();
	console.log("position " + player.col + " " + player.row);

	//if (keyIsDown(38)) {
	// player.keyPressed();

	if (keyCode === 37) {
		player.drawLeft();
	} else if (keyCode === 38) {
		player.drawUp();
	} else if (keyCode === 40) {
		player.drawDown();
	} else if (keyCode === 39) {
		player.drawRight();
  } else player.drawDown();
  
	if (keyCode === 65) {
		player2.drawLeft();
	} else if (keyCode === 87) {
		player2.drawUp();
	} else if (keyCode === 83) {
		player2.drawDown();
	} else if (keyCode === 68) {
		player2.drawRight();
  } else player2.drawDown();





  player.checkCollision();
  player2.checkCollision();
	treasure.drawTreasure();
}



function keyPressed() {
  player.drawLeft();
  
	if (keyCode === 39) {
		player.moveRight();
	}

	if (keyCode === 37) {
		player.moveLeft();
	}

	if (keyCode === 38) {
		player.moveUp();
	}

	if (keyCode === 40) {
		player.moveDown();
  }
  

  player2.drawLeft();
  
	if (keyCode === 68) {
		player2.moveRight();
	}

	if (keyCode === 65) {
		player2.moveLeft();
	}

	if (keyCode === 87) {
		player2.moveUp();
	}

	if (keyCode === 83) {
		player2.moveDown();
  }




}
