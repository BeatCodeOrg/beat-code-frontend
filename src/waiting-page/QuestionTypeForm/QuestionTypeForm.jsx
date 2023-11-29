import { useState } from "react";

import FilterChoice from "./FilterChoice";
import DifficultyButton from "./DifficultyButton";

const questionCategories = [
  "Algorithms",
  "Hash Table",
  "Dynamic Programming",
  "Sorting",
  "Array",
  "Binary Search",
  "Graph",
  "Greedy",
  "Priority Queue",
];

function QuestionTypeForm() {
  const [qFormData, setQFormData] = useState({
    questionType: [],
    difficulty: [],
  });

  return (
    <div>
      <form className="flex flex-col items-center">
        <h1 className="font-semibold text-3xl my-2 tracking-wider text-title-brown">
          QUESTION TYPE
        </h1>
        <div className="flex flex-wrap " style={{ maxWidth: "15rem" }}>
          {questionCategories.map((category, ind) => (
            <FilterChoice
              key={ind}
              filterName={category}
              updateQData={setQFormData}
            />
          ))}
        </div>
        <h1 className="font-semibold text-3xl my-2 tracking-wider text-title-brown">
          DIFFICULTY
        </h1>
        <div className="flex flex-col items-center my-4 ">
          <img
            className="mb-2"
            src="/assets/waiting-page/Line.png"
            alt="line"
          />
          <div className="flex justify-between w-11/12 -translate-y-6">
            <DifficultyButton label="Easy" updateQData={setQFormData} />
            <DifficultyButton label="Medium" updateQData={setQFormData} />
            <DifficultyButton label="Hard" updateQData={setQFormData} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default QuestionTypeForm;
