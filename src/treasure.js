class Treasure {
    constructor(){
       this.col=0;
       this.row=0; 
       this.image;
    }
    
    setRandomPosition(){
        this.col= Math.floor(Math.random()*9)*SQUARE_SIDE;
        console.log('the column is',this.col);
        this.row= Math.floor(Math.random()*9)*SQUARE_SIDE;
        console.log('the row is',this.row)
    }
    
    preloadTreasure(){
        console.log('treasure is preloaded');
        this.image = loadImage('./assets/treasure.png');
    }
    
    setupTreasure(){
        this.image = loadImage('./assets/treasure.png');
        this.setRandomPosition();
    }
    
    drawTreasure (){
        image(this.image, this.row+SQUARE_SIDE*0.05, this.col+SQUARE_SIDE*0.05, SQUARE_SIDE*0.9, SQUARE_SIDE*0.9)
    }
}