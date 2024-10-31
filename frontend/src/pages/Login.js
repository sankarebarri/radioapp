import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext"; // Import useAuth to access AuthContext

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();
  const [generalError, setGeneralError] = useState(""); // State for general errors
  const { login, isAuthenticated } = useAuth(); // Destructure login and isAuthenticated from useAuth

  useEffect(() => {
    // Redirect if already logged in
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]); // Depend on isAuthenticated

  const onSubmit = async (data) => {
    try {
      const response = await api.post("login/", data);
      login(response.data.access, response.data.refresh); // Use login function to set tokens
      navigate("/profile");
    } catch (error) {
      if (error.response && error.response.data) {
        // Clear previous general error
        setGeneralError("");

        // Handle specific field errors
        if (error.response.data.detail) {
          setGeneralError("Invalid username or password. Please try again.");
        } else {
          for (const [key, value] of Object.entries(error.response.data)) {
            setError(key, { type: "manual", message: value[0] });
          }
        }
      } else {
        setGeneralError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="auth-container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Sign In</h2>

        {generalError && (
          <div className="alert alert-danger text-center">{generalError}</div>
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
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
        <div className="text-center mt-3">
          <small>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
