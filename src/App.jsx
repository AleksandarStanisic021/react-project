import "./App.css";
import Greet from "./Greet";

function App() {
  const name = "Sasa";
  const age = 100;
  return (
    <>
      <Greet />
      <Greet />
      <Greet />
      <p>
        {name} is {age} years old.
      </p>
    </>
  );
}

export default App;
