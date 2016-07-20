var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');


//creates the table in postgres
sequelize.sync(); //sequelize.sync({force: true}); //drops the table and recreates it

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

//create user route
app.use('/api/user', require('./routes/user'));
app.use('/api/test', function(req, res){
	res.send("hello computer");
});

app.listen(3000, function(){
	console.log("app is listening on port 3000");
});

