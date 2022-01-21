import React from "react";
import "../styles/circle.css";
import option from "../option";
import Option from "./Option";

const Circle3 = () => {
  return (
    <div className="circle">
      <div className="circle_main">
        <p className="number">3</p>
        <div className="circle_body3">
          <p>Pic 3</p>
        </div>
      </div>
      <div className="stpe_info">
        <p className="item">Item 3</p>
        <p className="select">select one option</p>
        {
          option.map((data,index)=>(
            <Option data={data} key={index}/>
          ))
        }
        
      </div>
    </div>
  );
};

export default Circle3;
