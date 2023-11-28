import { useState } from "react";

import "./DifficultyButton.css";

function DifficultyButton({ label, updateQData }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (!selected) {
      updateQData((prev) => ({
        ...prev,
        difficulty: [...prev.difficulty, label],
      }));
    } else {
      updateQData((prev) => ({
        ...prev,
        difficulty: prev.difficulty.filter((d) => d !== label),
      }));
    }
    setSelected(!selected);
  };
  return (
    <div className="flex flex-col items-center" onClick={handleClick}>
      <div className={`ellipse ${selected ? "filled-ellipse" : ""}`} />
      <p className="text-sm">{label}</p>
    </div>
  );
}

export default DifficultyButton;
