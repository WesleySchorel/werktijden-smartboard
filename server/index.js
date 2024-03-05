require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  useTLS: true,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.post("/pusher/auth", (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  // This authenticates every user. Don't do this in production!
  const authResponse = pusher.authorizeChannel(socketId, channel);
  // console.log(socketId)
  res.send(authResponse);
});

const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
