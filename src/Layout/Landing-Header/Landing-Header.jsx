import React from "react";
import "./Landing-Header.css";
import logo from "../../Assets/logo.png";
function LandingHeader() {
  return (
    <div className="land-header">
      <img src={logo} alt="" className="logo" />
      <div className="btn-div">
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    </div>
  );
}

export default LandingHeader;
