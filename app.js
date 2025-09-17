import express from "express";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || "3001";
const pingURL =
  process.env.PING_URL || "telegram-gift-bot-3jp7.onrender.com/ping";

app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.status(200).json("Test route");
});

app.get("/ping", (req, res) => {
  return res.status(200).json("Ping successful");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  setInterval(sendPing, 300000); //5min
});

function sendPing() {
  console.log("Trying to ping...");
  fetch(pingURL);
}
