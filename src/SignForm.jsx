import { useState } from "react";

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
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
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button style={{ marginTop: "10px" }} type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignForm;
