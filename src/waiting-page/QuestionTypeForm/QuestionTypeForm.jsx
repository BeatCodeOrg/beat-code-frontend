import FilterChoice from "./FilterChoice";
import DifficultyButton from "./DifficultyButton";

function QuestionTypeForm() {
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

  return (
    <div>
      <form className="flex flex-col items-center">
        <h1 className="font-semibold text-3xl my-2 tracking-wider">
          QUESTION TYPE
        </h1>
        <div className="flex flex-wrap " style={{ maxWidth: "15rem" }}>
          {questionCategories.map((category, ind) => (
            <FilterChoice key={ind} filterName={category} />
          ))}
        </div>
        <h1 className="font-semibold text-3xl my-2 tracking-wider">
          DIFFICULTY
        </h1>
        <img src="src/assets/waiting-page/Line.png" alt="line" />
        <DifficultyButton />
      </form>
    </div>
  );
}

export default QuestionTypeForm;
