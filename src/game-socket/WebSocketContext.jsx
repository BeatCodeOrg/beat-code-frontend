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
    const socket = new SockJS("http://127.0.0.1:8080/ws");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame) => {
      stompClient.subscribe(`/topic/room/${roomCode}`, (message) => {
        const data = JSON.parse(message.body);
        const newPlayers = data.users.map((user) => ({
          username: user,
        }));
        setPlayers(newPlayers);
      });

      stompClient.connect();
      stompClient.send(`/app/connect/${roomCode}/${username}`, {});
      console.log("hello");
    });

    return stompClient;
  }

  function initSocket(username, id, roomCode) {
    const gs = GameSocket("http://localhost:8080/ws", username, roomCode);
    setStompClient(gs);
  }

  function sendMessage(url, payload) {
    stompClient.send(url, {}, JSON.stringify(payload));
  }

  return (
    <WebSocketContext.Provider
      value={{ stompClient, players, initSocket, sendMessage }}
    >
      {children}
    </WebSocketContext.Provider>
  );
}

export default WebSocketContextProvider;
