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
      className={`mx-1 my-1 inline filter-div ${
        isClicked ? "when-clicked" : "when-not-clicked"
      }`}
    >
      <h1 className="filter-text text-md">{filterName}</h1>
    </div>
  );
}

export default FilterChoice;
