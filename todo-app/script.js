const input = document.querySelector(".input");
const notDone = document.querySelector(".notDone");
const addBtn = document.querySelector("button");
const noTaskMsg = document.querySelector(".noTasksMsg");
addBtn.onclick = () => {
  const inputValue = input.value;
const checkBox = document.createElement("input")
  const taskInput = document.createElement("p");
  const taskContainer = document.createElement("div");
  const textCheckContainer = document.createElement("div")
  const optionsContainer = document.createElement("div");
  optionsContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="4.13" height="16.08" viewBox="0 0 4.13 16.08" preserveAspectRatio="xMidYMid meet">
	<g transform="matrix(1, 0, 0, 1, -144.40858459472656, 289.10760498046875)">
		<ellipse cx="146.47" cy="-287.04" rx="2.06" ry="2.07" style="fill:#FFFFFF;" />
		<ellipse cx="146.47" cy="-280.95" rx="2.06" ry="2.07" style="fill:#FFFFFF;" />
		<ellipse cx="146.47" cy="-275.1" rx="2.06" ry="2.07" style="fill:#FFFFFF;" />
	</g>
</svg>`;

checkBox.setAttribute("type", "checkbox")
optionsContainer.classList.add("options")
  taskContainer.classList.add("taskContainer");
  if (inputValue !== "") {
    
    taskInput.textContent = inputValue;
    taskInput.style.animation = "move 600ms forwards";
    taskContainer.style.animation = "move 650ms forwards";
    notDone.append(taskContainer);
    taskContainer.append(textCheckContainer);
    
    taskContainer.append(optionsContainer);
    input.value = "";
    noTaskMsg.style.display = "none";
noTaskMsg.remove()
    notDone.style.padding = "30px"
    // notDone.style.transition = "padding-top, padding-bottom 500ms ease"
    textCheckContainer.append(checkBox)
    textCheckContainer.append(inputValue)
  } else {
  }
};
