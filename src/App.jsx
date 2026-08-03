import "./App.css";
import Greet from "./Greet";

function App() {
  const showInfo = false;
  return (
    <>
      {showInfo && <Greet name={"Sasa"} age={100} />}
      {showInfo ? <Greet name={"John"} age={25} /> : "Nothing to show"}
    </>
  );
}

export default App;
