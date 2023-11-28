import React from "react";
import "./WaitingPage.css";

import QuestionTypeForm from "./QuestionTypeForm/QuestionTypeForm";

const WaitingPage = () => {
  return (
    <div className="session-creator">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="group"
              alt="Group"
              src="src/assets/waiting-page/computer.png"
            />

            <div className="box">
              <div
                className="rectangle"
                src="src/assets/waiting-page/rectangle.png"
              />
            </div>
            <div className="div">PLAYERS</div>

            <QuestionTypeForm />

            <img
              className="polygon"
              alt="Polygon"
              src="src/assets/waiting-page/polygon1.png"
            />
            <img
              className="img"
              alt="Polygon"
              src="src/assets/waiting-page/polygon2.png"
            />
            <div className="text-wrapper-13">3...</div>
          </div>
          <img className="close" alt="Close" src="close.png" />
        </div>
      </div>

      <img
        className="surface-laptop"
        alt="Surface laptop"
        src="src/assets/waiting-page/surfacelaptop.png"
      />
      <img
        className="vector"
        alt="Vector"
        src="src/assets/waiting-page/vector1.png"
      />

      <p className="code">
        <span className="text-wrapper">
          Code:
          <br />
        </span>
        <span className="span">AJ48Y</span>
      </p>
    </div>
  );
};

export default WaitingPage;
