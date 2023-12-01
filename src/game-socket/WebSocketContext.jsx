import { useState, useRef, useEffect, createContext, useContext } from "react";

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

  const [questionId, setQuestionId] = useState(1);
  const [questionText, setQuestionText] = useState(1);
  const [gameState, setGameState] = useState({
    [""]: {
      testCases: 0,
    },
  });
  const [totalTestCases, setTotalTestCases] = useState(0);
  const [codeSubmitCallback, setCodeSubmitCallback] = useState();

  const navigate = useNavigate();

  const playersRef = useRef(players);

  useEffect(() => {
    playersRef.current = players;
  }, [players]);

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

        setPlayers([...newPlayers]);
      });

      stompClient.subscribe(topicURL + "/start-game", (message) => {
        const data = JSON.parse(message.body);

        setPlayers((prev) => {
          const initialGameState = playersRef.current.map((username) => ({
            [username.username]: {
              testsPassed: 0,
            },
          }));

          setGameState((prev) => initialGameState);
          console.log(playersRef.current);
          return playersRef.current;
        });

        console.log("this is: ", players);

        setQuestionId(data.questionId);
        setQuestionText(data.questionText);
        setTotalTestCases(3);

        navigate(`/competition/${roomCode}`);
      });

      stompClient.subscribe(topicURL + "/update-score", (message) => {
        const data = JSON.parse(message.body);
        setGameState(data.gameState);
        setTotalTestCases(data.totalTestCase);
        if (data.from == username) {
          // codeSubmitCallback(data);
        }
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

  function submitCode(username, srcCode, language_id, submitCallback) {
    const payload = {
      code: srcCode,
      username: username,
      questionId: 1,
    };
    // setCodeSubmitCallback(submitCallback);
    sendMessage(`/app/submit-code/${roomCode}`, payload);
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
        playersRef,
        initSocket,
        sendMessage,
        submitCode,
        totalTestCases,
        gameState,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
}

export default WebSocketContextProvider;
