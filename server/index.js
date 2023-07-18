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
    methods: ['GET', 'POST']
  }
});

server.listen(3001, () => {
  console.log("server is running")
})
