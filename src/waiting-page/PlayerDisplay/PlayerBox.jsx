function PlayerBox({ player }) {
  return (
    <div className="flex items-center m-3 border border-title-brown rounded-lg">
      <div>
        <img
          className="w-16 h-16 rounded-full"
          src="/assets/waiting-page/profile.png"
          alt={player.name + "'s Pic"}
        />
      </div>
      <h1 className="ml-4 text-3xl">{player.username}</h1>
    </div>
  );
}

export default PlayerBox;
