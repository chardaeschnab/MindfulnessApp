var express = require("express");
var router = express.Router();
var db = require("../model/helper.js");

//retrieve all comments
router.get("/", async function (req, res, next) {
  const commentList = `SELECT * FROM comments`;
  const result = await db(commentList);
  res.status(200).send(result.data);
});

//get comments per video id
router.get("/:video_id", async function (req, res, next) {
  try {
    const videoComment = `SELECT * FROM comments WHERE video_id=${req.params.video_id}`;
    const result = await db(videoComment);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//post comment on a video
router.post("/", async function (req, res, next) {
  try {
    const submitComment = `INSERT INTO comments (text, video_id) VALUES ("${req.body.text}", "${req.body.video_id}")`;
    await db(submitComment);
    const commentList = `SELECT * FROM comments`;
    const result = await db(commentList);
    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
