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

// ADD A SCORE
// fetch(
//   "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jvP2RQFJf7ELeHvIFZYY/scores/",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user: "Diego",
//       score: 98,
//     }),
//   }
// )
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data.result));

// GET SCORES
// fetch(
//   "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jvP2RQFJf7ELeHvIFZYY/scores/"
// )
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data.result));

const getScores = async () => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jvP2RQFJf7ELeHvIFZYY/scores/"
  );
  const JsonResponse = await response.json();
  // console.log(JsonResponse.result);
  updateScores(JsonResponse.result);
  return JsonResponse.result;
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
