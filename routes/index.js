var express = require("express");
var router = express.Router();

const moviesRouter = require("./movies");

router.use("/movies", moviesRouter);

module.exports = router;
