class Game {    
    constructor() {
        this.startScreen = document.querySelector('#game-intro');
        this.gameScreen = document.querySelector('#game-container');
        this.endScreen = document.querySelector('#game-end');
        this.displayScore = document.querySelector('#crowns');
        this.displayLives = document.querySelector('#lives');
        this.gameAudio = new Audio('../audio/RuPaul-supermodel.mp3');
        // this.gameAudio.loop = true;
        this.player = new Player (
            this.gameScreen,
            100, // left
            400, // top
            500, // width
            700, // height
            "../images/drags/drag3.png",
            2 // z-index
        )
        this.height = "40vh" // 768; 
        this.width = "100vw";
        this.obstacles = [];
        this.obstacleInterval = setInterval(() => {
            const obstacleType = Math.random() < 0.5 ? PositiveObstacle : NegativeObstacle;
            this.obstacles.push(new obstacleType(this.gameScreen));
        }, 3000);
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
        this.gameAudio.play();

        const gameScreen = document.querySelector('#game-container');
        gameScreen.style.display = "flex";

        // setTimeout(() => {
        //     this.gameAudio.pause();
        //     gameScreen.style.display = 'none';
        // }, 8000);
        
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
        // aquí creamos los obstáculos
        if (Math.random() > 0.98 && this.obstacles.length < 100) {  
          const isPositiveObstacle = Math.random() > 0.5;
      
          const obstacle = isPositiveObstacle
            ? new PositiveObstacle(this.gameScreen)
            : new NegativeObstacle(this.gameScreen);
      
          this.obstacles.push(obstacle);
        }
        // aquí el código para eliminar los obstáculos fuera de la pantalla
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
          const obstacle = this.obstacles[i];
          obstacle.move();

          if(obstacle.left > this.gameScreen.offsetWidth) {
            obstacle.element.remove();
            this.obstacles.splice(i, 1);
        
      
            if (obstacle instanceof PositiveObstacle) {
              this.score += 100; 
              this.displayScore.textContent = this.score;
            } else if (obstacle instanceof NegativeObstacle) {
              this.lives--;
              this.displayLives.textContent = this.lives;
      
              if (this.lives <= 0) {
                this.endGame();
              }
            }
          }
          // aquí el código para manejar las colisiones con los obstáculos
          if (this.player.didCollide(obstacle)) {
            obstacle.element.remove();
            this.obstacles.splice(i, 1);
      
            if (obstacle instanceof PositiveObstacle) {
              this.score += 100; 
              this.displayScore.textContent = this.score;
            } else if (obstacle instanceof NegativeObstacle) {
              this.lives--;
              this.displayLives.textContent = this.lives;
      
              if (this.lives <= 0) {
                this.endGame();
              }
            }
          }
        }   
        this.updateScoreImages();
        this.updateLivesImages();

    }

    updateScoreImages() {
        this.displayScore.innerHTML = '';
        for (let i = 0; i < Math.min(this.score / 100, 5); i++) {
        const crownImage = document.createElement('img');
        crownImage.src = '../images/icons/crown.png';
        crownImage.className = 'crown-icon';
        this.displayScore.appendChild(crownImage);
         }
    }

    updateLivesImages() {
        this.displayLives.innerHTML = '';
        for (let i = 0; i < Math.min(this.lives, 5); i++) {
        const gemImage = document.createElement('img');
        gemImage.src = '../images/icons/gems.png';
        gemImage.className = 'gem-icon';
        this.displayLives.appendChild(gemImage);
        }
    }




}
      
          
    

    // endGame() {
    //     this.player.element.remove();
    //     this.obstacles.forEach(obstacle => obstacle.element.remove());
        
    //     this.gameOver = true;
        
    //     this.gameScreen.style.display = "none";
    //     this.endScreen.style.display = "flex";   
    // }
    
    // sumScore() {
    
    // }

   
