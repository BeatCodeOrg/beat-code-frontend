function PlayerBox({ player }) {
  return (
    <div className="w-1/4 flex">
      <div>
        <img src="" alt={player.name + "'s Pic"} />
      </div>
      <h1>{player.username}</h1>
    </div>
  );
}

export default PlayerBox;
