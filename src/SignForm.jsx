import { useForm } from "react-hook-form";

const SignForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", { required: true })}
        />
        <label htmlFor="password">Password:</label>
        {errors.password && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.password.message}
          </span>
        )}
        <input
          type="password"
          id="password"
          name="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
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
