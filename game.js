let FriendMode = false;
let machineMode = false;
let mode;
let firstPlayer = 1;
let secondPlayer = 0;
let clicked1 = "";
let clicked2 = "";
let yourScore = 0;
let opponentScore = 0;
let rounds = 0;
let countRounds = 0;

function playGround(mode) {
  const min = document.querySelector('#window');
  min.remove();

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const roundChoose = document.createElement("div");
  roundChoose.className = "roundChoose";

  roundChoose.innerHTML = `
    <h2>Choose Game Round</h2>
    <button id="one">One</button>
    <button id="five">Five</button>
  `;

  const box1 = document.createElement("div");
  const box2 = document.createElement("div");

  box1.className = "box1";
  box2.className = "box2";

  box1.innerHTML = `
     <div class="p1Div">
         <img src="./images/rock.png" alt="" class="img1" id="p1-image">
     </div>
     <div class="p2Div">
         <img src="./images/rock.png" alt="" class="img1" id="p2-image">
     </div>
  `;

  box2.innerHTML = `
    <div class="round"><span id="round">Round:</span></div>
    <div class="players">
      <div id="containerLeft">    
        <span id="player1"></span>
        <span id="count1">0</span>
        <img src="./images/rock.png" alt="" id="rockClicked-p1">
         <img src="./images/paper.png" alt="" id="paperClicked-p1">
         <img src="./images/scissor.png" alt="" id="scissorClicked-p1">
    
      </div>
      <div id="containerRight">
        <span id="player2"></span>
        <span id="count2">0</span>
        <img src="./images/rock.png" alt="" id="rockClicked-p2">
         <img src="./images/paper.png" alt="" id="paperClicked-p2">
         <img src="./images/scissor.png" alt="" id="scissorClicked-p2">
    
      </div>
    </div>
  `;
  

  wrapper.append(roundChoose);
  document.querySelector('.container').appendChild(wrapper);

  const round1 = document.getElementById('one');
  const round5 = document.getElementById('five');

  round1.addEventListener('click', () => {
    rounds = 1;
    roundChoose.remove();
    startGame(wrapper, box1, box2, mode);
  });

  round5.addEventListener('click', () => {
    rounds = 5;
    roundChoose.remove();
    startGame(wrapper, box1, box2, mode);
  });
}

function startGame(wrapper, box1, box2, mode) {
  wrapper.appendChild(box1);
  wrapper.appendChild(box2);

  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');

  if (mode) {
    FriendMode = true;
    player1.innerText = "Player - 1 :  ";
    player2.innerText = "Player - 2 :  ";
    enablePlayer1Choices();
    disablePlayer2Choices();
  } else {
    machineMode = true;
    player1.innerText = "You";
    player2.innerText = "Machine";
  }

  const rock1 = document.getElementById('rockClicked-p1');
  const paper1 = document.getElementById('paperClicked-p1');
  const scissor1 = document.getElementById('scissorClicked-p1');

  const rock2 = document.getElementById('rockClicked-p2');
  const paper2 = document.getElementById('paperClicked-p2');
  const scissor2 = document.getElementById('scissorClicked-p2');

  // Add event listeners
  rock1.addEventListener('click', () => handleClick("rock", mode));
  paper1.addEventListener('click', () => handleClick("paper", mode));
  scissor1.addEventListener('click', () => handleClick("scissor", mode));

  if (mode) {
    // In friend mode allow player 2 to click
    rock2.addEventListener('click', () => handleClick("rock", mode));
    paper2.addEventListener('click', () => handleClick("paper", mode));
    scissor2.addEventListener('click', () => handleClick("scissor", mode));
  }
}

function handleClick(choice, isFriendMode) {
  if (countRounds >= rounds) return;
  const gameRound = document.getElementById('round');
  gameRound.innerText='Round '+ (countRounds+1);
  
  if (isFriendMode) {
    if (firstPlayer % 2 === 1) {
      clicked1 = choice;
      console.log("Player 1 chose:", choice);
      firstPlayer++;
      disablePlayer1Choices();
      enablePlayer2Choices();
    } else {

      clicked2 = choice;
      console.log("Player 2 chose:", choice);
      disablePlayer2Choices();

      // Update displayed images
  document.getElementById("p1-image").src = `./images/${clicked1}.png`;
  document.getElementById("p2-image").src = `./images/${clicked2}.png`;

      const result = getRoundWinner(clicked1, clicked2);
      handleResult(result);
      enablePlayer1Choices();
      firstPlayer++;
      countRounds++;
    }
  } else {
    const machineChoice = getComputerChoice();
    const result = getRoundWinner(choice, machineChoice);
    handleResult(result);
    countRounds++;
  }

  if (countRounds === rounds) {
    const winner =
      yourScore > opponentScore
        ? isFriendMode ? "Player 1 wins!" : "You win!"
        : yourScore < opponentScore
        ? isFriendMode ? "Player 2 wins!" : "Computer wins!"
        : "It's a draw!";
    showWinnerNotification(winner);
  }
}

function handleResult(result) {
  console.log(result.beats + "\n" + result.winnerText);
  if (result.winner === "player1") yourScore++;
  if (result.winner === "player2") opponentScore++;

  document.getElementById('count1').innerText = yourScore;
  document.getElementById('count2').innerText = opponentScore;
}

function showWinnerNotification(message) {
  const container = document.querySelector(".container");
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const popup = document.createElement("div");
  popup.className = "winner-popup";

  popup.innerHTML = `
    <h2>${message}</h2>
    <button id="playAgain">Play Again</button>
  `;

  overlay.appendChild(popup);
  container.appendChild(overlay);

  document.getElementById("playAgain").addEventListener("click", () => {
    location.reload();
  });
}

function disablePlayer1Choices() {
    document.getElementById('rockClicked-p1').style.pointerEvents = "none";
    document.getElementById('paperClicked-p1').style.pointerEvents = "none";
    document.getElementById('scissorClicked-p1').style.pointerEvents = "none";
  }
  
  function enablePlayer1Choices() {
    document.getElementById('rockClicked-p1').style.pointerEvents = "auto";
    document.getElementById('paperClicked-p1').style.pointerEvents = "auto";
    document.getElementById('scissorClicked-p1').style.pointerEvents = "auto";
  }
  
  function disablePlayer2Choices() {
    document.getElementById('rockClicked-p2').style.pointerEvents = "none";
    document.getElementById('paperClicked-p2').style.pointerEvents = "none";
    document.getElementById('scissorClicked-p2').style.pointerEvents = "none";
  }
  
  function enablePlayer2Choices() {
    document.getElementById('rockClicked-p2').style.pointerEvents = "auto";
    document.getElementById('paperClicked-p2').style.pointerEvents = "auto";
    document.getElementById('scissorClicked-p2').style.pointerEvents = "auto";
  }
  

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * 3)];
}

function getRoundWinner(p1, p2) {
  let beats = "", winnerText = "", winner = "";

  if (p1 === p2) {
    beats = "🤝 It's a draw!";
    winner = "draw";
    winnerText = "😐 It's a Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissor") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissor" && p2 === "paper")
  ) {
    beats = `${p1} beats ${p2}`;
    winner = "player1";
    winnerText = "🎉 Player 1 wins this round!";
  } else {
    beats = `${p2} beats ${p1}`;
    winner = "player2";
    winnerText = "❌ Player 2 wins this round!";
  }

  return { beats, winnerText, winner };
}
