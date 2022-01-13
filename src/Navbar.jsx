import React from "react";
import { UserOutlined, ShoppingFilled } from "@ant-design/icons";
import "./styles/nav.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="logo">company logo</p>
      <div className="navlinks">
        <p>for individuals</p>
        <p>for business</p>
        <p>outreach</p>
        <p>store</p>
        <p>blog</p>
        <p>about</p>
      </div>
      <div className="logo">
        <UserOutlined  style={{fontSize:"3.2vh"}}/>
        <ShoppingFilled  style={{fontSize:"3.2vh"}}/>
      </div>
    </div>
  );
};

export default Navbar;
