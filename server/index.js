const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser);

app.use('/', (req, res) => {
  res.send({ data: "hello world" });
});

const server = app.listen(process.env.port || 3001, () => {
  console.log(`App is listening on port: ${server.address().port}`)
});

