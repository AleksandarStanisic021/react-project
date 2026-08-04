import { useForm } from "react-hook-form";

const SignForm = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
          {...register("email", { required: true })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register("password", { required: true })}
        />
        <button
          style={{
            marginTop: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
          type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignForm;
