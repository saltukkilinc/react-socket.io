import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:3001");

function App() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMessage(data.message);
    });
  }, [socket]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room)
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="type room number"
          onChange={(e) => setRoom(e.target.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>

      <h2>Coming Message from another users</h2>
      <p>{receivedMessage}</p>
    </>
  );
}

export default App;
