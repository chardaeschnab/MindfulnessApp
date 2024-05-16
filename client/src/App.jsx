import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Homepage from "./pages/Homepage";
import VideoDisplay from "./pages/VideoDisplay";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home || </Link>

            <Link to="/admin">Admin ||</Link>

            <Link to="/video">Video ||</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/video/:emotion" element={<VideoDisplay />} />
      </Routes>
    </>
  );
}

export default App;
