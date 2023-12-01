const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="text-xs">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {"adsfadsfasdfa"}
        </span>
      </p>
      {/* <p className="text-xs">
          {outputDetails?.status?.description}
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-amber-200">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-xs">
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-amber-200">
          {outputDetails?.time}
        </span>
      </p>
        */}
    </div>
  );
};

export default OutputDetails;
