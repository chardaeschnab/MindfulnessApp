import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import mindplayground from "/images/mindplayground.jpg";
import "../index.css";
import Button from "react-bootstrap/Button";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome the Mind Playground</h1>
      <p>Here, you can find a nice collection of meditation videos.</p>
      <p>We hope you enjoy your experience! </p>
      <br />
      <img className="homepage-image" src={mindplayground} alt="website opener" />
      <p>Let's begin... how are you feeling today?</p>
      <Link to="/video/happy">
        <Button variant="warning">HAPPY</Button>
      </Link>
      <Link to="/video/sad">
        <Button variant="secondary">SAD</Button>
      </Link>
      <Link to="/video/angry">
        <Button variant="danger">ANGRY</Button>
      </Link>
      <br />
      <Link to="/video/scared">
        <Button variant="dark">SCARED</Button>
      </Link>
      <Link to="/video/surprised">
        <Button variant="info">SURPRISED</Button>
      </Link>
      <Link to="/video/confused">
        <Button variant="light">CONFUSED</Button>
      </Link>
      <Link to="/video/neutral">
        <Button variant="success">NEUTRAL</Button>
      </Link>
    </div>
  );
}
