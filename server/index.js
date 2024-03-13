


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

app.get("/tempsettings", function (req, res) {
const tempSettings = require("./temp_settings.json")

  const dashboardID = req.body.dashboardID
  console.log(dashboardID)
  res.send(tempSettings)
})

const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
