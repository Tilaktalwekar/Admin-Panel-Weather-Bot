import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./components/Login";
import { AuthProvider } from "./context/auth";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import UpdateToken from "./components/UpdateToken";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard/home" element={<Dashboard />} />
          <Route
            path="/Dashboard/usermanagement"
            element={<UserManagement />}
          />
          <Route path="/Dashboard/updatetoken" element={<UpdateToken />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
