import "./style.css";
import addScore from "./add-score.js";
import getScores from "./get-scores.js";

const refreshButton = document.querySelector(".scores-header button");
refreshButton.addEventListener("click", getScores);

const addButton = document.querySelector(".add-score button");
addButton.addEventListener("click", () => {
  const userInput = document.getElementById("name");
  const scoreInput = document.getElementById("score");
  addScore(userInput.value, scoreInput.value);
  userInput.value = "";
  scoreInput.value = "";
});
