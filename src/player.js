class Player {
    constructor() {
        this.col=0;
        this.row=0;
        this.image;
        this.score=0;
    }
        moveUp () {
            (this.col >0) ? this.col-=SQUARE_SIDE: this.col-=0;
            this.image = loadImage('./assets/character-up.png');
            console.log('new position is',this.row,this.col);
        }
        moveDown (){
            (this.col < HEIGHT-SQUARE_SIDE) ? this.col+=SQUARE_SIDE : this.col+=0;
            this.image = loadImage('./assets/character-down.png');
            console.log('new position is',this.row,this.col);
        }
        moveLeft(){
            (this.row >0) ? this.row-= SQUARE_SIDE : this.row-=0;
            this.image = loadImage('./assets/character-left.png');
            console.log('new position is',this.row,this.col);
        }
        moveRight(){
            (this.row <WIDTH-SQUARE_SIDE) ? this.row+= SQUARE_SIDE : this.row+= 0;
            this.image = loadImage('./assets/character-right.png');
            console.log('new position is',this.row,this.col);
        }

    preloadPlayer (){
        this.image = loadImage('./assets/character-down.png');
        console.log('player preload');
        frameRate(5);
    }

    setupPlayer (){
        console.log('player setup');
        this.image = loadImage('./assets/character-down.png');
        frameRate(5);
    }
    
    drawPlayer () {
        console.log('player draw');
        frameRate(10);
        image(this.image, this.row+SQUARE_SIDE*0.05, this.col+SQUARE_SIDE*0.05, SQUARE_SIDE*0.9, SQUARE_SIDE*0.9);
        keyIsDown(UP_ARROW) ? game.player.moveUp() : this.col-=0;
        keyIsDown(DOWN_ARROW) ? game.player.moveDown() : this.col+=0;
        keyIsDown(LEFT_ARROW) ? game.player.moveLeft() : this.row-=0;
        keyIsDown(RIGHT_ARROW) ? game.player.moveRight() : this.row+=0;

        
    }
    
}