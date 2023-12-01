import React from "react";
import "./GameOver.css";
import { useNavigate } from "react-router-dom";
import { useWebSocket } from "../game-socket/WebSocketContext";

const GameOver = () => {
  const { gameState } = useWebSocket();
  const navigate = useNavigate();

  const players = Object.keys(gameState).map((username, ind) => ({
    username: username,
    testCasesPassed: gameState[username].testsPassed,
    pointsGained: gameState[username].testsPassed * 10,
  }));

  players.sort((a, b) => b.pointsGained - a.pointsGained);
  return (
    <>
      <div className="title-h2">
        <strong>Time's up!</strong>
      </div>
      {/* NOTE THAT BELOW IS COPIED FROM SIGN UP PAGE SO CLASS NAME IS NOT ACCURATE */}
      <div className="sign-up-container">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Test Cases Passed</th>
              <th>Points Gained</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index}>
                <td>{player.username}</td>
                <td>{player.testCasesPassed}</td>
                <td>{player.pointsGained}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="sign-up-btn-container">
          <button className="sign-up-button" onClick={() => navigate("/join")}>
            Leave game
          </button>
        </div>
      </div>
    </>
  );
};

export default GameOver;
