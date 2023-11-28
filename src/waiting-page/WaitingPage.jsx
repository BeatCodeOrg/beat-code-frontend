import React from "react";
import "./WaitingPage.css";

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
            <div className="question-type">
              <div className="question-type-2">QUESTION TYPE</div>
              <div className="choice">
                <div className="div-wrapper">
                  <div className="text-wrapper-2">Algorithms</div>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <div className="text-wrapper-2">Hash Table</div>
                </div>
              </div>
              <div className="choice-2">
                <div className="overlap-3">
                  <div className="text-wrapper-3">Dynamic Programming</div>
                </div>
              </div>
              <div className="choice-3">
                <div className="overlap-4">
                  <div className="text-wrapper-4">Binary Search</div>
                </div>
              </div>
              <div className="choice-4">
                <div className="overlap-5">
                  <div className="text-wrapper-5">Graph</div>
                </div>
              </div>
              <div className="choice-5">
                <div className="overlap-6">
                  <div className="text-wrapper-6">Sorting</div>
                </div>
              </div>
              <div className="choice-6">
                <div className="overlap-7">
                  <div className="text-wrapper-7">Greedy</div>
                </div>
              </div>
              <div className="choice-7">
                <div className="overlap-8">
                  <div className="text-wrapper-8">Priority Queue</div>
                </div>
              </div>
              <div className="choice-8">
                <div className="overlap-9">
                  <div className="text-wrapper-9">Array</div>
                </div>
              </div>
            </div>
            <div className="difficulty">
              <div className="difficulty-2">DIFFICULTY</div>
              <div className="overlap-10">
                <img
                  className="line"
                  alt="Line"
                  src="src/assets/waiting-page/Line.png"
                />
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
              </div>
              <div className="text-wrapper-10">Easy</div>
              <div className="text-wrapper-11">Medium</div>
              <div className="text-wrapper-12">Hard</div>
            </div>
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
