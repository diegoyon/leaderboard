import "./style.css";
// CREATE A NEW GAME
// fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Squid Game",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data.result));

const addScore = async (userName, userScore) => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jvP2RQFJf7ELeHvIFZYY/scores/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userName,
        score: userScore,
      }),
    }
  );
  const JsonResponse = await response.json();
  console.log(JsonResponse.result);
  const message = document.querySelector("h5");
  message.innerHTML = JsonResponse.result;
  const body = document.querySelector("body");
  body.appendChild(message);
  setTimeout(() => {
    message.innerHTML = "";
  }, 3000);
};

const addButton = document.querySelector(".add-score button");
addButton.addEventListener("click", () => {
  const userInput = document.getElementById("name");
  const scoreInput = document.getElementById("score");
  addScore(userInput.value, scoreInput.value);
  userInput.value = "";
  scoreInput.value = "";
});

const getScores = async () => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jvP2RQFJf7ELeHvIFZYY/scores/"
  );
  const JsonResponse = await response.json();
  updateScores(JsonResponse.result);
  // return JsonResponse.result;
};

const refreshButton = document.querySelector(".scores-header button");
refreshButton.addEventListener("click", getScores);

const updateScores = (scores) => {
  const list = document.querySelector("ul");
  list.innerHTML = "";
  for (let i = 0; i < scores.length; i += 1) {
    const li = document.createElement("li");
    li.innerHTML = `${scores[i].user}: ${scores[i].score}`;
    list.appendChild(li);
  }
};
