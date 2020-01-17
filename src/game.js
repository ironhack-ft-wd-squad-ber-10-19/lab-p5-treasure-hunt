class Game {
  drawGrid() {
    background(220);
    width = 1000;
    height = WIDTH;
    for (let x = 0; x < width; x += width / 10) {
      for (let y = 0; y < height; y += height / 10) {
        stroke(1);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  }
}
// class Player {
//   constructor(col, row, img) {
//     this.col = col;
//     this.row = row;
//     this.img = img;
//   }
//   draw() {
//     image(img, this.col, this.row, 90, 90);
//   }

//   moveUp() {
//     if (this.col > 0) {
//       console.log('Player moved UP');
//       this.col -= 100;
//     }
//   }
//   moveDown() {
//     if (this.col < 1000) {
//       console.log('Player moved DOWN');
//       this.col += 100;
//     }
//   }
//   moveLeft() {
//     if (this.row > 0) {
//       console.log('Player moved LEFT');
//       this.row -= 100;
//     }
//   }
//   moveRight() {
//     if (this.row < 1000) {
//       console.log('Player RIGHT');
//       this.row += 100;
//     }
//   }
// }

// const player1 = new Player(5, 5);
