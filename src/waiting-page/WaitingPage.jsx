import React from "react";
import { useParams } from "react-router-dom";

import "./WaitingPage.css";

import PlayerDisplay from "./PlayerDisplay/PlayerDisplay";
import QuestionTypeForm from "./QuestionTypeForm/QuestionTypeForm";

const WaitingPage = () => {
  const { roomCode } = useParams();
  return (
    <div className="session-creator">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="group"
              alt="Group"
              src="/assets/waiting-page/computer.png"
            />

            <div className="box">
              <div
                className="rectangle"
                style={{ zIndex: -1 }}
                src="/assets/waiting-page/rectangle.png"
              />
            </div>
            <div className="div">
              <h1>PLAYERS</h1>
              <PlayerDisplay />
            </div>
            <div className="type-form">
              <QuestionTypeForm />
            </div>

            <img
              className="polygon"
              alt="Polygon"
              src="/assets/waiting-page/polygon1.png"
            />
            <img
              className="img" id = "smaller_polygon"
              alt="Polygon"
              src="/assets/waiting-page/polygon2.png"
            />
            <div className="text-wrapper-13">3...</div>
          </div>
          <img className="close" alt="Close" src="close.png" />
        </div>
      </div>

      <img
        className="surface-laptop"
        alt="Surface laptop"
        src="/assets/waiting-page/surfacelaptop.png"
      />
      <img
        className="vector"
        alt="Vector"
        src="/assets/waiting-page/vector1.png"
      />

      <p className="code">
        <span className="text-wrapper">
          Code:
          <br />
        </span>
        <span className="span">{roomCode}</span>
      </p>
    </div>
  );
};

export default WaitingPage;
