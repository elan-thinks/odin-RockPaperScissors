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

let nextGame = "y";

while (nextGame.toLowerCase() === "yes" || nextGame.toLowerCase() === "y") {
    let userInput = prompt("👤 Enter your choice (rock, paper, or scissor):").trim().toLowerCase();
   if(userInput !== "rock" || userInput !== "paper" || userInput !=="scissor"){
        userInput = prompt("👤 Only enter from this 3 please (rock, paper, or scissor):").trim().toLowerCase();
   }
    let computerChoice = getComputerChoice();
    let winner = "";

    console.log("🤖 Computer chose:", computerChoice);
    console.log("👤 You chose:", userInput);

    let beats = "";
    function whoBeat() {
        if ((userInput === "rock" && computerChoice === "scissor") ||
            (computerChoice === "rock" && userInput === "scissor")) {
            beats = "🪨 Rock breaks the fragile scissors ✂️";
        } else if ((userInput === "paper" && computerChoice === "rock") ||
                   (computerChoice === "paper" && userInput === "rock")) {
            beats = "📄 Paper wraps itself around the rock 🪨";
        } else if ((userInput === "scissor" && computerChoice === "paper") ||
                   (computerChoice === "scissor" && userInput === "paper")) {
            beats = "✂️ Scissors carve through the paper 📄";
        } else {
            beats = "Well 🤝";
        }
        return beats;
    }

    if (
        (userInput === "rock" && computerChoice === "scissor") ||
        (userInput === "paper" && computerChoice === "rock") ||
        (userInput === "scissor" && computerChoice === "paper")
    ) {
        winner = "🎉 You are the Winner! 🏆";
    } else if (userInput === computerChoice) {
        winner = "😐 It's a Draw!";
    } else {
        winner = "❌ You Lost!";
    }

    console.log(whoBeat());
    console.log(winner);

    // Ask again at the end of the loop
    nextGame = prompt("🔁 Do you want to continue the game? Yes/No (y/n)").trim();
   
}

console.log("👋 Game Over. Thanks for playing!");
