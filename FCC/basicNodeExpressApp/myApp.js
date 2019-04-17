
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// --> 7)  Mount the Logger middleware here
// app.use(middleware function(){
//   next();
// });

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({ extended: false }));

/** 1) Meet the node console. */
console.log('Hello World');

/** 2) A first working Express Server */
// app.get('/', function(req, res){
//   res.send('Hello Express');
// });

/** 3) Serve an HTML file */
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

/** 4) Serve static assets  */
app.use(express.static(`${__dirname}/public`));

/** 5) serve JSON on a specific route */
// app.get('/json', function(req, res){
//   res.json({"message": "Hello json"});
// });

/** 6) Use the .env file to configure the app */
app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({ message: 'HELLO JSON' });
  } else {
    res.json({ message: 'Hello json' });
  }
});

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
// app.get('/user', function(req, res, next) {
//   req.user = getTheUserSync(); // Hypothetical synchronous operation
//   next();
//   }, function(req, res) {
//   res.send(req.user);
//   })

/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ time: req.time });
});

/** 9)  Get input from client - Route parameters */
app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word });
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.get('/name', (req, res) => {
  res.json({ name: `${req.query.first} ${req.query.last}` });
});

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
// To parse the data coming from POST requests, you have to install a package: the body-parser. This package allows you to use a series of middleware, which can decode data in different formats.
// To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.

// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.

// The middleware was a part of Express.js earlier but now you have to install it separately.

// This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request. Install body-parser using NPM as shown below.

/** 12) Get data form POST  */
app.post('/name', (req, res) => {
  res.json({ name: `${req.body.first} ${req.body.last}` });
});

/** Try chaining with the format below */
// app.route(path).get(handler).post(handler)

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

module.exports = app;
