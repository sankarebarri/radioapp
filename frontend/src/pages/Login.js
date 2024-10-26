import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("login/", data);
      localStorage.setItem("access", response.data.acess);
      localStorage.setItem("refresh", response.data.refresh);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="auth-container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Sign In</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: "Email is required" })}
            />
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
