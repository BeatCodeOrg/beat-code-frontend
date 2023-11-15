import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import JoinPage from "./join-page/JoinPage";
import PopUp from "./landing-page/PopUp";
import FullCompPage from "./competition-page/FullCompPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PopUp />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/competition" element={<FullCompPage />} />
    </Routes>
  );
}

export default App;
