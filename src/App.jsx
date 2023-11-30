import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import JoinPage from "./join-page/JoinPage";
import LandingPage from "./landing-page/LandingPage";
import FullCompPage from "./competition-page/FullCompPage";
import WaitingPage from "./waiting-page/WaitingPage";
import QuestionTypeForm from "./waiting-page/QuestionTypeForm/QuestionTypeForm";
import SignUp from "./sign-up-page/SignUp";
import GameOver from "./game-over-page/GameOver";

import { UserProvider } from "./use-user-context/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/competition" element={<FullCompPage />} />
        <Route path="/session/:roomCode" element={<WaitingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
