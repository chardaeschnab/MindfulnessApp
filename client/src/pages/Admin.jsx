import { Dropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export default function Admin() {
  const [videos, setVideos] = useState([]);
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  async function Submission() {
    try {
      const result = await fetch("/api/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link, description, category }),
      });
      const videoList = await result.json();
      setVideos(videoList);
    } catch (err) {
      console.log({ message: "error" });
    }
    setLink("");
    setDescription("");
    setCategory("");
  }

  return (
    <div>
      This page is for admin eyes only
      <h4>Category</h4>
      <Form.Select
        value={category}
        onChange={(e) => handleCategoryChange(e)}
        aria-label="Default select example"
      >
        <option>Open this select menu</option>
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Angry">Angry</option>
        <option value="Confused">Confused</option>
        <option value="Scared">Scared</option>
        <option value="Surprised">Surprised</option>
        <option value="Neutral">Neutral</option>
      </Form.Select>
      <br />
      <input type="text" name="videoLink" value={link} onChange={(e) => handleLinkChange(e)} placeholder="Enter vide URL" />
      <input text="text" value={description} onChange={(e) => handleDescriptionChange(e)} placeholder="Describe Video Here" />
      <br />
      <br />
      <button onClick={(event) => Submission(event)}>Submit Video</button>
    </div>
  );
}
