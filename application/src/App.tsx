import "./App.css";
import React from "react";
import MainPage from "components/pages/main";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
