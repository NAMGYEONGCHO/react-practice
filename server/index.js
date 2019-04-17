import express from 'express'; 
const app = express();

// Accepts requests from other origins
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Registers API route
app.use(require('./api/index.js'));

const port = 4000;

app.listen(port, () => {
  console.log('Listening on port ' + port);
});