import React from 'react';
import { useEffect } from 'react';
import "./GameOver.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const GameOver = () => {
  const { state } = useLocation();
    const navigate = useNavigate();
    const [rankArray,setRankArray] = useState([]);
    const  pointsGained = sessionStorage.getItem('userGrade');
    const username = sessionStorage.getItem('username');
    const players = [{username,pointsGained,testCasesPassed:'YES'}]
   useEffect(()=>{
    async  function  getRankList(){
      let data = await fetch('http://localhost:8080/judge/getRankList',{
        method:'POST'
     });
     let dataList = await data.json();
      setRankArray(()=>dataList.body);
    }
      setTimeout(()=>{getRankList()},3000)
   },[]);
  return (
    <>
        <div className="title-h2"><strong>Time's up!</strong></div>
        {/* NOTE THAT BELOW IS COPIED FROM SIGN UP PAGE SO CLASS NAME IS NOT ACCURATE */}
        <div className="sign-up-container">
            <table>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Test Cases Passed</th>
                    <th>Points Gained</th>
                </tr>
                </thead>
                <tbody>
                {rankArray.map((player, index) => (
                    <tr key={index}>
                    <td>{player.username}</td>
                    <td>5</td>
                    <td>{player.grade}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="sign-up-btn-container">
                <button className="sign-up-button" onClick={() => navigate('/join')}>Leave game</button>
            </div>
        </div>
      </>
  );
};

export default GameOver;
