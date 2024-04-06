import "../style.css";
import AboutImage from "../images/about.png";

const home = function () {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("about-container");

  const title = document.createElement("h1");
  title.textContent = "History of The Bannered Mare";

  const aboutImage = new Image();
  aboutImage.src = AboutImage;
  aboutImage.classList.add("image-border");
  aboutImage.classList.add("about-image");

  const aboutParagraph1 = document.createElement("p");
  aboutParagraph1.textContent =
    "The Bannered Mare is an inn located in Whiterun's market area in the Plains District.";

  const aboutParagraph2 = document.createElement("p");
  aboutParagraph2.textContent =
    "The inn has two stories split into multiple rooms. On the first floor there is the common room, a small bedroom, and the kitchen. The second floor contains three bedrooms split across two areas. Sitting in any seat in the inn will cause Hulda to call Saadia to serve the player, and she will then seek out the player and offer to sell food and drinks.";

  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-div");
  aboutDiv.appendChild(aboutParagraph1);
  aboutDiv.appendChild(aboutParagraph2);

  container.appendChild(title);
  container.appendChild(aboutImage);
  container.appendChild(aboutDiv);

  content.appendChild(container);
};

export default home;
