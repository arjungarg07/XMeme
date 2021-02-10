require('dotenv').config();
const loaders = require('./loaders/index');
const express = require('express');

const PORT = require('./config/index').port || 8080;

async function startServer() {
  const app = express();
  await loaders({ expressApp: app });

  app.listen(PORT, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server is ready!`, PORT);
  });
}

startServer();