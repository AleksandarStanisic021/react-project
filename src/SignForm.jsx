import { useState } from "react";

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { email, password });
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          alignItems: "center",
          margin: "0 auto",
        }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{ marginTop: "10px" }} type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignForm;
