import "./App.css";
import Greet from "./Greet";
import Todo from "./Todo";
import SignForm from "./SignForm";
import { Routes, Route } from "react-router-dom";

import { useState } from "react";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [name, setName] = useState("");

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <button onClick={handleClick}>Click Me</button>
      {showInfo && <Greet name={"Sasa"} age={100} />}
      <div>
        {showInfo && (
          <>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <p>{name}</p>
            <Todo />
          </>
        )}
      </div>
      <SignForm />
    </div>
  );
}

export default App;
