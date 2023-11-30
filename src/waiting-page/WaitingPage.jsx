import React from "react";
import "./WaitingPage.css";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import QuestionTypeForm from "./QuestionTypeForm/QuestionTypeForm";
import SocketHelper from "../tools/SocketHelper";
const WaitingPage = () => {
   const [arr,changeArr] = useState([]);
   const [roomCode,changeRoomCode] = useState(sessionStorage.getItem('roomCode'));
   let socket;
   const useRoute = useNavigate();
  useEffect(()=>{
  changeRoomCode(el=>sessionStorage.getItem('roomCode'));
  let username = sessionStorage.getItem('username');
  const {createSocket} = SocketHelper;
     socket = createSocket('room-join/9903',JSON.stringify({roomCode,userName:username}));
     socket.onopen = function(){
       socket.send(JSON.stringify({roomCode,userName:username}));
     };
    socket.onmessage =  function(message){
       const {data} = message;
       const userData   = JSON.parse(data);
       if(userData.body == null){
          socket.close();
          useRoute('/competition');
       }
       else {
        let list = userData.body;
        changeArr(pre=>[...list]);
       }
   }
  },[]);
  const startExam = async()=>{
     let data = await fetch(`http://localhost:8080/room/start-exam/${roomCode}`,{
      method:'POST'
     })
  }
 
  return (
    <div className="session-creator">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="group"
              alt="Group"
              src="src/assets/waiting-page/computer.png"
            />

            <div className="box">
              <div
                className="rectangle"
                style={{ zIndex: -1 }}
                src="src/assets/waiting-page/rectangle.png"
              />
            </div>
            <div className="div" >
              <h1>PLAYERS</h1>
                {arr.map((e,index)=><div key ={e.username}style={{width:"100px",height:"30px",marginTop:"15px"}}>{e.username}</div>)}
            </div>
            <div className="translate-y-20">
              <QuestionTypeForm />
            </div>

            <img
              className="polygon"
              alt="Polygon"
              src="src/assets/waiting-page/polygon1.png"
            />
            <img
              className="img" id = "smaller_polygon"
              alt="Polygon"
              src="src/assets/waiting-page/polygon2.png"
            />
            <div className="text-wrapper-13" onClick={startExam}>Start</div>
          </div>
          <img className="close" alt="Close" src="close.png" />
        </div>
      </div>

      <img
        className="surface-laptop"
        alt="Surface laptop"
        src="src/assets/waiting-page/surfacelaptop.png"
      />
      <img
        className="vector"
        alt="Vector"
        src="src/assets/waiting-page/vector1.png"
      />

      <p className="code">
        <span className="text-wrapper">
          Code:
          <br />
        </span>
        <span className="span">{roomCode}</span>
      </p>
    </div>
  );
};

export default WaitingPage;
