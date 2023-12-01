function PlayerBox({ player }) {
  return (
    <div className="flex items-center m-3 border-2 border-title-brown rounded-lg">
      <div>
        <img
          className="m-1 border border-title-brown w-16 h-16 rounded-full"
          src="/assets/default-profile.jpg"
          alt={player.username + "'s Pic"}
        />
      </div>
      <h1 className="ml-4 text-3xl">{player.username}</h1>
    </div>
  );
}

export default PlayerBox;
