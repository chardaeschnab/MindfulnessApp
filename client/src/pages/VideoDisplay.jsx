import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function VideoDisplay() {
  const location = useLocation();
  const { pathname } = location;
  const emotion = pathname.slice(7);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`/api/videos/${emotion}`)
      .then((res) => res.json())
      .then((data) => {
        // upon success, update tasks
        setVideos(data);
      })
      .catch((error) => {
        // upon failure, show error message
        console.log("Error was found", error);
      });
  }, []);

  return (
    <div>
      <h1>Video page here</h1>
    </div>
  );
}
