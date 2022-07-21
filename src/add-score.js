const addScore = async (userName, userScore) => {
  if (userName === "" || userScore === "") {
    const message = document.createElement("h5");
    message.innerHTML = `Invalid input.`;

    const body = document.querySelector("body");
    body.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 3000);
  } else {
    const response = await fetch(
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IMbLUNoaRd8W6ClY4Px1/scores/",
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

    const message = document.createElement("h5");
    message.innerHTML = `${JsonResponse.result} Click the refresh button to see changes.`;

    const body = document.querySelector("body");
    body.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 3000);
  }
};

export default addScore;
