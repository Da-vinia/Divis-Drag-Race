class Obstacle {
    constructor(gameScreen, img, isPositive){
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 200 + 80);
        this.top = 720;
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
        // this.isPositive = true;
    }


    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    move() {
        this.left += 5;
        this.updatePosition();
    }

}

class PositiveObstacle extends Obstacle {
    constructor(gameScreen) {
      const imagePaths = [
        "../images/obstacles/peluca.png",
        "../images/obstacles/earrings2.png",
        "../images/obstacles/pintalabios.png",
        "../images/obstacles/tacones2.png"
      ];
      const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      
      super(gameScreen, randomImagePath, true);
      // debo añadir aquí el if statement para los puntos?
    }
}
  
  
class NegativeObstacle extends Obstacle {
    constructor(gameScreen) {
      const imagePaths = [
        "../images/obstacles/bigote.png",
        "../images/obstacles/corbata.png",
        "../images/obstacles/poloc-shirt.png",
        "../images/obstacles/sombrero de copa.png"
      ];
      const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      
      super(gameScreen, randomImagePath, false);
    
    }
}
  
  