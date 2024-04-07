import "../style.css";
import BakedWhiteRiverSalmon from "../images/baked-white-river-salmon.png";
import CanisRootTea from "../images/canis-root-tea.png";
import ChickenDumplings from "../images/chicken-dumplings.png";
import CompanionsMeatballBake from "../images/companions-meatball-bake.png";
import DoubleBakedPotatoes from "../images/double-baked-potatoes.png";
import GrilledLeeks from "../images/grilled-leeks.png";
import HoneyNutTreat from "../images/honey-nut-treat.png";
import LongTaffyTreat from "../images/long-taffy-treat.png";
import MushroomAndVegetableRisotto from "../images/mushroom-and-vegetable-risotto.png";
import NordMead from "../images/nord-mead.png";
import SweetRolls from "../images/sweet-roll.png";
import WaterOfLife from "../images/water-of-life.png";

const menu = function () {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("menu-container");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "The Bannered Mare is open everyday, day and night.";

  const sss = document.createElement("h2");
  sss.textContent = "Sides, starters, and snacks";

  const hr1 = document.createElement("hr");
  hr1.classList.add("menu-hr");

  const sssSection = document.createElement("div");
  sssSection.classList.add("menu-section");

  const grilledLeeksItem = document.createElement("div");
  grilledLeeksItem.classList.add("menu-item");

  const grilledLeeksTitle = document.createElement("p");
  grilledLeeksTitle.classList.add("menu-item-title");
  grilledLeeksTitle.textContent = "Grilled Leeks";

  const grilledLeeksImage = new Image();
  grilledLeeksImage.src = GrilledLeeks;
  grilledLeeksImage.classList.add("image-border");
  grilledLeeksImage.classList.add("menu-item-image");

  const grilledLeeksDescription = document.createElement("p");
  grilledLeeksDescription.textContent =
    "Large leeks, olive oil, Parmesan cheese, salt and pepper.";

  grilledLeeksItem.appendChild(grilledLeeksTitle);
  grilledLeeksItem.appendChild(grilledLeeksImage);
  grilledLeeksItem.appendChild(grilledLeeksDescription);

  const mushroomAndVegetableRisottoItem = document.createElement("div");
  mushroomAndVegetableRisottoItem.classList.add("menu-item");

  const mushroomAndVegetableRisottoTitle = document.createElement("p");
  mushroomAndVegetableRisottoTitle.classList.add("menu-item-title");
  mushroomAndVegetableRisottoTitle.textContent =
    "Mushroom and Vegetable Risotto";

  const mushroomAndVegetableRisottoImage = new Image();
  mushroomAndVegetableRisottoImage.src = MushroomAndVegetableRisotto;
  mushroomAndVegetableRisottoImage.classList.add("image-border");
  mushroomAndVegetableRisottoImage.classList.add("menu-item-image");

  const mushroomAndVegetableRisottoDescription = document.createElement("p");
  mushroomAndVegetableRisottoDescription.textContent =
    "Unsalted butter, garlic, leeks, cattor, mixed mushrooms, vegetable stock, arborio rice, Imperial seasoning, Parmesan cheese, salt and pepper.";

  mushroomAndVegetableRisottoItem.appendChild(mushroomAndVegetableRisottoTitle);
  mushroomAndVegetableRisottoItem.appendChild(mushroomAndVegetableRisottoImage);
  mushroomAndVegetableRisottoItem.appendChild(
    mushroomAndVegetableRisottoDescription
  );

  //

  const doubleBakedPotatoesItem = document.createElement("div");
  doubleBakedPotatoesItem.classList.add("menu-item");

  const doubleBakedPotatoesTitle = document.createElement("p");
  doubleBakedPotatoesTitle.classList.add("menu-item-title");
  doubleBakedPotatoesTitle.textContent = "Double-baked Potatoes";

  const doubleBakedPotatoesImage = new Image();
  doubleBakedPotatoesImage.src = DoubleBakedPotatoes;
  doubleBakedPotatoesImage.classList.add("image-border");
  doubleBakedPotatoesImage.classList.add("menu-item-image");

  const doubleBakedPotatoesDescription = document.createElement("p");
  doubleBakedPotatoesDescription.textContent =
    "Potatoes, salted butter, milk, cheddar cheese, salt.";

  doubleBakedPotatoesItem.appendChild(doubleBakedPotatoesTitle);
  doubleBakedPotatoesItem.appendChild(doubleBakedPotatoesImage);
  doubleBakedPotatoesItem.appendChild(doubleBakedPotatoesDescription);

  sssSection.appendChild(grilledLeeksItem);
  sssSection.appendChild(doubleBakedPotatoesItem);
  sssSection.appendChild(mushroomAndVegetableRisottoItem);

  const mainCourses = document.createElement("h2");
  mainCourses.textContent = "Main Courses";

  const hr2 = document.createElement("hr");
  hr2.classList.add("menu-hr");

  const desserts = document.createElement("h2");
  desserts.textContent = "Desserts";

  const hr3 = document.createElement("hr");
  hr3.classList.add("menu-hr");

  const drinks = document.createElement("h2");
  drinks.textContent = "Drinks";

  const hr4 = document.createElement("hr");
  hr4.classList.add("menu-hr");

  container.appendChild(menuTitle);
  container.appendChild(sss);
  container.appendChild(hr1);
  container.appendChild(sssSection);
  container.appendChild(mainCourses);
  container.appendChild(hr2);
  container.appendChild(desserts);
  container.appendChild(hr3);
  container.appendChild(drinks);
  container.appendChild(hr4);

  content.appendChild(container);
};

export default menu;
