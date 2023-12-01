import PlayerBox from "./PlayerBox";

function PlayerDisplay({ players }) {
  return (
    <div className="flex flex-col">
      {players.map((player) => (
        <PlayerBox player={player} />
      ))}
    </div>
  );
}

export default PlayerDisplay;
