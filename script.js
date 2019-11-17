let pscore = 0;
let cscore = 0;
const paper = document.getElementById('paper').addEventListener('click', playPaper);
const rock = document.getElementById('rock').addEventListener('click', playRock);
const scissors = document.getElementById('scissors').addEventListener('click', playScissors);

function computerPlay() {
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRock() {
    playRound("rock", undefined);
}
function playPaper() {
    playRound("paper", undefined);
}
function playScissors() {
    playRound("scissors", undefined);
}

function playRound(player, computer) {
    computer = computerPlay();

    document.getElementById('status').innerHTML = `Player chooses ${player} and Computer chooses ${computer}!`;

    if (player === computer) {
        document.getElementById('status').innerHTML += "<p>It's a draw!</p>"
    }
    if (player === "rock") {
        if (computer === "scissors") {
            playerWins();
            pscore++;
        } else if (computer === "paper") {
            computerWins();
            cscore++;
        }
    }
    if (player === "paper") {
        if (computer === "rock") {
            playerWins();
            pscore++;
        } else if (computer === "scissors") {
            computerWins();
            cscore++;
        }
    }
    if (player === "scissors") {
        if (computer === "paper") {
            playerWins();
            pscore++;
        } else if (computer === "rock") {
            computerWins();
            cscore++;
        }
    }
    document.getElementById('pscore').innerHTML = pscore;
    document.getElementById('cscore').innerHTML = cscore;

    if (pscore === 5) {
        document.getElementById('status').innerHTML += "<br><p>Player wins round</p>";
        pscore = 0;
        cscore = 0;
    } else if (cscore === 5) {
        document.getElementById('status').innerHTML += "<br><p>Computer wins round</p>";
        pscore = 0;
        cscore = 0;
    }
}


function playerWins() {
    document.getElementById('status').innerHTML += "<p>You win!</p>"
}

function computerWins() {
    document.getElementById('status').innerHTML += "<p>Computer wins!</p>"
}
