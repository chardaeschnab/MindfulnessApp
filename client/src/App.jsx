import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome the Mind Playground</h1>
      <p>Here, you can find a nice collection of meditation videos.</p>
      <p>We hope you enjoy your experience! </p>
      <br />
      <br />
      <br />
      <p>Let's begin... how are you feeling today?</p>
      <button>HAPPY</button>
      <button>SAD</button>
      <button>ANGRY</button>
      <br />
      <button>SCARED</button>
      <button>SURPRISED</button>
      <button>CONFUSED</button>
      <button>...NEUTRAL/I don't really know how I feel</button>
    </>
  );
}

export default App;
