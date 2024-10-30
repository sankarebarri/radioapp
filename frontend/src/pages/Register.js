import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { getAccessToken } from "../utils/token";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm();

  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = React.useState("");
  const password = watch("password");

  React.useEffect(() => {
    // Redirect if logged in
    if (getAccessToken()) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      await api.post("register/", data);
      setSuccessMessage(
        <div className="alert alert-success text-center">
          Registration successful! Redirecting to login...
        </div>
      );
      setTimeout(() => navigate("/login"), 5000);
    } catch (error) {
      // console.error("Registration error:", error);
      if (error.response && error.response.data) {
        for (const [key, value] of Object.entries(error.response.data)) {
          setError(key, { type: "manual", message: value[0] });
        }
      }
    }
  };

  return (
    <div className="auth-container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Create an Account</h2>
        {successMessage && (
          <p className="text-success text-center">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <small className="text-danger">{errors.username.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email or Phone Number</label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Verify Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter your password"
              {...register("password2", {
                required: "Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.password2 && (
              <small className="text-danger">{errors.password2.message}</small>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <small>
            Already have an account? <Link to="/login">Sing In</Link>
          </small>
        </div>
      </div>
    </div>
  );
};
export default Register;
