const infoCard = document.querySelector(".infoCard");

const randomNumber = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector(".submit");
const message = document.querySelector(".message");
const hintText = document.querySelector(".hint");
const actionButton = document.querySelector(".action");
const statusGraphics = document.querySelector(".trophy");
const prohibitedSvg = document.querySelector(".prohibitedSvg");
const heartsRow = document.querySelector(".hearts-row");
const parentContainer = document.querySelector(".parentContainer");
let attemptCounter = 0;

submit.onclick = checkNumber;
function checkNumber() {
  let attemptInducator = document.querySelector(".attemptsInducator");
  attemptCounter++;
  attemptInducator.textContent = attemptCounter;
  if (attemptCounter >= 6) {
    parentContainer.style.pointerEvents = "none"
    parentContainer.style.animationName = "fade";
    infoCard.style.marginTop = "0vh";
    prohibitedSvg.style.display = "none";
    infoCard.style.border = "5px solid #ff3d3d";
    message.textContent = "YOU LOSE";
    message.style.fontSize = "2rem";
    infoCard.style.background =
      "linear-gradient(to top right, #4f0000, #e70000)";
    actionButton.textContent = "Play Again";
    statusGraphics.style.display = "none";
    infoCard.style.gap = "70px";
    infoCard.style.transitionDelay = "2000ms";
    heartsRow.style.animationName = "shatter";
    
  }
  const numberInput = document.querySelector(".input");
  const userNumber = Number(numberInput.value);
  hintText.style.animationName = "none";
  void hintText.offsetWidth;
  if (userNumber === randomNumber) {
    infoCard.style.marginTop = "0vh";
    prohibitedSvg.style.display = "none";
  } else if (userNumber > 100) {
    infoCard.style.marginTop = "0vh";
    infoCard.style.background =
      "linear-gradient(to top right, #4f0000, #e70000)";
    actionButton.textContent = "Continue";
    infoCard.style.border = "5px solid #ff3d3d";
    message.textContent = "pleas enter a number between 1-100";
    message.style.fontSize = "1.2rem";
    prohibitedSvg.style.animationName = "spin";
    statusGraphics.innerHTML = ``;

    statusGraphics.style.filter = "drop-shadow 0 0 20px";
    statusGraphics.style.fontWeight = "900";
    actionButton.onclick = function () {
      infoCard.style.marginTop = "200vh";
    };
  } else if (randomNumber <= userNumber) {
    hintText.style.opacity = "1";

    hintText.style.animationName = "vibrate";
    hintText.textContent = "Too High!";
    hintText.style.color = "red";
    hintText.style.webkitTextStroke = "1px  #ff7a7a";
  } else if (randomNumber >= userNumber) {
    hintText.style.opacity = "1";
    hintText.style.animationName = "vibrate";
    hintText.textContent = "Too Low";
    hintText.style.color = "#0098ff";
    hintText.style.webkitTextStroke = "1px #57bafc";
    hintText.style.textShadow = "0 0 10px #00a1ff";
  }
}
