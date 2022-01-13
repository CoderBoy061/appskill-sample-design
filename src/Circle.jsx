import React from "react";
import "./styles/circle.css";

const Circle = () => {
  return (
    <div className="circle">
      <div className="circle_main">
        <p className="number">1</p>
        <div className="circle_body">
          <p>Pic 1</p>
        </div>
      </div>
      <div className="stpe_info">
        <p className="item">Item 1</p>
        <p className="select">select one option</p>
        <p className="otions">
          Option 1 Option 2 Option 3 Option 4 Option 5 Option 6
        </p>
      </div>
      
    </div>
  );
};

export default Circle;
