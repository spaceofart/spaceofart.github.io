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

  console.log('Button clicked')
}
