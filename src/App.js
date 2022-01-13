import React from "react";
import Navbar from "./Navbar";
import Scree1 from "./Scree1";
import { Routes, Route } from "react-router-dom";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Scree1 />} />
        <Route path="screen2" element={<Screen2 />} />
        <Route path="screen3" element={<Screen3 />} />
      </Routes>
    </>
  );
};

export default App;
