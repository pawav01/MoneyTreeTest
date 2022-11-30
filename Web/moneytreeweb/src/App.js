import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import About from "./components/About";
import Dashboard from "./components/Dashboard";
import "./styles/App.scss";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import React from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route
        path="dashboard"
        element={
          <UserContext.Provider value={{ user, setUser }}>
            <Dashboard />
          </UserContext.Provider>
        }
      />
    </Routes>
  );
}

export default App;
