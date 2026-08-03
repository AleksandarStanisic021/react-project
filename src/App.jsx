import "./App.css";

function Greet() {
  return <h1>Greet !</h1>;
}

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
