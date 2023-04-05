import React from "react";
import "./Middle.css";
import Carousel1 from "../Resources/carousel-image1.png";
import Carousel2 from "../Resources/carousel-image2.png";

function Middle() {
  return (
    <div className="mid">
      <div className="mid__left">
        <h1>01.</h1>
        <h5>History</h5>
      </div>
      <div className="mid__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="mid__buttom">
        <div className="carousel">
          <div className="carousel__images">
            <img src={Carousel1} alt="" />
            <img src={Carousel2} alt="" />
            <img src={Carousel1} alt="" />
            <img src={Carousel2} alt="" />
          </div>
          <div className="dot">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="mid__footer">
          <div className="mid__footer-left">
            <h1>02.</h1>
            <h5>Climb</h5>
          </div>
          <div className="mid__footer-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
