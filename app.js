const express = require('express');
const app = express();
require('dotenv').config();


app.get('/', (req, res) => {
  res.json({
    msg: `hello this is test application and this is env variable ${process.env.secret_env}`
  });
});

app.listen(4200, () => {
  console.log("Server is running on port 4200");
});
