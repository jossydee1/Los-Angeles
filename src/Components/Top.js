import React from "react";
import "./Top.css";
import logo from "../Resources/logo.png";

function Top() {
  return (
    <div className="top">
      <div className="topHeader">
        <img src={logo} alt="" className="logo" />
        <div className="top__right">
          <a href="">
            <p>01. History</p>
          </a>
          <a href="">
            <p>02. Team</p>
          </a>
        </div>
      </div>

      <div className="top__text">
        <p className="top__text-1">LOSANGELES</p>
        <p className="top__text-2">MOUNTAINS</p>
      </div>
      <div className="top__footer">
        <div className="top__footer-left">
          <img src={logo} alt="" className="logo" />
          <div className="top__footer-leftText">
            <p>LOSANGELES</p>
            <p>MOUNTAINS</p>
          </div>
        </div>
        <div className="top__footer-right">
          <a href="">
            <p>01. History</p>
          </a>
          <a href="">
            <p>02. Team</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
