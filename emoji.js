const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

  let currentEmojiIndex = 0;
  let score = 0;
  let seconds = 3;
  let timer;
  //let restartbtn;
  

  const timerElement = document.getElementById('timer');
  const guessInput = document.getElementById("guess-input");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const restartBtn = document.getElementById('restartBtn');
  
  // restart eventListener
  restartBtn.addEventListener('click', restartGame);


  function displayEmoji() {
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timerElement.textContent = `Timer: ${seconds}`;
    // startTimer();
  }

  function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.textContent = "Wrong!";
    }
    console.log(score);
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = "";
    guessInput.focus();
    nextEmoji();
  }

  function nextEmoji() {
    currentEmojiIndex++;
    setTimeout(() => {
      resultElement.textContent = "";
    }, 1000);

    if (currentEmojiIndex === emojiDetails.length) {
      currentEmojiIndex = 0;
      //score=0;
    }

    displayEmoji();
    // startTimer();
  }

  document
    .getElementById("guess-input")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkGuess();
      }
    });

  document.addEventListener("DOMContentLoaded", () => {
    displayEmoji();
    startTimer();
  });

  function startTimer(){
    timer = setInterval(() => {
      seconds--;
      timerElement.textContent = `Timer: ${seconds}`;

      if(seconds <= 0){
        endGame();
        setTimeout(() => {
          restartBtn.addEventListener('click', restartGame);
        }, 500);
      }
    }, 1000);
  }

  function endGame(){
    clearInterval(timer);
    guessInput.disabled = true;
    timerElement.textContent = "Game Over!!";
    restartBtn.style.display = "block";
  }

 //restart btn
function restartGame() {
  clearInterval(timer);     
  seconds = 30;                     
  timerElement.textContent = `Score: ${seconds}`;
  guessInput.disabled = false; 
  restartBtn.style.display = "none";
  startTimer();                     
}



