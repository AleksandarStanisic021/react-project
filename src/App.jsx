import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";

/*
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
      <Link to="/home">Go to Home</Link>
    </div>
  );
}
*/

function App() {
  /*
  const [showInfo, setShowInfo] = useState(false);
  const [name, setName] = useState("");

  const handleClick = () => {
    setShowInfo(!showInfo);
  };*/

  /*
    <div>
      <nav
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "20px",
          textDecoration: "none",
        }}>
        <Link to="/home">Home</Link>

        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<SignForm />} />
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
            <SignForm />
          </>
        )}
      </div>*/
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
