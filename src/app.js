const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, (error) => {
  if (error) {
    console.error('Error starting server:', error);
    return;
  }
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
