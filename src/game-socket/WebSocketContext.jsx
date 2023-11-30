import { useState, createContext, useContext } from "react";

import SockJS from "sockjs-client";
import Stomp from "stompjs";

export const WebSocketContext = createContext(null);

export function useWebSocket() {
  return useContext(WebSocketContext);
}

function WebSocketContextProvider({ children }) {
  const [stompClient, setStompClient] = useState(null);
  const [players, setPlayers] = useState([]);

  function GameSocket(url, username, roomCode) {
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame) => {
      console.log("Connected: " + frame);
      stompClient.subscribe(`/topic/room/${roomCode}`, (message) => {
        console.log(message);
      });
    });

    return stompClient;
  }

  function initSocket(username, id, roomCode) {
    const gs = GameSocket("http://localhost:8080/ws", username, roomCode);
    setStompClient(gs);
  }

  function sendMessage(url, payload) {}

  return (
    <WebSocketContext.Provider
      value={{ stompClient, players, initSocket, sendMessage }}
    >
      {children}
    </WebSocketContext.Provider>
  );
}

export default WebSocketContextProvider;
