class Obstacle {
    constructor(gameScreen, img){
        this.gameScreen = gameScreen;
        this.left = 900;
        this.top = 730;      
        this.width = 100;
        this.height = 100;
        this.element = document.createElement('img');
        this.element.setAttribute('src', img);
        this.element.style.position = "absolute";
        this.element.style.width =`${this.width}px`;
        this.element.style.height =`${this.height}px`;
        this.element.style.left =`${this.left}px`;
        this.element.style.top =`${this.top}px`;
        this.element.style.zIndex = 3;
        this.gameScreen.appendChild(this.element);
    }


    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    move() {
        this.left += -1;
        this.updatePosition();
    }
}

class PositiveObstacle extends Obstacle {
    constructor(gameScreen) {
      const imagePaths = [
        "../assets/images/obstacles/peluca.png",
        "../assets/images/obstacles/earrings2.png",
        "../assets/images/obstacles/pintalabios.png",
        "../assets/images/obstacles/tacones2.png"
      ];
      const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      
      super(gameScreen, randomImagePath, true);
    }
}
  
class NegativeObstacle extends Obstacle {
    constructor(gameScreen) {
      const imagePaths = [
        "../assets/images/obstacles/bigote.png",
        "../assets/images/obstacles/corbata.png",
        "../assets/images/obstacles/poloc-shirt.png",
        "../assets/images/obstacles/sombrero de copa.png"
      ];
      const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      
      super(gameScreen, randomImagePath, false);
    
    }
}
  
  