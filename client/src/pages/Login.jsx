import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!identifier) {
      setError("Please enter your email or username");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { identifier, password },
        { withCredentials: true } 
      );

      dispatch(setUserData(response.data));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md sm:p-8">
        <h2 className="text-2xl font-bold mb-2 text-emerald-700 text-center">
          Login
        </h2>
        <p className="text-sm mb-6 text-gray-700 text-center">
          Welcome back! Enter your login details below to continue.
        </p>

        {error && <p className="mb-2 text-red-500 text-left">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Email or Username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-emerald-500
                       focus:border-emerald-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-emerald-500
                       focus:border-emerald-500 transition"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg
                       hover:bg-emerald-500 hover:text-white transition font-semibold text-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-700 mt-6 text-sm sm:text-base">
          Don’t have an account?{" "}
          <Link
            className="text-emerald-600 underline font-semibold"
            to="/register"
          >
            Register Here
          </Link>
        </p>

        <p className="text-center text-gray-600 mt-4 text-xs sm:text-sm">
          By using, you agree to our{" "}
          <Link
            to="/terms"
            className="text-emerald-600 underline hover:text-emerald-500 font-medium"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy-policy"
            className="text-emerald-600 underline hover:text-emerald-500 font-medium"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
