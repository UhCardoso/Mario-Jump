function playGame() {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const clouds = document.querySelector('.clouds');
    const gameOverBox = document.querySelector('.game-over-box');
    const gameAudio = document.querySelector('.audioGame');
    const gameBoard = document.querySelector('.game-board');
    const startGameButton = document.querySelector('.start-game-button');

    gameAudio.play();
    gameBoard.removeAttribute('hidden');
    startGameButton.setAttribute('hidden', '');

    const jump = () => {
        const audioJump = new Audio('./audios/jump.mp3');
        audioJump.play()

        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
            audioJump.pause();
            audioJump.currentTime = 0;
        }, 500)
    }

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudsPosition = clouds.offsetLeft;
    
        if(pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {
            gameOverBox.removeAttribute('hidden');
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;
    
            mario.src = "./imagens/game-over.png";
            mario.style.width = "75px";
            mario.style.marginLeft = "50px";
    
            clearInterval(loop);
            const audioColision = new Audio('./audios/colision.mp3');
            audioColision.play();
    
            const audioGameOver = new Audio('./audios/game-over.mp3');
            audioGameOver.play()
            audioGameOver.loop = true;

            gameAudio.pause();
        }
        
    }, 10);

    document.addEventListener('keydown', jump);
}

function refreshPage() {
    window.location.reload(true);
}