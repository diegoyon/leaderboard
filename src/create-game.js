// CREATE A NEW GAME
fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Squid Game",
  }),
})
  .then((res) => res.json())
  .then((data) => {
    return data.result;
  });
