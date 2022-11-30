import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Account from "./components/Account";
import Footer from "./components/Footer"
import NavigationBar from "./components/NavigationBar"
import "./styles/App.scss";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import React from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={
        <UserContext.Provider value={{ user, setUser }}>
          <Dashboard />
        </UserContext.Provider>
      } />
      <Route path="account" element={
        <UserContext.Provider value={{ user, setUser }}>
          <Account />
        </UserContext.Provider>
      } />
    </Routes>
    </Router>
  );
}

export default App;
