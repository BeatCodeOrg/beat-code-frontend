import React from "react";
import { useWebSocket } from "../game-socket/WebSocketContext";

const ProgressBar = ({ height }) => {
  const { gameState, totalTestCases } = useWebSocket();

  const Parentdiv = {
    height: height,
    width: "65%",
    backgroundColor: "#fff3de",
    borderRadius: 40,
    margin: 10,
    position: "relative",
    border: "2px solid #000",
  };

  //   const progresstext = {
  //     padding: 8,
  //     color: 'black',
  //     fontWeight: 900,
  //   };

  console.log("gameState: ", gameState, "totalTestCases: ", totalTestCases);
  return (
    <div style={Parentdiv}>
      {Object.keys(gameState).map((username, ind) => (
        <div key={ind}>
          <div
            style={{
              height: "100%",
              position: "absolute",
              left: 0,
              width: `${
                100 * (gameState[username].testsPassed / totalTestCases)
              }%`,
              // backgroundColor: player.bgcolor,
              borderRadius: 40,
              textAlign: "right",
            }}
          >
            {/* <span style={progresstext}>{`${player.progress}%`}</span> */}
          </div>

          <div
            style={{
              position: "absolute",
              left: `${
                100 * (gameState[username].testsPassed / totalTestCases)
              }%`,
              top: "50%", // Center vertically
              transform: "translate(-50%, -50%)", // Center horizontally
              width: "48px",
              height: "48px",
              backgroundColor: "red",
              borderRadius: "50%",
              border: "2px solid #000",
            }}
          />
        </div>
      ))}
    </div>
  );
};

//
export default ProgressBar;
