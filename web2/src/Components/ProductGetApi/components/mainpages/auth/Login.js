import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../headers/Header";
import axios from "axios";
import "./login.css";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const LoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/products";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <>
      <Header />
      <div className="login-page">
        <form onSubmit={LoginSubmit}>
          <h2>LOGIN</h2>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={user.email}
            onChange={onChangeInput}
          ></input>
          <input
            type="password"
            name="password"
            required
            autoComplete="on"
            placeholder="Password"
            value={user.password}
            onChange={onChangeInput}
          ></input>
          <div className="row_id">
            <button type="submit">Login</button>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
}
