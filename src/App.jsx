import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutusComp from "./components/AboutusComp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutusComp />} />
      </Routes>
    </>
  );
};

export default App;
