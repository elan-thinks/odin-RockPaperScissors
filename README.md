Updated

# ✊✋✌️ Rock Paper Scissors — JavaScript GUI Game

Welcome to the **Rock Paper Scissors** game — now with a **fun graphical interface**! Choose between battling a friend or challenging the computer. It's fast, interactive, and beautifully animated — perfect for a quick game!

---

## 🎮 Game Modes

🧑‍🤝‍🧑 **Play with a Friend**
🤖 **Play against the Computer**

---

## 🔄 Rounds

Select your match format:

* 🥇 **Single Round**
* 🖐️ **Best of 5 Rounds**

---

## ✨ Features

* 🎨 **User-Friendly Interface** with animated icons
* 👥 **Multiplayer (Friend Mode)** and **Solo Mode (vs Computer)**
* 📈 **Score Tracking** for each player
* ⏱️ **Round Counter** displays your current progress
* 🏆 **Winner Announcement Popup** at the end
* 🔄 **Play Again** button to restart instantly
* 📸 **Live Move Display**: See your choice reflected in real time

---

## 🚀 How to Run

1. Clone or download the repository.
2. Open the `index.html` file in your browser.
3. Choose your opponent and number of rounds.
4. Click your move (rock 🪨, paper 📄, or scissors ✂️).
5. Enjoy the game and check the final result!

---

## 🧠 Behind the Scenes (Code Breakdown)

| Function                               | Description                                        |
| -------------------------------------- | -------------------------------------------------- |
| `playGround(mode)`                     | Initializes the game UI based on the selected mode |
| `startGame(wrapper, box1, box2, mode)` | Sets up the playing area, players, and buttons     |
| `handleClick(choice, isFriendMode)`    | Processes each move and updates the round          |
| `getRoundWinner(p1, p2)`               | Determines who wins the round                      |
| `getComputerChoice()`                  | Randomly generates the computer’s move             |
| `showWinnerNotification(message)`      | Displays the end-game popup with results           |
| `enable/disablePlayerChoices()`        | Manages clickable states of the players' choices   |



## 📁 Folder Structure

```
project-folder/
│
├── index.html
├── style.css
├── game.js
└── images/
    ├── rock.png
    ├── paper.png
    └── scissor.png
```



## 📌 To-Do / Ideas

* ⏳ Add timer-based automatic moves in Computer Mode
* 🎵 Add background sound effects
* 🎨 Allow users to choose avatars or themes


---

## 🙌 Credits

Created with 💖 using **HTML**, **CSS**, and **JavaScript**.


elan-thinks

-
