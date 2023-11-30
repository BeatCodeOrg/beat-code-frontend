import "./JoinPage.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function JoinPage() {
  const navigate = useNavigate();
   const createNewRoom =  ()=>{
        let roomCode = 'room'+Math.floor(Math.random()*1000);
        sessionStorage.setItem('roomCode',roomCode);
        navigate('/wait-page');
   }
    const [inputValue,changeValue] = useState('');
    const toJoinRoom = ()=>{
         sessionStorage.setItem('roomCode',inputValue);
         navigate('/wait-page')
    }
  return (
    <div className="join-page">
      <svg
        className="join-page__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1307 1117"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M0 0H1307C1307 0 1144.008 265.6 1307 558.5C1469.77 851.4 1307 1117 1307 1117H0V0Z"
          fill="url(#paint0_linear_23_233)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_23_233"
            x1="488.5"
            y1="0"
            x2="488.5"
            y2="1117"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AD3432" />
            <stop offset="1" stop-color="#F2AB6C" />
          </linearGradient>
        </defs>
      </svg>

      {/* NAV BAR */}
      <div className="navBar">
        <div className="navBarLogo">
          <img src="src/assets/logo.png" alt="BEATCODE logo" />
        </div>
        <h1>BeatCode</h1>
      </div>

      <div className="container">
        <div className="leftSide">
          <h3 id="left_text"> I want to </h3>

          <h1 id="left_main_text"> Make a Room </h1>

          <button id="generateRoom" onClick={createNewRoom}> Generate New Room </button>
        </div>

        <div className="rightSide">
          <h3 id="right_text"> I want to </h3>

          <h1 id="right_main_text"> Join a Game </h1>

          <input type="text" id="room_code" value={inputValue}  placeholder="ENTER ROOM CODE" onChange={(e)=>changeValue(()=>e.target.value)} />
          <button style={{width:'200px',height:'30px', marginTop:'20px',border:'1px solid black',borderRadius:'5px',background:'#1296db',color:'white',zIndex:3}} onClick={toJoinRoom}>Join Game</button>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;
