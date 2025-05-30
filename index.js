const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const htmlElement = document.documentElement;
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
if (localStorage.getItem("theme") === "dark") {
  htmlElement.setAttribute("data-bs-theme", "dark");
  sunIcon.classList.add("d-none");
  moonIcon.classList.remove("d-none");
}
themeToggleBtn.addEventListener("click", () => {
  if (htmlElement.getAttribute("data-bs-theme") === "light") {
    htmlElement.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
    sunIcon.classList.add("d-none");
    moonIcon.classList.remove("d-none");
  } else {
    htmlElement.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
    sunIcon.classList.remove("d-none");
    moonIcon.classList.add("d-none");
  }
});

function startAnimation() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "start_animation",
    button_name: "Click",
  });

  const button = document.querySelector(".js-start-button");
  button.disabled = true;

  let countdown = 3;
  button.textContent = countdown;

  const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      button.textContent = countdown;
    } else {
      button.textContent = "Click again!";
      button.disabled = false;
      clearInterval(interval);
    }
  }, 1000);

  const container = document.querySelector(".animation-container");
  container.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    const size = Math.random() * 50 + 20;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    const hue = Math.floor(Math.random() * 360);
    const saturation = 100;
    const lightness = Math.floor(Math.random() * 20) + 40;
    circle.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;
    circle.style.left = `${Math.random() * maxX}px`;
    circle.style.top = `${Math.random() * maxY}px`;

    container.appendChild(circle);

    let velocityY = -10 - Math.random() * 5;
    const gravity = 0.5;
    const bounce = 0.7;

    function animate() {
      let top = parseFloat(circle.style.top);
      top += velocityY;
      velocityY += gravity;

      if (top >= maxY) {
        top = maxY;
        velocityY *= -bounce;
      }

      if (top <= 0) {
        top = 0;
        velocityY *= -bounce;
      }

      circle.style.top = `${top}px`;

      if (Math.abs(velocityY) > 0.1 || top < maxY - 1) {
        requestAnimationFrame(animate);
      } else {
        circle.style.top = `${maxY}px`;
      }
    }

    animate();

    const popDelay = 4000 + Math.random() * 4000;
    setTimeout(() => {
      circle.style.transform = "scale(2.0)";
      circle.style.opacity = "0";
      setTimeout(() => {
        circle.remove();
      }, 300);
    }, popDelay);
  }
}
