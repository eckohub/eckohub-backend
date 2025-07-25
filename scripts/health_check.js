const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend is healthy' });
});

app.listen(3001, () => {
  console.log('Health check running on port 3001');
});
