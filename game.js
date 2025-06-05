let pick = "";

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        pick = "rock";
    } else if (random === 2) {
        pick = "paper";
    } else {
        pick = "scissor";
    }
    return pick;
}

let gameType = prompt("🔁 Do you want to play with:\n1. a Friend\n2. The Machine\n(Enter 1 or 2)").trim();

if (gameType === "1") {
    playWithFriend();
} else {
    playWithComputer();
}

function isValidChoice(choice) {
    return ["rock", "paper", "scissor"].includes(choice);
}

function playWithFriend() {
    let nextGame = "y";
    while (nextGame.toLowerCase() === "yes" || nextGame.toLowerCase() === "y") {
        let user1 = prompt("👤 Friend 1 - Enter your choice (rock, paper, or scissor):").trim().toLowerCase();
        while (!isValidChoice(user1)) {
            user1 = prompt("❗ Friend 1 - Only choose from (rock, paper, scissor):").trim().toLowerCase();
        }

        let user2 = prompt("👤 Friend 2 - Enter your choice (rock, paper, or scissor):").trim().toLowerCase();
        while (!isValidChoice(user2)) {
            user2 = prompt("❗ Friend 2 - Only choose from (rock, paper, scissor):").trim().toLowerCase();
        }

        console.log("👤 Friend 1 chose:", user1);
        console.log("👤 Friend 2 chose:", user2);

        displayResult(user1, user2);

        nextGame = prompt("🔁 Play again? Yes/No (y/n)").trim();
    }

    console.log("👋 Game Over. Thanks for playing!");
}

function playWithComputer() {
    let nextGame = "y";

    while (nextGame.toLowerCase() === "yes" || nextGame.toLowerCase() === "y") {
        let userInput = prompt("👤 Enter your choice (rock, paper, or scissor):").trim().toLowerCase();
        while (!isValidChoice(userInput)) {
            userInput = prompt("❗ Only choose from (rock, paper, or scissor):").trim().toLowerCase();
        }

        let computerChoice = getComputerChoice();

        console.log("🤖 Computer chose:", computerChoice);
        console.log("👤 You chose:", userInput);

        displayResult(userInput, computerChoice);

        nextGame = prompt("🔁 Play again? Yes/No (y/n)").trim();
    }

    console.log("👋 Game Over. Thanks for playing!");
}

function displayResult(p1, p2) {
    let beats = "";
    if ((p1 === "rock" && p2 === "scissor") || (p2 === "rock" && p1 === "scissor")) {
        beats = "🪨 Rock breaks the fragile scissors ✂️";
    } else if ((p1 === "paper" && p2 === "rock") || (p2 === "paper" && p1 === "rock")) {
        beats = "📄 Paper wraps the rock 🪨";
    } else if ((p1 === "scissor" && p2 === "paper") || (p2 === "scissor" && p1 === "paper")) {
        beats = "✂️ Scissors carve through the paper 📄";
    } else {
        beats = "Owww ! 🤝";
    }

    let winner = "";
    if (
        (p1 === "rock" && p2 === "scissor") ||
        (p1 === "paper" && p2 === "rock") ||
        (p1 === "scissor" && p2 === "paper")
    ) {
        winner = "🎉 First Player wins! 🏆";
    } else if (p1 === p2) {
        winner = "😐 It's a Draw!";
    } else {
        winner = "🎉 Second Player wins! 🏆";
    }

    console.log(beats);
    console.log(winner);
}
