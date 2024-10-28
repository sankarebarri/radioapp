import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();
  React.useEffect(() => {
    // Redirect if logged in
    if (localStorage.getItem("access")) {
      navigate("/");
    }
  }, [navigate]);
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await api.post("register/", data);
      //   console.log("API Response:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="auth-container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              {...register("firstname", { required: "First Name is required" })}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              {...register("lastname", { required: "Last Name is required" })}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div> */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              {...register("username", { required: "Username is required" })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email or Phone Number</label>
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
              placeholder="Enter your password"
              {...register("password", {
                required: "password is required",
              })}
            />
          </div>
          {/* <div className="mb-3">
            <label className="form-label">Verify Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter your password"
              {...register("password2", {
                required: "password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
          </div> */}
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
