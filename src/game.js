class Game {    
    constructor() {
        this.startScreen = document.querySelector('#game-intro');
        this.gameScreen = document.querySelector('#game-container');
        this.endScreen = document.querySelector('#game-end');
        this.displayScore = document.querySelector('#crowns');
        this.displayLives = document.querySelector('#lives');
        this.gameAudio = new Audio('../audio/RuPaul-supermodel.mp3');
        this.displayWinner = document.querySelector('#congrats');
        this.player = new Player (
            this.gameScreen,
            100, // left
            400, // top
            500, // width
            700, // height
            "../images/drags/drag3.png",
            2 // z-index
        )
        this.player.speed = 3;
        this.height = "40vh"; // 768; 
        this.width = "100vw";
        this.obstacles = [];
        this.obstacleSpeed = 1;
        this.score = 0;
        this.lives = 5;
        this.gameOver = false;
    }
      
    start() {
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'flex';
        this.displayWinner.style.display = 'none';
      
        this.gameLoop();
        this.gameAudio.play();

        const gameScreen = document.querySelector('#game-container');
        gameScreen.style.display = "flex";
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
        
        if (Math.random() > 0.98 && this.obstacles.length < 1) {  
            const isPositiveObstacle = Math.random() > 0.5;
            const obstacle = isPositiveObstacle
              ? new PositiveObstacle(this.gameScreen)
              : new NegativeObstacle(this.gameScreen);
               this.obstacles.push(obstacle);
            
        }
          if (this.obstacles.length === 1) {
            const obstacle = this.obstacles[0]
            console.log(obstacle)
            if(obstacle.left < 700) {
                const isPositiveObstacle = Math.random() > 0.5;
        
            const obstacle = isPositiveObstacle
              ? new PositiveObstacle(this.gameScreen)
              : new NegativeObstacle(this.gameScreen);
              this.obstacles.push(obstacle);
            }
        }

        for (let i = this.obstacles.length - 1; i >= 0; i--) {
          const obstacle = this.obstacles[i];
          obstacle.move(this.obstacleSpeed);

        
            if(obstacle.left > this.gameScreen.offsetWidth) {
            obstacle.element.remove();
            this.obstacles.splice(i, 1);
            }
          
          if (this.player.didCollide(obstacle)) {
            obstacle.element.remove();
            this.obstacles.splice(i, 1);
      
            if (obstacle instanceof PositiveObstacle) {
              this.score += 1; 
              this.displayScore.textContent = this.score;
            } else if (obstacle instanceof NegativeObstacle) {
              this.lives--;
              this.displayLives.textContent = this.lives;
      
              if (this.lives <= 0) {
                this.endGame();
              } else if (this.score === 5) {
                this.winner();
              }
            }
          }
        }   
        this.updateScoreImages();
        this.updateLivesImages();

    }

    updateScoreImages() {
        this.displayScore.innerHTML = '';
        for (let i = 0; i < Math.min(this.score / 1, 5); i++) {
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

    endGame() {
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());
        console.log("VIDASSSSSS", this.lives)
        this.gameOver = true;
        
        this.gameScreen.style.display = "none";
        this.endScreen.style.display = "flex";   
        this.gameAudio.pause();
    }

    winner() {
        this.gameOver = true;
        console.log("winner!")
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());
            
            
        this.gameScreen.style.display = "none";
        this.displayWinner.style.display = 'block';   
        this.gameAudio.pause();          
    } 
}
   
