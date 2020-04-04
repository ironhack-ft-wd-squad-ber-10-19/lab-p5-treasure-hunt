
class Game {
  init() {
    this.player = new Player();
    this.treasure = new Treasure();
  }

  setup() {
    this.player.setup();
    this.treasure.setup();
  }

  display() {
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
      line(i, 0, i, HEIGHT);
    }

    if (
      this.player.x === this.treasure.x &&
      this.player.y === this.treasure.y
    ) {
      this.treasure.x =
        Math.floor((Math.random() * WIDTH) / SQUARE_SIDE) * SQUARE_SIDE;
      this.treasure.y =
        Math.floor((Math.random() * WIDTH) / SQUARE_SIDE) * SQUARE_SIDE;
      document.getElementsByClassName("scoreCount")[0].innerHTML++;
    }

    if (
      this.player.x < 0 ||
      this.player.x > 900 ||
      this.player.y < 0 ||
      this.player.y > 900
    ) {
      document.getElementById("outofbounds").style.visibility = "visible";
    } else {
      document.getElementById("outofbounds").style.visibility = "hidden"
    }



    this.player.display();
    this.treasure.display();
  }
}

//Iteration2
class Player {
  constructor() {
    this.imgDown = loadImage("assets/character-down.png");
    this.imgUp = loadImage("assets/character-up.png");
    this.imgLeft = loadImage("assets/character-left.png");
    this.imgRight = loadImage("assets/character-right.png");
  }

  setup() {
    this.img = this.imgDown;
    this.height = SQUARE_SIDE;
    this.width = SQUARE_SIDE;
    this.x = 0;
    this.y = 0;
  }

  display() {
    image(this.img, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
  }

  moveUp() {
    this.y -= SQUARE_SIDE;
    this.img = this.imgUp;
  }

  moveDown() {
    this.y += SQUARE_SIDE;
    this.img = this.imgDown;
  }

  moveLeft() {
    this.x -= SQUARE_SIDE;
    this.img = this.imgLeft;
  }

  moveRight() {
    this.x += SQUARE_SIDE;
    this.img = this.imgRight;
  }
}

class Treasure {
  constructor() {
    this.img = loadImage("assets/treasure.png");
  }

  setup() {
    this.x = randPositionX;
    this.y = randPositionY;
  }

  display() {
    image(this.img, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE);
  }
}
