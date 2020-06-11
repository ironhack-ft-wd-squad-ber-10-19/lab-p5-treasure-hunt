class Game {
  drawGrid() {
    // Iteration 1
    background(250); // hintergrung(Farbe);

  for (var x = 0; x <= width; x += width / 10) {  
  for (var y = 0; y <= height; y += height / 10) {
    stroke(100);  // farbe
    strokeWeight(5); // dicke der linien 
    line(x, 0, x, height); 
    line(0, y, width, y); 
   }
  }

    // https://p5js.org/reference/#/p5/line
  }
  pleaseLoadGameImages() {
    // we load gustavo before using its variables in the doSomething function
    this.rom = new Player(10, 0);

    // we use loadImage to load the images BEFORE actually using it
    this.romImg = loadImage("assets/character-down.png"); 
  }
  doSomething() {
    console.log(this.rom.col)
    image(this.romImg, this.rom.col,this.rom.row);
}
}


