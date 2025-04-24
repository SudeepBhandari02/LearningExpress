const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('This is Home!');
});

app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'john');
  res.send('Cookie set');
});

app.get('/get-cookie', (req, res) => {
  res.send(`Hello ${req.cookies.username}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
