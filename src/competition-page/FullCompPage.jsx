import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompetitionPage from "./CompetitionPage";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

import { useWebSocket } from "../game-socket/WebSocketContext";

function FullCompPage() {
  // this will need to be passed in
  const { gameState } = useWebSocket();

  const navigate = useNavigate();

  const handleTimerZero = () => {
    navigate("/gameover", { state: { ...gameState } });
  };

  return (
    <>
      {/* <div className="flex flex-col h-screen"> */}
      <div className="top-bar flex justify-start px-5 pt-5">
        <div className="w-24">
          {" "}
          {/* Set a fixed width for the Timer component */}
          <Timer onTimerZero={handleTimerZero} />
        </div>
        <ProgressBar height={25} />
      </div>
      <div className="full-competition-page flex-grow flex">
        <div className="left-problem-desc border-black border-2 ml-5 mb-8 mt-2 w-[30%] h-[88vh] rounded bg-[#2b363c] text-[#d3d1cf]">
          <h2 className="problem-desc-title uppercase underline pl-5 pt-3 text-4xl font-bold tracking-wider relative">
            Two Sum
          </h2>
          <p id="question-description" className="problem-desc p-5">
            Given an array of integers <code>nums</code>&nbsp;and an integer{" "}
            <code>target</code>, return{" "}
            <em>
              indices of the two numbers such that they add up to{" "}
              <code>target</code>
            </em>
            .
            <br />
            <br />
            You may assume that each input would have{" "}
            <strong>
              <em>exactly</em> one solution
            </strong>
            , and you may not use the <em>same</em> element twice.
            <br />
            <br />
            You can return the answer in any order.
            <br />
            <br />
            <strong>Example:</strong>
            <br />
            <strong>Input:</strong> <code>nums = [2,7,11,15], target = 9</code>
            <br />
            <strong>Output:</strong> <code>[0,1]</code>
            <br />
            <strong>Explanation:</strong> <code>nums[0] + nums[1] == 9</code>
          </p>
        </div>
        <div className="right-IDE w-[70%] pl-6 top-4 left-[30%] fixed">
          <CompetitionPage />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default FullCompPage;
