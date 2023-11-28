import { useState } from "react";

import "./FilterChoice.css";

function FilterChoice({ filterName }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      console.log("dsfafsd");
    } else {
      console.log("dsfafsd");
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
