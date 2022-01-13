import React from "react";
import Circle from "./Circle";
import Circle2 from "./Circle2";
import Circle3 from "./Circle3";
import "./styles/screen.css";
import { Link } from "react-router-dom";

const Scree1 = () => {
  return (
    <div className="main_div">
      <div className="header">
        <h1 className="heading">My awesome page</h1>
        <p className="para_1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eos
          reprehenderit nihil similique deserunt
        </p>
        <p className="para_2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa
          eligendi libero sed! Et perspiciatis
        </p>
      </div>
      <p className="intro">Step 1 : Answer this awesome question</p>
      <div className="circle_div">
        <div className="circle">
          <Circle />
          <Circle2 />
          <Circle3 />
        </div>
      </div>
      <Link to="/screen2">
        <button className="nextBtn">next</button>
      </Link>
    </div>
  );
};

export default Scree1;
