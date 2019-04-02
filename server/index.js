const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use("/static", express.static(path.join(__dirname, "../client/build")));

app.use("/api", (req, res) => {
  res.send({ data: "hello world" });
});

// if it does not match any route, return the default html file
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const server = app.listen(process.env.port || 3001, () => {
  console.log(`App is listening on port: ${server.address().port}`);
});
