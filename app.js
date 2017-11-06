const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');

app.use('/', function(req, res, next){
  console.log(`Method: ${req.method}`)
  console.log(`Method: ${req.path}`)
  next()
})

app.get('/', function(req, res, next){
  res.send('Welcome to FakeTwitter!')
});

app.listen(3000, function(){
  console.log(chalk.blue('Server listening on Port 3000!'))
});
