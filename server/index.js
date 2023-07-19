import http from "http";
import express from "express";
import { Server } from "socket.io";
import cors from "cors";


const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // console.log(`user connected ${socket.id}`)

  socket.on("send_message", (data) => {
    // console.log(data.message)
    socket.broadcast.emit("receive_message", data)
  })
})

server.listen(3001, () => {
  console.log("server is running");
});
