const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

let gasValue = 0;
let toggle = "OFF";

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

app.post("/message", (req, res) => {
  const { gas } = req.body;
  gasValue = gas;
  res.status(200).send({ gas: gasValue });
});

app.get("/message", (req, res) => {
  res.status(200).send({ gas: gasValue, toggle: toggle });
});

app.post("/control", (req, res) => {
  const { control } = req.body;

  if (control === "OFF") {
    toggle = "OFF";
  } else if (control === "ON") {
    toggle = "ON";
  }

  res.status(200).send({ gas: gasValue, toggle: toggle });
});

app.listen(port, () => {
  console.log(`server started on ${port} ...`);
});
