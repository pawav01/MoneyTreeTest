import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import About from "./components/About";
import Dashboard from "./components/Dashboard";
import "./styles/App.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
