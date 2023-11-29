import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import JoinPage from "./join-page/JoinPage";
import LandingPage from "./landing-page/LandingPage";
import FullCompPage from "./competition-page/FullCompPage";
import SignUp from "./sign-up-page/SignUp";
import GameOver from "./game-over/GameOver";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/competition" element={<FullCompPage />} />
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/gameover" element={<GameOver />} />
    </Routes>
  );
}

export default App;
