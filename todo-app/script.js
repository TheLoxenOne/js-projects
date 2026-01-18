const input = document.querySelector(".input");
const notDone = document.querySelector(".notDone");
const done = document.querySelector(".done");
const addBtn = document.querySelector(".add");
const noTaskMsg = document.querySelector(".noTasksMsg");
const doneTasks = document.querySelector(".doneTasks");
addBtn.onclick = () => {
  const inputValue = input.value;

  const taskInput = document.createElement("p");
  const taskContainer = document.createElement("div");
  const textCheckContainer = document.createElement("div");
  const optionsContainer = document.createElement("div");
  optionsContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="4.13" height="16.08" viewBox="0 0 4.13 16.08" preserveAspectRatio="xMidYMid meet">
	<g transform="matrix(1, 0, 0, 1, -144.40858459472656, 289.10760498046875)">
		<ellipse cx="146.47" cy="-287.04" rx="2.06" ry="2.07" style="fill:#FFFFFF;" />
		<ellipse cx="146.47" cy="-280.95" rx="2.06" ry="2.07" style="fill:#FFFFFF;" />
		<ellipse cx="146.47" cy="-275.1" rx="2.06" ry="2.07" style="fill:#FFFFFF;" />
	</g>
</svg>`;
  const checkTickBox = document.createElement("div");
  const checkTickMark = document.createElement("span");
  checkTickBox.classList.add("checkTickBox");
  checkTickMark.classList.add("checkTickMark");
  textCheckContainer.classList.add("textCheckContainer");
  optionsContainer.classList.add("options");
  taskContainer.classList.add("taskContainer");
  checkTickBox.classList.add("checkTickBox");
  checkTickMark.classList.add("checkTickMark");
  checkTickMark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0
  0 27.2 23.86" preserveAspectRatio="xMidYMid meet">
	<defs>
		<filter id="filter_1" style="color-interpolation-filters:sRGB" primitiveUnits="userSpaceOnUse" x="-0.265" y="-0.329" width="1.529" height="1.659">
			<feGaussianBlur in="SourceAlpha" stdDeviation="1.65" />
			<feOffset dx="0" dy="0" />
			<feColorMatrix type="matrix" values="0 0 0 0 0.36 0 0 0 0 1 0 0 0 0 0 0 0 0 0.45 0" result="dropShadow_1" />
			<feComposite in="SourceGraphic" in2="dropShadow_1" operator="over" result="Layer1" />
		</filter>
	</defs>
	<path d="M5.1,12.28 L9.93,18.76 L22.1,5.1" fill-rule="evenodd"
	style="fill:#6B6B6B00;stroke:#5BFF00;stroke-linecap:round;stroke-linejoin:round;stroke-width:4;filter:url(#filter_1)"
	/>
</svg>`;
  if (inputValue !== "") {
    textCheckContainer.append(checkTickBox);
    checkTickBox.append(checkTickMark);
    textCheckContainer.append(taskInput);
    taskInput.textContent = inputValue;
    // taskInput.style.animation = "move 600ms forwards";
    taskContainer.style.animation = "move 650ms forwards";
    notDone.append(taskContainer);
    taskContainer.append(textCheckContainer);

    taskContainer.append(optionsContainer);
    input.value = "";

    checkTickBox.onclick = () => {
      const path = checkTickMark.querySelector("path");

      path.style.animation = "draw 600ms ease-in forwards";
      setTimeout(() => {
        done.append(taskContainer);
        done.style.padding = "30px";
        notDone.style.padding = "30px";
        doneTasks.remove();
      }, 800);

      
      taskContainer.style.animationDelay = "0ms";
    };
    noTaskMsg.remove();
    notDone.style.padding = "30px";
    // notDone.style.transition = "padding-top, padding-bottom 500ms ease"
  } else {
  }
};
