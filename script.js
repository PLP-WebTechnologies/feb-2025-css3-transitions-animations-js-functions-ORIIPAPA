document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("box");
  const animateBtn = document.getElementById("animateBtn");
  const saveBtn = document.getElementById("saveBtn");
  const colorPicker = document.getElementById("colorPicker");

  // Load saved color from localStorage
  const savedColor = localStorage.getItem("boxColor");
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }

  // Save color to localStorage
  saveBtn.addEventListener("click", () => {
    const color = colorPicker.value;
    localStorage.setItem("boxColor", color);
    box.style.backgroundColor = color;
    alert("Color saved!");
  });

  // Animate box on button click
  animateBtn.addEventListener("click", () => {
    box.classList.add("animate");
    setTimeout(() => box.classList.remove("animate"), 600);
  });
});
