
const express = require('express');

const app = express();
const port = 3000;

//This code demonstrates how to set and get cookies in an Express.js application using the cookie-parser middleware.
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.send('This is Home!');
// });

// app.get('/set-cookie', (req, res) => {
//   res.cookie('username', 'john');
//   res.send('Cookie set');
// });

// app.get('/get-cookie', (req, res) => {
//   res.send(`Hello ${req.cookies.username}`);
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// })


//This code demonstrates how to use sessions in an Express.js application using the express-session middleware.

const session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get('/login', (req, res) => {
  req.session.username = 'john';
  res.send('Session started');
});

app.get('/dashboard', (req, res) => {
  res.send(`Hello ${req.session.username}`);
});