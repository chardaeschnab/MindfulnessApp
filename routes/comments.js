var express = require("express");
var router = express.Router();
var db = require("../model/helper.js");

//retrieve all comments
router.get("/", async function (req, res, next) {
  const commentList = `SELECT * FROM comments`;
  const result = await db(commentList);
  res.status(200).send(result.data);
});

//function to fetch replies for a specific Parent comment
async function getReplies(videoId, parentId) {
  const replyQuery = `SELECT * FROM comments WHERE video_id=${videoId} AND parent_id = ${parentId}`;
  const replyResult = await db(replyQuery);
  return replyResult.data;
}
//get comments per video id
router.get("/:video_id", async function (req, res, next) {
  try {
    const videoId = req.params.video_id;
    const parentComments = `SELECT * FROM comments WHERE video_id=${videoId} AND parent_id = 0`;
    const parentResult = await db(parentComments);
    const commentsWithReplies = [];
    for (const comment of parentResult.data) {
      const replies = `SELECT * FROM comments WHERE video_id=${videoId} AND parent_id = ${comment.id}`;
      const replyResult = await db(replies);
      comment.replies = replyResult.data;
      commentsWithReplies.push(comment);
    }
    res.status(200).send(commentsWithReplies);
  } catch (err) {
    res.status(500).send(err);
  }
});



//post comment on a video
router.post("/", async function (req, res, next) {
  try {
    const submitComment = `INSERT INTO comments (text, video_id, parent_id) VALUES ("${req.body.text}", "${req.body.video_id}", "${req.body.parent_id}")`;
    await db(submitComment);
    // const commentList = `SELECT * FROM comments WHERE video_id = ${req.body.video_id}`;
    // const result = await db(commentList);
    // res.status(200).send(result.data);

    const videoId = req.body.video_id;
    const parentComments = `SELECT * FROM comments WHERE video_id=${videoId} AND parent_id = 0`;
    const parentResult = await db(parentComments);
    const commentsWithReplies = [];
    for (const comment of parentResult.data) {
      const replies = `SELECT * FROM comments WHERE video_id=${videoId} AND parent_id = ${comment.id}`;
      const replyResult = await db(replies);
      comment.replies = replyResult.data;
      commentsWithReplies.push(comment);
    }
    res.status(200).send(commentsWithReplies);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
