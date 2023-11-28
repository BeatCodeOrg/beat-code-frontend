import { useState } from "react";

import "./FilterChoice.css";

function FilterChoice({ filterName, updateQData }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      updateQData((prev) => ({
        ...prev,
        questionType: [...prev.questionType, filterName],
      }));
    } else {
      updateQData((prev) => ({
        ...prev,
        questionType: prev.questionType.filter((d) => d !== filterName),
      }));
    }
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-2 mx-1 my-1 inline div-wrapper ${
        isClicked ? "when-clicked" : "when-not-clicked"
      }`}
    >
      <h1 className="text-wrapper">{filterName}</h1>
    </div>
  );
}

export default FilterChoice;
