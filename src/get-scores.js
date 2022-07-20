const getScores = async () => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jvP2RQFJf7ELeHvIFZYY/scores/"
  );
  const JsonResponse = await response.json();
  updateScores(JsonResponse.result);
};

const updateScores = (scores) => {
  const list = document.querySelector("ul");
  list.innerHTML = "";
  for (let i = 0; i < scores.length; i += 1) {
    const li = document.createElement("li");
    li.innerHTML = `${scores[i].user}: ${scores[i].score}`;
    list.appendChild(li);
  }
};

export default getScores;
