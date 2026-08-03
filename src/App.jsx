import "./App.css";
import Greet from "./Greet";
import Todo from "./Todo";

import { useState } from "react";

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [name, setName] = useState("");

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
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
    </div>
  );
}

export default App;
