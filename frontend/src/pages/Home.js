import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-4">Welcome to RadioApp</h1>
        <p className="lead mt-3 mb-4">
          Discover, listen, and follow your favorite radio channels!
        </p>
        <div>
          <Link to="/login" className="btn btn-primary btn-lg m-2">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline-primary btn-lg m-2">
            Register
          </Link>
          <Link to="/browse" className="btn btn-secondary btn-lg m-2">
            Browse Channels
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
