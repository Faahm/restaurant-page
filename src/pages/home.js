import "../style.css";
import TheBanneredMare from "../images/the-bannered-mare.jpg";

const home = function () {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("home-container");

  const title = document.createElement("h1");
  title.textContent = "Welcome to The Bannered Mare";

  const theBanneredMare = new Image();
  theBanneredMare.src = TheBanneredMare;
  theBanneredMare.classList.add("image-border");

  const body = document.createElement("h2");
  body.textContent = "Now serving more than Skyrim food and drinks.";

  container.appendChild(title);
  container.appendChild(theBanneredMare);
  container.appendChild(body);
  content.appendChild(container);
};

export default home;
