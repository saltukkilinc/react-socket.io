import { useEffect, useState } from "react";
import {io} from "socket.io-client";
import "./App.css";
 


const socket= io("http://localhost:3001");

function App() {
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMessage(data.message)
    })
  }, [socket])

  const sendMessage = () => {
    socket.emit("send_message", {message});
  }

  return (
    <>
      <input type="text" placeholder="message..." onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>

      <h2>Coming Message from another users</h2>
      <p>{receivedMessage}</p>
    </>
  );
}

export default App;
