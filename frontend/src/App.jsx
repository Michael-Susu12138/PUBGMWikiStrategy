import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNews from "./pages/AddNews";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNews />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
