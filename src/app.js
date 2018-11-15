const path = require('path');
const express = require('express');
const ejs = require('ejs');
const todos = require('./routes/todos');
const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

app.post('/',function (req,res){
    res.send('Got a POST request');
});

app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/todos', todos);
// default route
app.get('/',(req,res) =>{
    res.render('index',{name:"Nai"});
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});


