// Click Effect
document.addEventListener("click", (event) => {
    const box = document.createElement("div");
    box.classList.add("click_box");

    box.style.left = event.clientX + "px";
    box.style.top = event.clientY + "px";

    document.body.appendChild(box);

    box.addEventListener("animationend", () => {
        box.remove();
    });
});

// Minigame

// Title Screen
const gameBackground = document.getElementById("minigame_background");
const gameButton = document.getElementById("minigame_button");
const gameLogo = document.getElementById("minigame_logo");
const gameTitle = document.getElementById("minigame_title");

// Game UI
const timerDisplay = document.getElementById("minigame_timer");
const scoreDisplay = document.getElementById("minigame_score");
const scoreLogo = document.getElementById("counter_logo");
timerDisplay.style.display = "none";
scoreDisplay.style.display = "none";
scoreLogo.style.display = "none";

// Pokemon
const charmander = document.getElementById("pokemon");
charmander.style.display = "none";

// Game Variables
let time = 30;
let score = 0;
let spawnInterval;

// Clicking Play
gameButton.addEventListener("click", (event) => {
    gameLogo.style.display = "none";
    gameButton.style.display = "none";

    startGame();
})

// Start Game
function startGame() {
    timerDisplay.style.display = "block";
    scoreDisplay.style.display = "block";
    scoreLogo.style.display = "block";

    score = 0;
    time = 30;

    if (gameButton.textContent = "Again?" && spawnInterval >= 500) {
        spawnInterval *= 0.9;
    } else {
        spawnInterval = 1000;
    }

    scoreDisplay.textContent = score;
    timerDisplay.textContent = time;

    // Timer Countdown
    const timerCountdown = setInterval(() => {
        if (time > 0) {
            time--;
            timerDisplay.textContent = time;
        } else {
            clearInterval(timerCountdown);
            endGame();
        }
    }, 800);

    // Spawning Charmander
    const pokemonSpawn = setInterval(() => {
        if (time > 0) {
            charmander.style.display = "none";

            charmander.style.left = (Math.floor(Math.random() * (gameBackground.clientWidth - 100))) + "px";
            charmander.style.top = (Math.floor(Math.random() * (gameBackground.clientHeight - 100))) + "px";
            charmander.style.transform = "rotate(" + (Math.floor(Math.random() * 360)) + "deg)";

            charmander.style.display = "block";
        } else {
            clearInterval(pokemonSpawn);
        }
    }, spawnInterval);
}

// "Whacking" Charmander
charmander.addEventListener("click", (event) => {
    score++;
    scoreDisplay.textContent = score;

    charmander.style.display = "none";
})

// End Game
function endGame() {
    charmander.style.display = "none";
    timerDisplay.style.display = "none";

    gameLogo.style.display = "block";
    gameButton.style.display = "block";
    gameButton.textContent = "Again?"
}