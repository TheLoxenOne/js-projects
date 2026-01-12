const infoCard = document.querySelector(".infoCard");
const rightSideHeart3 = document.querySelector(".right-side-heart-3 path");
const leftSideHeart3 = document.querySelector(".left-side-heart-3 path");
const rightSideHeart2 = document.querySelector(".right-side-heart-2 path");
const leftSideHeart2 = document.querySelector(".left-side-heart-2 path");
const rightSideHeart1 = document.querySelector(".right-side-heart-1 path");
const leftSideHeart1 = document.querySelector(".left-side-heart-1 path");
const rightSideHeart4 = document.querySelector(".right-side-heart-4 path");
const leftSideHeart4 = document.querySelector(".left-side-heart-4 path");
let randomNumber = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector(".submit");
const message = document.querySelector(".message");
const hintText = document.querySelector(".hint");
const actionButton = document.querySelector(".action");
const statusGraphics = document.querySelector(".trophy");
const prohibitedSvg = document.querySelector(".prohibitedSvg");
const heartsRow = document.querySelector(".hearts-row");
const parentContainer = document.querySelector(".parentContainer");
const lRange = document.querySelector(".lRange");
const uRange = document.querySelector(".uRange");
let attemptCounter = 0;

submit.onclick = checkNumber;
function checkNumber() {
  let attemptInducator = document.querySelector(".attemptsInducator");
  attemptCounter++;
  attemptInducator.textContent = attemptCounter;
  const numberInput = document.querySelector(".input");
  const userNumber = Number(numberInput.value);
  if (userNumber < randomNumber) {
    lRange.textContent = userNumber;
  } else if (userNumber > 100) {
    uRange.textContent = "100";
  }
  else{
    uRange.textContent = userNumber;
  }
  if (attemptCounter > 8) {
    parentContainer.style.pointerEvents = "none";
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
    infoCard.style.gap = "10px";
    infoCard.style.transitionDelay = "0ms";
    heartsRow.style.animationName = "shatter";
    statusGraphics.textContent = "💀";
    statusGraphics.style.display = "block";
  } 
  else if (attemptCounter === 1) {
    rightSideHeart4.style.animationName = "flash";
  }
   else if (attemptCounter === 2) {
    leftSideHeart4.style.animationName = "flash";
  }
  else if (attemptCounter === 3) {
    rightSideHeart3.style.animationName = "flash";
  } else if (attemptCounter === 4) {
    leftSideHeart3.style.animationName = "flash";
  } else if (attemptCounter === 5) {
    rightSideHeart2.style.animationName = "flash";
  } else if (attemptCounter === 6) {
    leftSideHeart2.style.animationName = "flash";
  } else if (attemptCounter === 7) {
    rightSideHeart1.style.animationName = "flash";
  } else if (attemptCounter === 8) {
    leftSideHeart1.style.animationName = "flash";
  }
   

  hintText.style.animationName = "none";
  void hintText.offsetWidth;
  if (userNumber === randomNumber) {
    infoCard.style.marginTop = "0vh";
    prohibitedSvg.style.display = "none";
    rightSideHeart3.style.animationName = "none";
    leftSideHeart3.style.animationName = "none";
    rightSideHeart2.style.animationName = "none";
    leftSideHeart2.style.animationName = "none";
    rightSideHeart1.style.animationName = "none";
    leftSideHeart1.style.animationName = "none";
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
actionButton.onclick = function () {
  const numberInput = document.querySelector(".input");
  const userNumber = Number(numberInput.value);
  randomNumber = Math.floor(Math.random() * 100 + 1);
  attemptCounter = 0;
   let attemptInducator = document.querySelector(".attemptsInducator");
   attemptInducator.textContent = attemptCounter;
   infoCard.style.marginTop = "200vh"
   parentContainer.style.animationName = "none"
   parentContainer.style.pointerEvents = "auto"
   document.querySelector(".input").value = ""
   rightSideHeart3.style.animationName = "none";
    leftSideHeart3.style.animationName = "none";
    rightSideHeart2.style.animationName = "none";
    leftSideHeart2.style.animationName = "none";
    rightSideHeart1.style.animationName = "none";
    leftSideHeart1.style.animationName = "none";
    rightSideHeart4.style.animationName = "none";
    leftSideHeart4.style.animationName = "none";
    heartsRow.style.animationName = "none"
    void heartsRow.offsetWidth
    hintText.style.opacity = "0"
    lRange.textContent = "1"
    uRange.textContent = "100"
};
window.addEventListener( "keydown", function(e){
  if(e.key === "Enter"){
    if(infoCard.style.marginTop === "0vh"){
      actionButton.click()
    }
    else{
      checkNumber()
    }
  }
})