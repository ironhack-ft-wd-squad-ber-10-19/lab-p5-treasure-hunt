
const game = new Game();


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  
}

function preload() {
  game.pleaseLoadGameImages();
  console.log("This is preloading before the setup");
}

function draw() {
  game.drawGrid();
  game.doSomething();

  
  
}

function keyPressed() {
  // console.log("I am being pressed!!!!!!!!!!!");
  //This is a p5 variable that gives you a number!

  console.log(keyCode);
  if (keyCode == 38) {
    //38 is the up arrow
    console.log("Up arrow");
    game.viking.moveUp();
  }
  if (keyCode == 40) {
    //40 for down arrow
    console.log("down arrow");
    game.viking.moveDown();
  }
  if (keyCode == 37) {
    //37 for left arrow
    console.log("left arrow");
    game.viking.moveLeft();
  }
  if (keyCode == 39) {
    //39 for right arrow
    console.log("right arrow");
    game.viking.moveRight();
  }
  if (keyCode == 67) {
    console.log("clickcing the c letter");
    game.reset();
  }
}

