import React from 'react';
import "./GameOver.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const GameOver = () => {
  const { state } = useLocation();
  const players = state?.players || [];
    const navigate = useNavigate();

  return (
    <>
        <div className="title-h2"><strong>Time's up!</strong></div>
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
                <button className="sign-up-button" onClick={() => navigate('/join')}>Leave game</button>
            </div>
        </div>
      </>
  );
};

export default GameOver;