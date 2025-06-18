import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutusComp from "./components/AboutusComp";
import Shop from "./components/Shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutusComp />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default App;
