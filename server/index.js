const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var session = {};

app.get("/api/getData", (req, res) => {
  res.json(session);
});

app.post("/api/sleepStruggle", (req, res) => {
  try {
    console.log(req.body);
    session.sleepStruggle = req.body.sleepStruggle;
    console.log(session);
    res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false });
  }
});

app.post("/api/sleepTime", (req, res) => {
  try {
    console.log(req.body);
    session.sleepTime = req.body.sleepTime;
    console.log(session);
    res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false });
  }
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
