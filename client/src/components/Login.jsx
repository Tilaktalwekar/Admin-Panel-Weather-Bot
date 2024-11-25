import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from "axios";
import "./styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      if (res.data.success) {
        setAuth({ user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/dashboard/home");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="form-container" style={{ minHeight: "70vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">Admin Login</h4>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="form-control"
          id="exampleInputEmail1"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
