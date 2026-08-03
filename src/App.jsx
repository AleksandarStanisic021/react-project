import "./App.css";
import Greet from "./Greet";

function App() {
  const name = "Sasa";
  const age = 100;
  return (
    <>
      <Greet name="Sasa" age={100} />
      <Greet name="John" age={25} />
      <Greet name="Jane" age={30} />
      <p>
        {name} is {age} years old.
      </p>
    </>
  );
}

export default App;
