const numberInput = document.querySelector(".input");
const infoCard = document.querySelector(".infoCard")
const randomNumber = 63;
const submit = document.querySelector(".submit")
submit.onclick = checkNumber
function checkNumber() {
  if (Number(numberInput.value) === randomNumber) {
infoCard.style.marginTop = "0vh"
}
}

