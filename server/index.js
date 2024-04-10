require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  // useTLS: true,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.post("/pusher/auth", cors(corsOptions), function (req, res) {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const presenceData = {
    user_id: socketId,
  };
  // This authenticates every user. Don't do this in production!
  const authResponse = pusher.authorizeChannel(socketId, channel, presenceData);
  console.log(authResponse)
  res.send(authResponse);
});

const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;

// weather API fetch
async function updateLiveWeer() {
  console.log("--weather poll--");
  const res = await fetch(
    `https://weerlive.nl/api/weerlive_api_v2.php?key=${process.env.WEERLIVE}&locatie=Amsterdam`
  );
  const data = await res.json();

  await pusher.trigger("liveweer-channel", "update-liveweer", { data: data });

  setTimeout(updateLiveWeer, 420000);
  // setTimeout(updateLiveWeer, 2000);
}
updateLiveWeer();
