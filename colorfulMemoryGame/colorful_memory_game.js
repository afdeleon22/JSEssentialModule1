const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

 function generateCards() {
           for (const color of cards) {
               const card = document.createElement('div');
               card.classList.add('card');
               card.dataset.color = color;
               card.textContent = '?';
               gameContainer.appendChild(card);
           }
       }

function startGame() {
            let timeLeft = 30;
            startbtn.disabled = true;
            score = 0; // Reset score to zero
            scoreElement.textContent = `Score: ${score}`;
            startGameTimer(timeLeft);
            cards = shuffle(colors.concat(colors));
            selectedCards = [];
            gameContainer.innerHTML = '';
            generateCards();
            gameContainer.addEventListener('click', handleCardClick);
        }

function startGameTimer(timeLeft) {
            timerElement.textContent = `Time Left: ${timeLeft}`;
            gameInterval = setInterval(() => {
                timeLeft--;
                timerElement.textContent = `Time Left: ${timeLeft}`;

                if (timeLeft === 0) {
                    clearInterval(gameInterval);
                    let timeLeft = 30;
                    alert('Game Over!');
                    startbtn.disabled = false;
                }
            }, 1000);
        }

   startbtn.addEventListener('click', startGame);