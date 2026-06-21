import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Git from "./pages/Git";
import Docker from "./pages/Docker";
import Aws from "./pages/Aws";

import GitHubActions from "./pages/GitHubActions";
import Kubernetes from "./pages/Kubernetes";
import Terraform from "./pages/Terraform";

import Monitoring from "./pages/Monitoring";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";

import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>

      <div className={darkMode ? "app dark" : "app"}>

        <Sidebar />

        <div className="content">

          <button
            className="dark-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

           <SearchBar />


          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/login" element={<Login />} />

            <Route path="/git" element={<Git />} />

            <Route
              path="/githubactions"
              element={<GitHubActions />}
            />

            <Route
              path="/docker"
              element={<Docker />}
            />

            <Route
              path="/kubernetes"
              element={<Kubernetes />}
            />

            <Route
              path="/terraform"
              element={<Terraform />}
            />

            <Route
              path="/aws"
              element={<Aws />}
            />

            <Route
              path="/monitoring"
              element={<Monitoring />}
            />

            <Route
              path="/logs"
              element={<Logs/>}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;