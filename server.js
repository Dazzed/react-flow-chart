const express = require('express');
const path = require('path');
const app = express();

const config = {
  PORT: process.env.PORT || 4000,
};

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(config.PORT, () => {
  console.log(`App started on port: ${config.PORT}`);
});
