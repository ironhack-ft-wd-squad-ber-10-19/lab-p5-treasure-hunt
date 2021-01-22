class Game {

  drawGrid() {
    for (var x = 0; x < WIDTH + 1; x += SQUARE_SIDE) {
		  for (var y = 0; y < HEIGHT + 1; y += SQUARE_SIDE) {
			  strokeWeight(1);
			  line(x, 0, x, HEIGHT);
			  line(0, y, WIDTH, y);
		  }
	  }
  }

  // drawGrid() {
  //   let col = 10;
  //   let row = 10;
  //   background(230);
  
  //   for (let i = 0; i < col; i++) {
  //     for (let j = 0; j < row; j++) {
  //       let x = i * 100;
  //       let y = j * 100;
  //       stroke(0);
  //       fill(255);
  //       rect(x, y, 100, 100);
  //     }
  //   }
  // }
}

