# React TypeScript Socket.io Project

> Go to the server folder and **yarn start**.


> Go to the client folder and **yarn dev**.

> To observe how this app work open at least two browsers. Because this is a chat app so we need two messengers.

> In the socket-specific-room branch, It can be observed different ways of using the WebSocket which allows us to send a message only in a private room. 

* There are two main folders in this project. 
* In the client folder, there is our Frontend application which is running on the 5173.
* In the server folder, there is our backend server which is composed by using express which is running on the 3001.
* I have nodemon package in this app which is defined in scripts as yarn start in the package.json to start the server.
* **Nodemon** package keeps watching on the server and if there is a change restart the server automatically.
* I also installed **cors** which is necessary to connect the server in a React application.