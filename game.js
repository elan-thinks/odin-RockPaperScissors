let pick = "";
let yourScore = 0;
let opponentScore = 0;
let plyr2 = "Computer";

// Main game entry point
let gameType = prompt("🔁 Do you want to play with:\n1. a Friend\n2. The Machine\n(Enter 1 or 2)").trim();
if (gameType === "1") {
    plyr2 = "Your Friend";
    playWithFriend();
} else {
    plyr2 = "Computer";
    playWithComputer();
}

// Game result printer
function playGame(player1, player2) {
    console.log("📊 Final Score — You:", player1, "|", plyr2 + ":", player2);
    if (player1 > player2) {
        console.log("🏆 Congrats! You won the game.");
    } else if (player1 < player2) {
        console.log("😢 You lost the game. Try again!");
    } else {
        console.log("🤝 It's a draw! Good game.");
    }
}

// Choice randomizer
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissor"][random];
}

// Valid input check
function isValidChoice(choice) {
    return ["rock", "paper", "scissor"].includes(choice);
}

// Player vs Friend
function playWithFriend() {
    yourScore = 0;
    opponentScore = 0;

    let mode = prompt("📍 Do you want to play:\n1. Just one round\n2. 5-round game\n(Enter 1 or 2)").trim();
    let rounds = mode === "2" ? 5 : 1;

    for (let i = 1; i <= rounds; i++) {
        console.log(`🎮 Round ${i} of ${rounds}`);

        let user1 = prompt("👤 You - Enter your choice (rock, paper, or scissor):").trim().toLowerCase();
        while (!isValidChoice(user1)) {
            user1 = prompt("❗ You - Only choose from (rock, paper, scissor):").trim().toLowerCase();
        }

        let user2 = prompt("👤 Your Friend - Enter your choice (rock, paper, or scissor):").trim().toLowerCase();
        while (!isValidChoice(user2)) {
            user2 = prompt("❗ Your Friend - Only choose from (rock, paper, scissor):").trim().toLowerCase();
        }

        const result = getRoundWinner(user1, user2);

        console.log("👤 You chose:", user1);
        console.log("👤 Your Friend  chose:", user2);
        console.log(result.beats);
        console.log(result.winnerText);

        if (result.winner === "player1") yourScore++;
        else if (result.winner === "player2") opponentScore++;
    }

    playGame(yourScore, opponentScore);
}

// Player vs Computer
function playWithComputer() {
    yourScore = 0;
    opponentScore = 0;

    let mode = prompt("📍 Do you want to play:\n1. Just one round\n2. 5-round game\n(Enter 1 or 2)").trim();
    let rounds = mode === "2" ? 5 : 1;

    for (let i = 1; i <= rounds; i++) {
        console.log(`🎮 Round ${i} of ${rounds}`);

        let userInput = prompt("👤 Enter your choice (rock, paper, or scissor):").trim().toLowerCase();
        while (!isValidChoice(userInput)) {
            userInput = prompt("❗ Only enter from these 3 please (rock, paper, or scissor):").trim().toLowerCase();
        }

        let computerChoice = getComputerChoice();

        console.log("🤖 Computer chose:", computerChoice);
        console.log("👤 You chose:", userInput);

        const result = getRoundWinner(userInput, computerChoice);
        console.log(result.beats);
        console.log(result.winnerText);

        if (result.winner === "player1") yourScore++;
        else if (result.winner === "player2") opponentScore++;
    }

    playGame(yourScore, opponentScore);
}

// Winner logic with return values
function getRoundWinner(p1, p2) {
    let beats = "";
    let winnerText = "";
    let winner = "";

    if ((p1 === "rock" && p2 === "scissor") || (p2 === "rock" && p1 === "scissor")) {
        beats = "🪨 Rock breaks the fragile scissors ✂️";
    } else if ((p1 === "paper" && p2 === "rock") || (p2 === "paper" && p1 === "rock")) {
        beats = "📄 Paper wraps the rock 🪨";
    } else if ((p1 === "scissor" && p2 === "paper") || (p2 === "scissor" && p1 === "paper")) {
        beats = "✂️ Scissors carve through the paper 📄";
    } else {
        beats = "🤝 Owww! It's a draw!";
    }

    if (
        (p1 === "rock" && p2 === "scissor") ||
        (p1 === "paper" && p2 === "rock") ||
        (p1 === "scissor" && p2 === "paper")
    ) {
        winner = "player1";
        winnerText = "🎉 You win this round!";
    } else if (p1 === p2) {
        winner = "draw";
        winnerText = "😐 It's a Draw!";
    } else {
        winner = "player2";
        winnerText = "❌ " + plyr2 + " wins this round!";
    }

    return { beats, winnerText, winner };
}
