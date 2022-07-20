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

  const message = document.querySelector("h5");
  message.innerHTML = `${JsonResponse.result}. Click the refresh button to see changes.`;

  const body = document.querySelector("body");
  body.appendChild(message);

  setTimeout(() => {
    message.innerHTML = "";
  }, 3000);
};

export default addScore;
