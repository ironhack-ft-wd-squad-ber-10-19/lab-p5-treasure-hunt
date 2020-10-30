class Game {

  drawGrid() {
    let col = 10;
    let row = 10;
    background(230);
  
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        let x = i * 100;
        let y = j * 100;
        stroke(0);
        fill(255);
        rect(x, y, 100, 100);
      }
    }
  }
}