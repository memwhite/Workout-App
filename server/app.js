require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');


//creates the table in postgres
sequelize.sync(); //sequelize.sync({force: true}); //drops the table and recreates it

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

//create user route
app.use('/api/user', require('./routes/user'));

//login route
app.use('/api/login', require('./routes/session'));

//definitions route
app.use('/api/definition', require('./routes/definition'));

//log route
app.use('/api/log', require('./routes/log'));

//test route
app.use('/api/test', function(req, res){
	res.send("hello computer");
});

//test route for api http://localhost:3000/api/test
app.listen(3000, function(){
	console.log("app is listening on port 3000");
});

