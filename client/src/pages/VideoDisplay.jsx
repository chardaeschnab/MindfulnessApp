import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VideoDisplay() {
  const { emotion } = useParams();
  const [video, setVideo] = useState({});

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

  return (
    <div>
      <h1>Video page here</h1>

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
    </div>
  );
}
