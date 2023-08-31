window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const restartButtonWinner = document.getElementById('restart-button-winner');
    
    startButton.addEventListener("click", function () {
        playSoundIntro();
    
        setTimeout(function () {
            startGame();
        }, 5000);
    });
  
    restartButton.addEventListener('click', function() {
        playSound();
        
        setTimeout(function () {
            restartGame();
        }, 6000);  
    });

    restartButtonWinner.addEventListener('click', function() {
        playSoundStay();
        setTimeout(function () {
            restartGame();
        }, 6000);
    });
  
    function startGame() {
      console.log("start game");
      game = new Game();
  
      game.start();
    }
  
    function restartGame() {
      location.reload();
    }

    function playSoundIntro() {
        let audioIntro = new Audio('../assets/audios/audio-goodluck.mp3');
        audioIntro.play();
    }

    function playSound() {
        let audioBye = new Audio('../assets/audios/audio-lipsync.mp3');
        audioBye.play();
    }

    function playSoundStay() {
        let audioShantayStay = new Audio('../assets/audios/shantay-you-stay.mp3');
        audioShantayStay.play();
    }


    window.addEventListener("keydown", (event) => {
        event.preventDefault();
        
        switch (event.key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            break;
          case "ArrowUp":
            game.player.jump();
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
      });

  };