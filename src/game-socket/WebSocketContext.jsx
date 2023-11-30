import { createContext, useContext } from "react";

export const WebSocketContext = createContext(null);
export function useWebSocket() {
  return useContext(WebSocketContext);
}

function WebSocketContextProvider({ children }) {
  const [stompClient, setStompClient] = useState(null);
  const [players, setPlayers] = useState([]);

  return (
    <WebSocketContext.Provider
      value={{ stompClient, setStompClient, players, setPlayers }}
    >
      {children}
    </WebSocketContext.Provider>
  );
}
