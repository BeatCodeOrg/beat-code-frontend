import FilterChoice from "./FilterChoice";

function QuestionFilterForm() {
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
      <form>
        <h1>QUESTION TYPE</h1>
        <div className="flex flex-wrap " style={{ maxWidth: "15rem" }}>
          {questionCategories.map((category, ind) => (
            <FilterChoice key={ind} filterName={category} />
          ))}
        </div>
      </form>
    </div>
  );
}

export default QuestionFilterForm;
