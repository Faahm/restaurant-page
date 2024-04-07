import "./style.css";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

initialRender();

homeButton.addEventListener("click", function () {
  clearContent();
  home();
  setActiveButton(homeButton);
});

menuButton.addEventListener("click", function () {
  clearContent();
  menu();
  setActiveButton(menuButton);
});

aboutButton.addEventListener("click", function () {
  clearContent();
  about();
  setActiveButton(aboutButton);
});

function initialRender() {
  clearContent();
  home();
  setActiveButton(homeButton);
}

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  const hr = document.createElement("hr");
  content.appendChild(hr);
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".tab");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}
