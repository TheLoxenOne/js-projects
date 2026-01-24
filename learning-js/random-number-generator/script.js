const pressParticle = document.getElementById("pressParticle");
const generateBtn = document.querySelector(".generateBtn");
const min = document.querySelector(".toNumberContainer");
const max = document.querySelector(".fromNumberContainer");

if (generateBtn) {
  generateBtn.onclick = () => {
    pressParticle.stop();
    pressParticle.play();
    const randomNum =
      Math.floor(Math.random() * (Number(max.value) - Number(min.value))) +
      Number(min.value);
    document.querySelector(".number").textContent = randomNum;
    document.querySelector(".number").style.display = "block";
    
  };
}

console.log(randomNum);
