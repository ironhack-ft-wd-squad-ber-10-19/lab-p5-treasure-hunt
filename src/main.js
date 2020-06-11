const game = new Game();

function setup() {
  let canvas = createCanvas(600, 600); 
  canvas.parent("canvas");  // spricht die ID im HTML an 
}

function draw() {
  game.drawGrid();
  background(250); // hintergrung(Farbe);

  for (var x = 0; x <= width; x += width / 10) {  
  for (var y = 0; y <= height; y += height / 10) {
    stroke(100);  // farbe
    strokeWeight(5); // dicke der linien 
    line(x, 0, x, height); 
    line(0, y, width, y); 
   }
  }
	}
















