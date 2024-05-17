import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function VideoDisplay() {
  const { emotion } = useParams();
  const [video, setVideo] = useState({});
  const [videoComments, setVideoComments] = useState([]);
  const [input, setInput] = useState("");
  const [replyBoxState, setReplyBoxState] = useState({});

  useEffect(() => {
    fetch(`/api/videos/${emotion}`)
      .then((res) => res.json())
      .then((data) => {
        // upon success, update tasks
        setVideo(data);
      })
      .catch((error) => {
        // upon failure, show error message
        console.log("Error was found", error);
      });
  }, []);

  useEffect(() => {
    if (video.id) {
      fetch(`/api/comments/${video.id}`)
        .then((res) => res.json())
        .then((data) => {
          // upon success, update tasks
          setVideoComments(data);
        })
        .catch((error) => {
          // upon failure, show error message
          console.log("Error was found", error);
        });
    }
  }, [video]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment();
    setInput("");
  };

  const handleReplySubmit = async (e, commentId) => {
    e.preventDefault();
    const replyText = e.target.elements[0].value;
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: replyText,
          video_id: video.id,
          parent_id: commentId,
        }),
      });
      const newComment = await response.json();
      setVideoComments(newComment);
    } catch (err) {
      console.error("Error submitting reply", err);
    }
    setReplyBoxState("");
  };

  const addComment = async () => {
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          text: input,
          video_id: video.id,
          parent_id: [0],
        }),
      });
      const newComments = await response.json();
      setVideoComments(newComments);
      setInput("");
    } catch (error) {
      // upon failure, show error message
      console.log("Error was found", error);
    }
  };

  const emotionBlurbs = {
    sad: (
      <h2 className="emotion-blurb">
        "That okay, evertbody gets sad sometimes. We're here with a video to
        help you find a moment of calm."
      </h2>
    ),
    happy: "That's great! Let's find a video to keep those happy vibes going!",
    angry:
      "It's okay, anger is a very healthy emotion. Let's work together to try to understand it better.",
    scared:
      "We all feel nervous sometimes. Take a deep breath and join us for a calming video.",
    surprised:
      "That's okay you're feeling surprised. This video might bring a smile to your face.",
    confused:
      "Feeling a bit lost? That's okay! Let's watch a video to help you clear your mind.",
    neutral:
      "You're feeling neutral or...Maybe you're not totally sure how you're feeling... That's perfectly fine! Here's a video to help you find some inner peace.",
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1>
        You said you're feeling: <br /> {emotion}
      </h1>
      <h2>{emotionBlurbs[emotion]}</h2>
      <iframe
        width="560"
        height="315"
        src={video.link?.replace("youtube.com/watch?v=", "youtube.com/embed/")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h4>Below is the comment section, yay</h4>
      <form>
        <input
          value={input}
          text=""
          placeholder="your comment here..."
          onChange={(e) => handleChange(e)}
        />
        <Button variant="dark" size="sm" onClick={(e) => handleSubmit(e)}>
          Share your comment
        </Button>
      </form>
      {videoComments.map((comment) => (
        <li key={comment.id} className="comment">
          {comment.text}
          {comment.replies.map((reply) => (
            <li key={reply.id} className="reply">
              {reply.text}
            </li>
          ))}
          {replyBoxState[comment.id] ? (
            <form onSubmit={(e) => handleReplySubmit(e, comment.id)}>
              <input type="text" placeholder="Write your reply..." />
              <Button variant="outline-info" size="sm" type="submit">
                {" "}
                Submit Reply
              </Button>
            </form>
          ) : (
            <Button
              variant="info"
              size="sm"
              onClick={() =>
                setReplyBoxState({
                  ...replyBoxState,
                  [comment.id]: !replyBoxState[comment.id],
                })
              }
            >
              Reply
            </Button>
          )}
        </li>
      ))}
    </div>
  );
}
