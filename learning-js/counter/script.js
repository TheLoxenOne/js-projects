const counterTxt = document.querySelector(".counterTxt")
const number = document.querySelector(".number")
const minusBtn = document.querySelector(".minusBtn")
const restBtn = document.querySelector(".restBtn")
const plusBtn = document.querySelector(".plusBtn")
let counter = 0
plusBtn.onclick =  function(){
  
  counter++
  number.textContent = counter
}
restBtn.onclick = function(){
 counter = 0
  number.textContent = 0
}
minusBtn.onclick = function(){
  
  counter--
  number.textContent = counter
}