var express = require("express");
var router = express.Router();
var db = require("../model/helper.js");

//retrieve full list of videos
router.get("/", async function (req, res, next) {
  const videoList = `SELECT * FROM videos`;
  const result = await db(videoList);
  res.status(200).send(result.data);
});

//GET video submission
router.get("/:category", async function (req, res, next) {
  try {
    const videoList = `SELECT * FROM videos WHERE category=${req.params.category}`;
    const result = await db(videoList);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//POST video
router.post("/", async function (req, res, next) {
  try {
    const submitVideo = `INSERT INTO videos (link, description, category) VALUES ${req.body.link} ${req.body.description} ${req.body.category}`;
    const result = await db(displayVideo);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
