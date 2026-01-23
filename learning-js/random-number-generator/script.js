const pressParticle = document.getElementById("pressParticle")
const generateBtn = document.querySelector(".generateBtn")
generateBtn.onclick = () => {
  pressParticle.stop()
  pressParticle.play()
}