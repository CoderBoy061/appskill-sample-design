import React from 'react';
import Circle from "../components/Circle";
import Circle2 from "../components/Circle2";
import Circle3 from "../components/Circle3"
import { Link } from "react-router-dom";

const Screen3 = () => {
  // const nextBtn = ()=>{
  //   <Circle />
  // }
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
        <p className="intro">Step 3 : Answer this</p>
        <div className="circle_div">
          <div className="circle">
            <Circle />
            <Circle2 />
            <Circle3 />
          </div>
        </div>
        <div className="btns">
        <Link to="/screen2">
          <button className="backBtn" >Back</button>
        </Link>
        <Link to="/result">
          <button className="nextBtn">submit</button>
        </Link>
        </div>
      </div>
    )
}

export default Screen3;
