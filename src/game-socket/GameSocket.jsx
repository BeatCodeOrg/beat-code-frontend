import SockJS from "sockjs-client";
import Stomp from "stompjs";

export function GameSocket(url, username, roomCode) {
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
