class Game {
    constructor() {
        this.startScreen = document.querySelector('#game-intro');
        this.gameScreen = document.querySelector('#game-container');
        this.endScreen = document.querySelector('#game-end');
        this.displayScore = document.querySelector('#crowns');
        this.displayLives = document.querySelector('#lives');
        this.player = new Player (
            this.gameScreen,
            100, // left
            0, // top
            500, // width
            700, // height
            "../images/drags/drag3.png",
            2, // z-index
            "../audio/RuPaul-supermodel.mp3"
        )
        this.height = "40vh" // 768; 
        this.width = "100vw";
        this.obstacles = [];
        this.score = 0;
        // "../images/icons/crown.png";
        this.lives = 5;
        // "../images/icons/gems.png";
        this.gameOver = false;
    }

    // updateLives() {
    //     const addLives = document.getElementById("lives");
    //     const ul = document.createElement("ul");
    //     addLives.appendChild(ul);
      
    //     addLives.forEach((el) => {
    //       const newLi = document.createElement('li');
          
    //       newLi.innerHTML = el;
    //       newLi.className = "live-item";
    //       ul.appendChild(newLi);
    //     });
    // };
      

    start() {
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'flex';
        // this.updateLives();
        this.gameLoop();
    }

    gameLoop() {
        if(this.gameOver) {
            return;
        } 
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.player.move();
        
    }
    //     if(Math.random() > 0.98 && this.obstacles.length < 8) {
    //         const positiveObstacle = Math.random() > 0.5;
    //         const obstacleImg = positiveObstacle ? "../images/icons/crown.png" : "../images/icons/gems.png";

    //         const obstacle = new Obstacle(this.gameScreen, obstacleImg, positiveObstacle);
    //         this.obstacles.push(obstacle);
    //     }

    //     for(let i = this.obstacles.length -1; i >= 0; i--) {
    //         const obstacle = this.obstacles[i];
    //         obstacle.move();

    //         if(obstacle.top > this.height) {
    //             obstacle.element.remove();
    //             this.obstacles.splice(i, 1);

    //             if(obstacle.positiveObstacle) {
    //                 this.score++;
    //                 this.displayScore.textContent = this.score;
    //             } else {
    //                 this.lives--;
    //                 this.displayLives.textContent = this.lives;

    //                 if(this.lives <= 0) {
    //                     this.endGame()
    //                 }
    //             }
    //         }
    //         if(this.player.didCollide(obstacle)) {
    //             obstacle.element.remove();
    //             this.obstacles.splice(i, 1);

    //             if(obstacle.positiveObstacle) {
    //                 this.score++;
    //                 this.displayScore.textContent = this.score;
    //             } else {
    //                 this.lives--;
    //                 this.displayLives.textContent = this.lives;

    //                 if(this.lives <= 0){
    //                     this.endGame();
    //                 }
    //             }
    //         }
    //     }    
    // }

    // endGame() {
    //     this.player.element.remove();
    //     this.obstacles.forEach(obstacle => obstacle.element.remove());
        
    //     this.gameOver = true;
        
    //     this.gameScreen.style.display = "none";
    //     this.endScreen.style.display = "flex";   
    // }
    
    // sumScore() {
    
    // }

    // updateJump() {}
}