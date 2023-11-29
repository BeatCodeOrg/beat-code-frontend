import React from 'react';

const ProgressBar = ({ players, height }) => {
  const Parentdiv = {
    height: height,
    width: '90%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 10,
    position: 'relative',
    border: '2px solid #000',
  };

//   const progresstext = {
//     padding: 8,
//     color: 'black',
//     fontWeight: 900,
//   };

  return (
    <div style={Parentdiv}>
      {players.map((player, index) => (
        <div>
            <div
            key={index}
            style={{
                height: '100%',
                position: 'absolute',
                left: 0,
                width: `${player.progress}%`,
                // backgroundColor: player.bgcolor,
                borderRadius: 40,
                textAlign: 'right',
            }}
            >
            {/* <span style={progresstext}>{`${player.progress}%`}</span> */}
            </div>

            <div
            style={{
              position: 'absolute',
              left: `${player.progress}%`,
              top: '50%', // Center vertically
              transform: 'translate(-50%, -50%)', // Center horizontally
              width: '48px',
              height: '48px',
              backgroundColor: player.bgcolor,
              borderRadius: '50%',
              border: '2px solid #000',
            }}
          />
        </div>
        
      ))}
    </div>
  );
};

export default ProgressBar;
