import React from "react";
import "./Bottom.css";
import logo from "../Resources/logo.png";

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom__header">
        <span className="bottom__header-1">MOUNTAIN 1</span>
        <span className="bottom__header-2">MOUNTAIN 2</span>
      </div>

      <div className="schedule">
        <h1>SCHEDULE</h1>
        <p>
          <span className="schedule__span1">25 Nov 2016</span>
          <span className="schedule__span2">Vestibulum viverra</span>
        </p>
        <p>
          <span className="schedule__span1">28 Nov 2016</span>
          <span className="schedule__span2">Vestibulum viverra</span>
        </p>
        <br />
        <p>
          <span className="schedule__span1">18 Dec 2016</span>
          <span className="schedule__span2">Vestibulum viverra</span>
        </p>
        <br />
        <p>
          <span className="schedule__span1">7 Jan 2017 </span>
          <span className="schedule__span2"> Vestibulum viverra</span>
        </p>
      </div>
      <div className="bottom__footer">
        <div className="bottom__footer-left">
          <img src={logo} alt="" className="logo" />
          <div className="bottom__footer-leftText">
            <p>LOSANGELES</p>
            <p>MOUNTAINS</p>
          </div>
        </div>
        <div className="bottom__footer-right">
          COPYRIGHT 2016. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}

export default Bottom;
