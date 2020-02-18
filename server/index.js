const express = require("express");
const cors = require("cors");
const { random } = require("./random");

const app = express();
const port = 8080;

app.use(cors());

app.get("/text", (req, res) => {
  setTimeout(() => {
    res.json({});
  }, random(200, 3000));
});

app.get("/text/:txt", (req, res) => {
  const { txt } = req.params;

  setTimeout(() => {
    res.json({
      txt
    });
  }, random(200, 3000));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
