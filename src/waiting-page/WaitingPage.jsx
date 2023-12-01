import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./WaitingPage.css";

import PlayerDisplay from "./PlayerDisplay/PlayerDisplay";
import QuestionTypeForm from "./QuestionTypeForm/QuestionTypeForm";

import { useWebSocket } from "../game-socket/WebSocketContext";
import { useUser } from "../use-user-context/UserContext";

const WaitingPage = () => {
  const { roomCode } = useParams();
  const { players, initSocket, setRoomCode, sendMessage } = useWebSocket();
  const { username, userID } = useUser();

  useEffect(() => {
    initSocket(username, userID, roomCode);
    setRoomCode(roomCode);
  }, []);

  const startGame = () => {
    console.log("asdfadsf");
    console.log(players);
    sendMessage(`/app/start-game/${roomCode}`, {});
    console.log(players);
  };

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
              <PlayerDisplay players={players} />
            </div>
            <div className="translate-y-20 translate-x-88">
              <QuestionTypeForm />
            </div>

            <img
              className="polygon"
              alt="Polygon"
              src="/assets/waiting-page/polygon1.png"
              onClick={startGame}
            />
            <img
              className="img"
              alt="Polygon"
              src="/assets/waiting-page/polygon2.png"
              onClick={startGame}
            />
            <div className="text-wrapper-13" onClick={startGame}>
              Start
            </div>
          </div>
          <img
            className="close"
            alt="Close"
            src="/assets/waiting-page/close.png"
          />
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
