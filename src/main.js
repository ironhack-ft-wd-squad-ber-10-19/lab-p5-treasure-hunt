const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();
const trap = new Trap();
let score = 0;
let gameOver = false;

function preload() {
  player.loadImages();
  treasure.image = loadImage("./assets/treasure.png");
  trap.image = loadImage("./assets/enemy.png");
  // loserGif = createImage("./assets/loserGif.gif");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

  treasure.setRandomPosition();
  trap.setRandomPosition();
}

function draw() {
  clear();
  if (!gameOver) {
    game.drawGrid();
    player.drawPlayer();
    treasure.drawTreasure();
    trap.drawTrap();
  }
}

function keyPressed() {
  switch (keyCode) {
    case 38:
      player.moveUp();
      break;
    case 40:
      player.moveDown();
      break;
    case 39:
      player.moveRight();
      break;
    case 37:
      player.moveLeft();
      break;
  }

  if (player.row === treasure.row && player.col === treasure.col) {
    treasure.setRandomPosition();
    score += 10;
    document.getElementById("score").innerText = score;
  }

  if (player.row === trap.row && player.col === trap.col) {
    trap.setRandomPosition();
    score -= 10;
    if (score <= 0) {
      gameOver = true;

      let giphy = document.createElement("img");
      giphy.setAttribute(
        "src",
        "https://media.giphy.com/media/Z9hZLKflOlXjo349De/giphy.gif"
      );
      giphy.style.width = "1000px";
      giphy.style.position = "absolute";
      giphy.style.top = 0;
      giphy.style.left = 0;
      document.getElementById("canvas").appendChild(giphy);
    }
    document.getElementById("score").innerText = score;
  }
}
