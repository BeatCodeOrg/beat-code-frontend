import React from "react";
import { useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import './RoomPage.css';
import  SocketHelper  from "../tools/SocketHelper";




class RoomPage extends React.Component{

    constructor(props){
      super(props);
      console.log(sessionStorage.getItem('roomCode'))
      this.state = {
        dataList:[],
        name:'zs'
     }
    }
   
    startTest = ()=>{}
   
    componentDidMount(){
      let roomCode = '9960718';
      let username = 'admin'+Math.floor(Math.random()*100);
      const {createSocket} = SocketHelper;
        const socket = createSocket('room-join/9903',JSON.stringify({roomCode,userName:username}));
         socket.onopen = function(){
           socket.send(JSON.stringify({roomCode,userName:username}));
         };
      const   moduleThis = this;
        socket.onmessage =  function(message){
           const {data} = message;
           const userData   = JSON.parse(data);
          let list = userData.body;
          console.log(list)
           moduleThis.setState({dataList:[...list]});
       }
     
    }
    componentWillUnmount(){
      console.log('页面被卸载了！！');
    }
  
    
  
   
    render(){
        return (
            <div>
              <div>
                  <span>Room-Number</span>
              </div>
              <ul class="room_user_list">
                {this.state.dataList.map((e)=><div>
                    <span className="userName">{e.username}</span>
                    <span className="usnerName">{e.roomCode}</span>                   
                </div>)}
              </ul>
              <button class="start_bt">Start Test</button>
            </div>
        );  
    }

}
export default RoomPage;
