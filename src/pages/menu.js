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

  const mainCoursesSection = document.createElement("div");
  mainCoursesSection.classList.add("menu-section");

  const chickenDumplingsItem = document.createElement("div");
  chickenDumplingsItem.classList.add("menu-item");

  const chickenDumplingsTitle = document.createElement("p");
  chickenDumplingsTitle.classList.add("menu-item-title");
  chickenDumplingsTitle.textContent = "Chicken Dumplings";

  const chickenDumplingsImage = new Image();
  chickenDumplingsImage.src = ChickenDumplings;
  chickenDumplingsImage.classList.add("image-border");
  chickenDumplingsImage.classList.add("menu-item-image");

  const chickenDumplingsDescription = document.createElement("p");
  chickenDumplingsDescription.textContent =
    "Chicken, butter, leek, garlic, carrot, Stormcloack seasoning, all-purpose flour, heavy cream, cheddar cheese, salt and pepper, Rye Pie Dough, egg.";

  chickenDumplingsItem.appendChild(chickenDumplingsTitle);
  chickenDumplingsItem.appendChild(chickenDumplingsImage);
  chickenDumplingsItem.appendChild(chickenDumplingsDescription);

  const companionsMeatballBakeItem = document.createElement("div");
  companionsMeatballBakeItem.classList.add("menu-item");

  const companionsMeatballBakeTitle = document.createElement("p");
  companionsMeatballBakeTitle.classList.add("menu-item-title");
  companionsMeatballBakeTitle.textContent = "Companions Meatball Bake";

  const companionsMeatballBakeImage = new Image();
  companionsMeatballBakeImage.src = CompanionsMeatballBake;
  companionsMeatballBakeImage.classList.add("image-border");
  companionsMeatballBakeImage.classList.add("menu-item-image");

  const companionsMeatballBakeDescription = document.createElement("p");
  companionsMeatballBakeDescription.textContent =
    "Baby potaotes, vegetable oil, ground beef, breadcrumbs, egg, sour cream, garlic, Stormcloak seasoning, water, tomato paste.";

  companionsMeatballBakeItem.appendChild(companionsMeatballBakeTitle);
  companionsMeatballBakeItem.appendChild(companionsMeatballBakeImage);
  companionsMeatballBakeItem.appendChild(companionsMeatballBakeDescription);

  const bakedWhiteRiverSalmonItem = document.createElement("div");
  bakedWhiteRiverSalmonItem.classList.add("menu-item");

  const bakedWhiteRiverSalmonTitle = document.createElement("p");
  bakedWhiteRiverSalmonTitle.classList.add("menu-item-title");
  bakedWhiteRiverSalmonTitle.textContent = "Baked white River Salmon";

  const bakedWhiteRiverSalmonImage = new Image();
  bakedWhiteRiverSalmonImage.src = BakedWhiteRiverSalmon;
  bakedWhiteRiverSalmonImage.classList.add("image-border");
  bakedWhiteRiverSalmonImage.classList.add("menu-item-image");

  const bakedWhiteRiverSalmonDescription = document.createElement("p");
  bakedWhiteRiverSalmonDescription.textContent =
    "Butter, leek, carrots, heavy cream, Stormcloak seasning, pepper, Parmesan cheese, puff pastry, salmon fillet, egg.";

  bakedWhiteRiverSalmonItem.appendChild(bakedWhiteRiverSalmonTitle);
  bakedWhiteRiverSalmonItem.appendChild(bakedWhiteRiverSalmonImage);
  bakedWhiteRiverSalmonItem.appendChild(bakedWhiteRiverSalmonDescription);

  mainCoursesSection.appendChild(chickenDumplingsItem);
  mainCoursesSection.appendChild(companionsMeatballBakeItem);
  mainCoursesSection.appendChild(bakedWhiteRiverSalmonItem);

  const desserts = document.createElement("h2");
  desserts.textContent = "Desserts";

  const hr3 = document.createElement("hr");
  hr3.classList.add("menu-hr");

  const dessertsSection = document.createElement("div");
  dessertsSection.classList.add("menu-section");

  const honeyNutTreatItem = document.createElement("div");
  honeyNutTreatItem.classList.add("menu-item");

  const honeyNutTreatTitle = document.createElement("p");
  honeyNutTreatTitle.classList.add("menu-item-title");
  honeyNutTreatTitle.textContent = "Honey Nut Treat";

  const honeyNutTreatImage = new Image();
  honeyNutTreatImage.src = HoneyNutTreat;
  honeyNutTreatImage.classList.add("image-border");
  honeyNutTreatImage.classList.add("menu-item-image");

  const honeyNutTreatDescription = document.createElement("p");
  honeyNutTreatDescription.textContent =
    "Pitted dates, golden raisins, almonds, rolled oats, honey, peanut butter, salt, ground cinnamon.";

  honeyNutTreatItem.appendChild(honeyNutTreatTitle);
  honeyNutTreatItem.appendChild(honeyNutTreatImage);
  honeyNutTreatItem.appendChild(honeyNutTreatDescription);

  const sweetrollsItem = document.createElement("div");
  sweetrollsItem.classList.add("menu-item");

  const sweetrollsTitle = document.createElement("p");
  sweetrollsTitle.classList.add("menu-item-title");
  sweetrollsTitle.textContent = "Sweetrolls";

  const sweetrollsImage = new Image();
  sweetrollsImage.src = SweetRolls;
  sweetrollsImage.classList.add("image-border");
  sweetrollsImage.classList.add("menu-item-image");

  const sweetrollsDescription = document.createElement("p");
  sweetrollsDescription.textContent =
    "Unsalted butter, whole milk, honey, salt, egg, active dry yeast, all-purpose flour, cream cheese, powdered sugar, heavy cream.";

  sweetrollsItem.appendChild(sweetrollsTitle);
  sweetrollsItem.appendChild(sweetrollsImage);
  sweetrollsItem.appendChild(sweetrollsDescription);

  const longTaffyTreatItem = document.createElement("div");
  longTaffyTreatItem.classList.add("menu-item");

  const longTaffyTreatTitle = document.createElement("p");
  longTaffyTreatTitle.classList.add("menu-item-title");
  longTaffyTreatTitle.textContent = "Long Taffy Treat";

  const longTaffyTreatImage = new Image();
  longTaffyTreatImage.src = LongTaffyTreat;
  longTaffyTreatImage.classList.add("image-border");
  longTaffyTreatImage.classList.add("menu-item-image");

  const longTaffyTreatDescription = document.createElement("p");
  longTaffyTreatDescription.textContent =
    "Herbal tea, sugar, honey, salt, unsalted butter.";

  longTaffyTreatItem.appendChild(longTaffyTreatTitle);
  longTaffyTreatItem.appendChild(longTaffyTreatImage);
  longTaffyTreatItem.appendChild(longTaffyTreatDescription);

  dessertsSection.appendChild(honeyNutTreatItem);
  dessertsSection.appendChild(sweetrollsItem);
  dessertsSection.appendChild(longTaffyTreatItem);

  const drinks = document.createElement("h2");
  drinks.textContent = "Drinks";

  const hr4 = document.createElement("hr");
  hr4.classList.add("menu-hr");

  const drinksSection = document.createElement("div");
  drinksSection.classList.add("menu-section");

  const nordMeadItem = document.createElement("div");
  nordMeadItem.classList.add("menu-item");

  const nordMeadTitle = document.createElement("p");
  nordMeadTitle.classList.add("menu-item-title");
  nordMeadTitle.textContent = "Nord Mead";

  const nordMeadImage = new Image();
  nordMeadImage.src = NordMead;
  nordMeadImage.classList.add("image-border");
  nordMeadImage.classList.add("menu-item-image");

  const nordMeadDescription = document.createElement("p");
  nordMeadDescription.textContent =
    "Ground cardamom, ginger, orange zest, whole cloves, cinnamon.";

  nordMeadItem.appendChild(nordMeadTitle);
  nordMeadItem.appendChild(nordMeadImage);
  nordMeadItem.appendChild(nordMeadDescription);

  const canisRootTeaItem = document.createElement("div");
  canisRootTeaItem.classList.add("menu-item");

  const canisRootTeaTitle = document.createElement("p");
  canisRootTeaTitle.classList.add("menu-item-title");
  canisRootTeaTitle.textContent = "Canis Root Tea";

  const canisRootTeaImage = new Image();
  canisRootTeaImage.src = CanisRootTea;
  canisRootTeaImage.classList.add("image-border");
  canisRootTeaImage.classList.add("menu-item-image");

  const canisRootTeaDescription = document.createElement("p");
  canisRootTeaDescription.textContent =
    "Dried dandelion root, dried burdock root, cinnamon stick, cream and brown sugar.";

  canisRootTeaItem.appendChild(canisRootTeaTitle);
  canisRootTeaItem.appendChild(canisRootTeaImage);
  canisRootTeaItem.appendChild(canisRootTeaDescription);

  const waterOfLifeItem = document.createElement("div");
  waterOfLifeItem.classList.add("menu-item");

  const waterOfLifeTitle = document.createElement("p");
  waterOfLifeTitle.classList.add("menu-item-title");
  waterOfLifeTitle.textContent = "Water of Life";

  const waterOfLifeImage = new Image();
  waterOfLifeImage.src = LongTaffyTreat;
  waterOfLifeImage.classList.add("image-border");
  waterOfLifeImage.classList.add("menu-item-image");

  const waterOfLifeDescription = document.createElement("p");
  waterOfLifeDescription.textContent =
    "Fennel seeds, caraway seeds, juniper berries, dill, vodka.";

  waterOfLifeItem.appendChild(waterOfLifeTitle);
  waterOfLifeItem.appendChild(waterOfLifeImage);
  waterOfLifeItem.appendChild(waterOfLifeDescription);

  drinksSection.appendChild(nordMeadItem);
  drinksSection.appendChild(canisRootTeaItem);
  drinksSection.appendChild(waterOfLifeItem);

  container.appendChild(menuTitle);
  container.appendChild(sss);
  container.appendChild(hr1);
  container.appendChild(sssSection);
  container.appendChild(mainCourses);
  container.appendChild(hr2);
  container.appendChild(mainCoursesSection);
  container.appendChild(desserts);
  container.appendChild(hr3);
  container.appendChild(dessertsSection);
  container.appendChild(drinks);
  container.appendChild(hr4);
  container.appendChild(drinksSection);

  content.appendChild(container);
};

export default menu;
