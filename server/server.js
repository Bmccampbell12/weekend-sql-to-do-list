const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let PORT = process.env.PORT || 5001;
const todos = require('./routes/todos.router.js');

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );





// Do not modify this!
if (process.env.NODE_ENV == 'test') {
  PORT = 5002;
}

app.use(express.static('./server/public'));
app.use(express.json());

app.use('/todos', todos);

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});
