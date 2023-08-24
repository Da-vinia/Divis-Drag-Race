class Obstacle {
    constructor(gameScreen, img, isPositive){
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
        "/images/peluca.png",
        "/images/earrings2.png",
        "/images/pintalabios.png",
        "/images/tacones2.png"
      ];
      const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      
      super(gameScreen, randomImagePath, true);
    }
}
  
class NegativeObstacle extends Obstacle {
    constructor(gameScreen) {
      const imagePaths = [
        "/images/bigote.png",
        "/images/corbata.png",
        "/images/poloc-shirt.png",
        "/images/sombrero de copa.png"
      ];
      const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      
      super(gameScreen, randomImagePath, false);
    
    }
}
  
  