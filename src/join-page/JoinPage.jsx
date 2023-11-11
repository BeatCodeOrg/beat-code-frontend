import "./JoinPage.css";

function JoinPage() {
  return (
    <div className="join-page">
      <svg
        className="join-page__svg"
        xmlns="http://www.w3.org/2000/svg"
        width="982"
        height="1117"
        viewBox="0 0 982 1117"
        fill="none"
      >
        <path
          d="M-5 0H865.387C865.387 0 603.008 265.6 865.387 558.5C1127.77 851.4 865.387 1117 865.387 1117H-5V0Z"
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
      <div className = "navBar">
                <div className = "navBarLogo"><img src="src/assets/logo.png" alt="BEATCODE logo"/></div> 
                <h1>BeatCode</h1> 
      </div>

      <div className="container">
      <div className = "leftSide"> 
      
      <h3 id="left_text"> I want to </h3>

      <h1 id="left_main_text"> Make a Room </h1>

      <button id = "generateRoom"> Generate New Room </button>
      
      </div>
      
      <div className="VL"></div>

      <div className="rightSide">

      <h3 id = "right_text"> I want to </h3>

      <h1 id="right_main_text"> Join a Game </h1>

      <input type="text" id = "RoomCode" placeholder="Enter Room Code" />
      </div>

      </div>
    </div>
  );
}

export default JoinPage;
