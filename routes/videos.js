var express = require("express");
var router = express.Router();
var db = require("../model/helper.js");

//retrieve full list of videos
// /api/videos
router.get("/", async function (req, res, next) {
  const videoList = `SELECT * FROM videos`;
  const result = await db(videoList);
  res.status(200).send(result.data);
});

//GET video submission
// /api/videos/whatever
router.get("/:category", async function (req, res, next) {
  try {
    const videoList = `SELECT * FROM videos WHERE category="${req.params.category}" ORDER BY RAND() LIMIT 1;`;
    const result = await db(videoList);
    
    const videoData = result.data[0];
    // console.log(videoList);
    const videoId = videoData.id; //extract the video ID form the retrieved data (once selected based on category)

    const insertQuery = `INSERT INTO plays (video_id) VALUES (${videoId});`;
    await db(insertQuery);

    res.status(200).send(videoData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/something/:id", async function (req, res, next) {
  try {
    const videoId = req.params.id;
    const videoQuery = `SELECT * FROM videos WHERE id = ${videoId}`;
    const result = await db(videoQuery);
    if (result.data.length === 0) {
      res.status(404).send({ message: "Video not found" });
    } else {
      res.status(200).send(result.data[0]);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//POST video
router.post("/", async function (req, res, next) {
  try {
    const submitVideo = `INSERT INTO videos (link, description, category) VALUES ("${req.body.link}", "${req.body.description}", "${req.body.category}")`;
    await db(submitVideo);
    const videoList = `SELECT * FROM videos`;
    const result = await db(videoList);

    res.status(200).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});



module.exports = router;
