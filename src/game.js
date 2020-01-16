class Game {
	drawGrid() {
		// Iteration 1
		// Draw the grid
		// https://p5js.org/reference/#/p5/
		let xLine = 0;
		let yLine = 0;
		let i;
		strokeWeight(3);
		stroke("darkgrey");
		for (i = 0; i < 11; i++) {
			line(xLine, 0, xLine, WIDTH);
			xLine += SQUARE_SIDE;
			line(0, yLine, WIDTH, yLine);
			yLine += SQUARE_SIDE;
		}
	}
}

class Player {
	constructor(col, row, playerNum) {
		this.row = row;
		this.col = col;
		this.playerNum = playerNum;
		//this.score.
		//this.direction = direction;
	}

	moveUp() {
		if (this.row > 0) {
			this.row -= SQUARE_SIDE;
		}
	}

	moveDown() {
		if (this.row < HEIGHT - SQUARE_SIDE) {
			this.row += SQUARE_SIDE;
		}
	}

	moveLeft() {
		if (this.col > 0) {
			this.col -= SQUARE_SIDE;
		}
	}

	moveRight() {
		if (this.col < WIDTH - SQUARE_SIDE) {
			this.col += SQUARE_SIDE;
		}
	}
	drawLeft() {
		push();
		//clear();
		image(imageLeft, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
		pop();
	}

	drawRight() {
		push();
		//clear();
		image(imageRight, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
		pop();
	}
	drawDown() {
		push();
		//clear();
		image(imageDown, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
		pop();
	}
	drawUp() {
		push();
		//clear();
		image(imageUp, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
		pop();
	}

	checkCollision() {
		if (this.col === treasure.col && this.row === treasure.row) {
			treasure.setRandomPosition();

			if (this.playerNum == 1) {
				pointsPlayer1++;
				document.querySelector("body > h3").innerText = pointsPlayer1 + " Points for player 1 ! ";
			}

			if (this.playerNum == 2) {
				pointsPlayer2++;
				document.querySelector("body > h4").innerText = pointsPlayer2 + " Points for player 2 ! ";
			}

			// if (this.player2 == player2) {
			// 	pointsPlayer2++;
			// 	document.querySelector("body > h4").innerText = pointsPlayer2 + " Points for player 2 ! ";
			// }

			//	}
		}
	}

	// keyPressed() {
	// 	if (keyIsPressed) {
	// 		if (keyCode == DOWN_ARROW) {

	//       if (this.col < 1000){
	// 			this.moveDown();}
	//     }
	//     if (keyCode == LEFT_ARROW) {
	// 			this.moveLeft();
	//     }
	//     if (keyCode == RIGHT_ARROW) {
	// 			this.moveRight();
	//     }
	//     if (keyCode == UP_ARROW) {
	// 			this.moveUp();
	// 		}
	// 	}
	// }
}

class Treasure {
	constructor(col, row) {
		this.row = row;
		this.col = col;
	}

	setRandomPosition() {
		this.row = Math.floor(Math.random() * 10) * SQUARE_SIDE;
		this.col = Math.floor(Math.random() * 10) * SQUARE_SIDE;
	}

	drawTreasure() {
		image(imageTreasure, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
	}
}

const player = new Player(0, 0, 1);
const player2 = new Player(0, 0, 2);
const treasure = new Treasure(0, 0);
console.log(player);
