import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import mindplayground from "/images/mindplayground.jpg";
import "../index.css";


export default function HomePage() {
  return (
    <div>
      <h1>Welcome the Mind Playground</h1>
      <p>Here, you can find a nice collection of meditation videos.</p>
      <p>We hope you enjoy your experience! </p>
      <br />
      <br />
      <br />
      <img src={mindplayground} alt="website opener" />
      <p>Let's begin... how are you feeling today?</p>
      <Link to="/video/happy">
        <button>HAPPY</button>
      </Link>
      <Link to="/video/sad">
        <button>SAD</button>
      </Link>

      <Link to="/video/angry">
        <button>ANGRY</button>
      </Link>
      <br />
      <Link to="/video/scared">
        <button>SCARED</button>
      </Link>
      <Link to="/video/surprised">
        <button>SURPRISED</button>
      </Link>
      <Link to="/video/confused">
        <button>CONFUSED</button>
      </Link>
      <Link to="/video/neutral">
        <button>NEUTRAL</button>
      </Link>
    </div>
  );
}
