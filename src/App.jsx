import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { WebSocketContext } from "./game-socket/WebSocketContext";

import JoinPage from "./join-page/JoinPage";
import LandingPage from "./landing-page/LandingPage";
import FullCompPage from "./competition-page/FullCompPage";
import WaitingPage from "./waiting-page/WaitingPage";
import SignUp from "./sign-up-page/SignUp";
import GameOver from "./game-over/GameOver";

function App() {
  return (
    <WebSocketContext.Provider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/competition" element={<FullCompPage />} />
        <Route path="/session/:roomCode" element={<WaitingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>
    </WebSocketContext.Provider>
  );
}

export default App;
