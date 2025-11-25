var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  console.log("coucou", process.env.API_KEY);
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.json({ result: true, movies: data.results });
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
      res.status(500).json({ error: "failed to fetch movies" });
    });
});

module.exports = router;
