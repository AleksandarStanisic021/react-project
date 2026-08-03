import "./App.css";
import Greet from "./Greet";
import { useState } from "react";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {showInfo && <Greet name={"Sasa"} age={100} />}
    </div>
  );
}

export default App;
