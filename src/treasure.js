
class Treasure{
    constructor(){
        this.col = 400; 
        this.row = 400;
    }


    setRandomPosition() {
       this.col = Math.floor(Math.random()* 10) * 100;
        this.row = Math.floor(Math.random()* 10)  * 100;
       }

    draw(){
       
image(this.image, this.row, this.col, 100, 100)
    }
        
}
  
