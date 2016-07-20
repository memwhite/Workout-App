var Sequelize = require('sequelize'); //we added this through package.JSON

var sequelize = new Sequelize('workoutlog', 'postgres', '', {   //the empty quotes can be empty or include your password
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function(){
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}
);

var User = sequelize.import('./models/user');

module.exports = sequelize;