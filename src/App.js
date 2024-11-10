import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>
            Home
          </Link>
          <Link to="/about" style={{ margin: "0 10px" }}>
            About
          </Link>
          <Link to="/signup" style={{ margin: "0 10px" }}>
            Sign Up
          </Link>
          <Link to="/login" style={{ margin: "0 10px" }}>
            Login
          </Link>
          <Link to="/settings" style={{ margin: "0 10px" }}>
            Settings
          </Link>
          <Link to="/dashboard" style={{ margin: "0 10px" }}>
            Dashboard
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
