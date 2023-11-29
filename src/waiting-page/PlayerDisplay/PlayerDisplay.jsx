import PlayerBox from "./PlayerBox";

function PlayerDisplay() {
  return (
    <div className="flex flex-col">
      <PlayerBox player={{ username: "seanyboy", name: "Sean" }} />
      <PlayerBox player={{ username: "vishyboy", name: "Vish" }} />
    </div>
  );
}

export default PlayerDisplay;
