require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");

const weerLive = require("./api/weerlive");

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  // useTLS: true,
});

const app = express();

weerLive(pusher);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200,
// };

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
// app.use(
//   cors({
//     origin: [
//       "https://werktijden-smartboard.vercel.app",
//       "http://localhost:5173",
//       "*",
//     ],
//   })
// );
app.post("/pusher/auth", function (req, res) {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const presenceData = {
    user_id: socketId,
  };
  // This authenticates every user. Don't do this in production!
  const authResponse = pusher.authorizeChannel(socketId, channel, presenceData);
  res.send(authResponse);
});

const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
