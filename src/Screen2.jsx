import React from 'react';
import { Link } from "react-router-dom";
import Circle from "./Circle";
import Circle2 from "./Circle2";

const Screen2 = () => {
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
        <p className="intro">Step 2 : Answer this  question</p>
        <div className="circle_div">
          <div className="circle">
            <Circle />
            <Circle2 />
          </div>
        </div>
        <div className="btns">
        <Link to="/">
          <button className="backBtn">Back</button>
        </Link>
        <Link to="/screen3">
          <button className="nextBtn">next</button>
        </Link>
        </div>
       
      </div>
    )
}

export default Screen2;
