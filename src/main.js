const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();
const player2 = new Player2(WIDTH - squareWidth, WIDTH - squareWidth);
const player3 = new Player3(WIDTH - squareWidth, 0);
const player4 = new Player4(0, WIDTH - squareWidth);

let imgPlayer;
let imgPlayer2;
let imgPlayer3;
let imgPlayer4;
let imgTreasure;
let imgTexture;
let pos;
let pos2;



function preload() {
  imgPlayer = loadImage("/assets/character-down.png");
  imgPlayer2 = loadImage("/assets/character-up.png");
  imgPlayer3 = loadImage("/assets/character-left.png");
  imgPlayer4 = loadImage("/assets/character-right.png");
  imgTreasure = loadImage("/assets/treasure.png");
  imgTexture = loadImage("/assets/abstract-wooden-seamless-texture-background_23-2148283204 (1).jpg");

}


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  drawTreasure();
}



function draw() {
  background("white");
  push();
  tint(150, 200, 255, 80);

  background(imgTexture);
  pop();
  fill("red");
  game.drawGrid();
  player.draw();
  player2.draw();
  player3.draw();
  player4.draw();
  treasure.draw()
  updateScores();



};


setInterval(function () {
  Math.ceil(Math.random() * 3);
  pos = (Math.ceil(Math.random() * 4))
  console.log(pos);
  if (pos === 1) { //move left
    player3.moveLeft();
    player3.draw();
  } else if (pos === 2) { //move right
    player3.moveRight();
    player3.draw();
  } else if (pos === 3) { //move down 
    player3.moveDown();
    player3.draw();
  } else if (pos === 4) { //move up
    player3.moveUp();
    player3.draw();
  }

}, 100);

setInterval(function () {
  Math.ceil(Math.random() * 3);
  pos2 = (Math.ceil(Math.random() * 4))
  console.log(pos);
  if (pos2 === 1) { //move left
    player4.moveLeft();
    player4.draw();
  } else if (pos2 === 2) { //move right
    player4.moveRight();
    player4.draw();
  } else if (pos2 === 3) { //move down 
    player4.moveDown();
    player4.draw();
  } else if (pos2 === 4) { //move up
    player4.moveUp();
    player4.draw();
  }

}, 100);



function keyPressed() {
  console.log("hello")
  //will detect keycode of any of the keys
  if (keyCode === 37) { //move left
    player.moveLeft();
    player.draw();
  } else if (keyCode === 39) { //move right
    player.moveRight();
    player.draw();
  } else if (keyCode === 40) { //move down 
    player.moveDown();
    player.draw();
  } else if (keyCode === 38) { //move up
    player.moveUp();
    player.draw();
  } else if (keyCode === 65) { //move left
    player2.moveLeft();
    player2.draw();
  } else if (keyCode === 68) { //move right
    player2.moveRight();
    player2.draw();
  } else if (keyCode === 83) { //move down 
    player2.moveDown();
    player2.draw();
  } else if (keyCode === 87) { //move up
    player2.moveUp();
    player2.draw();
  }

}

function updateScores() {

  document.querySelector(".player1 span").innerText = player.score;
  document.querySelector(".player2 span").innerText = player2.score;
  document.querySelector(".player3 span").innerText = player3.score;
  document.querySelector(".player4 span").innerText = player4.score;

}

function drawTreasure() {
  treasure.setRandomPosition();
}