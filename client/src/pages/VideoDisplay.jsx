import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VideoDisplay() {
  const { emotion } = useParams();
  const [video, setVideo] = useState({});
  const [videoComment, setVideoComment] = useState([]);

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
    fetch(`/api/comments/${video.id}`)
      .then((res) => res.json())
      .then((data) => {
        // upon success, update tasks
        setVideoComment(data);
        console.log(videoComment);
      })
      .catch((error) => {
        // upon failure, show error message
        console.log("Error was found", error);
      });
  }, [video]);

  const emotionBlurbs = {
    sad: "That okay, evertbody gets sad sometimes. We're here with a video to help you find a moment of calm.",
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
    <div>
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
      {/* <ul>
        
      </ul> */}
    </div>
  );
}
