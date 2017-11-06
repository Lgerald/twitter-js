const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/', function(req, res, next){
  res.send('Welcome to FakeTwitter!');
});

app.listen(3000, function(){
  console.log('Server listening on Port 3000!')
});
