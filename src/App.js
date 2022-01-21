import React from "react";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Scree1 from "./screens/Scree1";
import { Routes, Route } from "react-router-dom";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Scree1 />} />
        <Route path="screen2" element={<Screen2 />} />
        <Route path="screen3" element={<Screen3 />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </>
  );
};

export default App;
