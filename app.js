const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const morgan = require('morgan');

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates
nunjucks.render('index.html', locals, function (err, output) {
  console.log(output);
}); //Lines 17-19 are what logs the template contents of index.html to our terminal

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use(morgan('dev'))
// The following is the equivalent of morgan('dev'):
//  function(req, res, next){
//   console.log(method + path + status + responseTime + content)
//   next()
// })

app.get('/', function(req, res, next){
  // res.send('Welcome to FakeTwitter!')
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.listen(3000, function(){
  console.log(chalk.blue('Server listening on Port 3000!'))
});
