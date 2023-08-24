class Player {
    constructor(gameScreen, left, top, width, height, img, audio) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.speed = 3;
        this.element = document.createElement('img');
        this.element.setAttribute('src', img);
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.element.style.zIndex = 2;
        this.gameScreen.appendChild(this.element);
        this.gravity = 0.02;
    }

    move() {
        this.directionY += this.gravity;
        this.left += this.directionX * this.speed;
        this.top += this.directionY * this.speed;
        this.updatePosition();

        const minLeft = 10;
        const minTop = 10;
        const maxLeft = this.gameScreen.offsetWidth - this.width - 10;
        const maxTop = this.gameScreen.offsetHeight - this.height - 10;

        if (this.left < minLeft) {
      this.left = minLeft;
        }

        if (this.top < minTop) {
      this.top = minTop;
        }

        if (this.left > maxLeft) {
      this.left = maxLeft;
        }

        if (this.top > maxTop) {
      this.top = maxTop;
        }
    }
    
    jump() {
        const jumpHeight = 20;
        const jumpSpeed = 0.5;
        const maxTop = this.gameScreen.offsetHeight - this.height - 10;

        if(this.top === maxTop) {
            this.directionY = -jumpHeight * jumpSpeed;
        }
    }
      
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;  
    }

    didCollide(obstacle) {
        const playerReact = this.element.getBoundingClientRect();
        const obstacleReact = obstacle.element.getBoundingClientRect();

        if(playerReact.left < obstacleReact.right &&
            playerReact.right > obstacleReact.left &&
            playerReact.top < obstacleReact.bottom &&
            playerReact.bottom > obstacleReact.top) {
        return true; 
        } else {
        return false;
        }
    }
}
