import "./JoinPage.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// for testing userContext works:
import { useUser } from "../use-user-context/UserContext";

function JoinPage() {
  const [typedRoomCode, setTypedRoomCode] = useState("");
  const navigate = useNavigate();

  // for testing userContext works:
  const { username } = useUser();

  function handleJoinRoomInput(e) {
    setTypedRoomCode(e.target.value);
  }

  function onEnterKey(e) {
    if (e.key === "Enter") {
      joinRoom();
    }
  }

  const generateRoom = async () => {
    const response = await fetch(
      "http://localhost:8080/rooms/create/" + username,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      const data = await response.json();
      navigate(`/session/${data.room_code}`);
    }
  };

  const joinRoom = async () => {
    const response = await fetch(
      `http://localhost:8080/rooms/${typedRoomCode}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.message === "found-room") {
      navigate(`/session/${typedRoomCode}`);
    } else {
      alert("Room not found");
    }
  };
  return (
    <div className="join-page">
      <svg
        className="join-page__svg"
        xmlns="http://www.w3.org/2000/svg"
        width="1307"
        height="1117"
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
            <stop stopColor="#AD3432" />
            <stop offset="1" stopColor="#F2AB6C" />
          </linearGradient>
        </defs>
      </svg>

      {/* NAV BAR */}
      <div className="navBar">
        <div className="navBarLogo">
          <img src="/assets/logo.png" alt="BEATCODE logo" />
        </div>
        <h1>BeatCode</h1>
      </div>

      <div className="container">
        <div className="leftSide">
          <h3 id="left_text"> I want to </h3>

          <h1 id="left_main_text"> Make a Room </h1>

          <button id="generateRoom" onClick={generateRoom}>
            {" "}
            Generate New Room{" "}
          </button>
        </div>

        <div className="rightSide">
          <h3 id="right_text"> I want to </h3>

          <h1 id="right_main_text"> Join a Game </h1>

          <input
            type="text"
            id="RoomCode"
            placeholder="Enter Room Code"
            onChange={handleJoinRoomInput}
            onKeyPress={onEnterKey}
          />
        </div>
      </div>
    </div>
  );
}

export default JoinPage;
