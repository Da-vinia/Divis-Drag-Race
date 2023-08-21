window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    
    startButton.addEventListener("click", function () {
    //   startGame();
        playSoundIntro();
        setTimeout(startGame(), 5000);
        
    });
  
    restartButton.addEventListener('click', function() {
        playSound();
        setTimeout(restartGame(), 6000);
    //   restartGame();
      
    })
  
    function startGame() {
      console.log("start game");
      game = new Game();
  
      game.start();
    }
  
    function restartGame() {
      location.reload();
    }

    function playSoundIntro() {
        let audioIntro = new Audio('../audio/audio-goodluck.mp3');
        audioIntro.play();
    }

    function playSound() {
        let audioBye = new Audio('../audio/audio-lipsync.mp3');
        audioBye.play();
    }

    window.addEventListener("keydown", (event) => {
        console.log(event.key);
        event.preventDefault();
        
        switch (event.key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            break;
          case "ArrowUp":
            if (game.player.isOnGround) {
              game.player.velocityY = -10; // check this value later
              game.player.isOnGround = false;
            }
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
      });

  };