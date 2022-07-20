const updateScores = (scores) => {
  const list = document.querySelector('ul');
  list.innerHTML = '<li><div>Username</div><div>Score</div></li>';
  for (let i = 0; i < scores.length; i += 1) {
    const li = document.createElement('li');
    const userName = document.createElement('div');
    const userScore = document.createElement('div');
    userName.innerHTML = scores[i].user;
    userScore.innerHTML = scores[i].score;
    li.appendChild(userName);
    li.appendChild(userScore);
    list.appendChild(li);
  }
};

const getScores = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IMbLUNoaRd8W6ClY4Px1/scores/',
  );
  const JsonResponse = await response.json();
  updateScores(JsonResponse.result);
};

export default getScores;
