import { useState, createContext, useContext } from "react";

import SockJS from "sockjs-client";
import Stomp from "stompjs";

import { useNavigate } from "react-router-dom";
export const WebSocketContext = createContext(null);

export function useWebSocket() {
  return useContext(WebSocketContext);
}

function WebSocketContextProvider({ children }) {
  const [stompClient, setStompClient] = useState(null);
  const [roomCode, setRoomCode] = useState("");
  const [players, setPlayers] = useState([]);

  const navigate = useNavigate();

  function GameSocket(url, username, roomCode) {
    const socket = new SockJS("http://127.0.0.1:8080/ws");
    const stompClient = Stomp.over(socket);

    const topicURL = `/topic/room/${roomCode}`;

    stompClient.connect({}, (frame) => {
      stompClient.subscribe(topicURL, (message) => {
        const data = JSON.parse(message.body);
        const newPlayers = data.users.map((user) => ({
          username: user,
        }));
        setPlayers(newPlayers);
      });

      stompClient.subscribe(topicURL + "/start-game", (message) => {
        navigate(`/competition/${roomCode}`);
      });

      stompClient.connect();
      stompClient.send(`/app/connect/${roomCode}/${username}`, {});
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
      value={{
        stompClient,
        roomCode,
        setRoomCode,
        players,
        initSocket,
        sendMessage,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
}

export default WebSocketContextProvider;
