//definition model needs description, logtype, and an owner

module.exports = function(sequelize, DataTypes){

//definition is the name of the table in the database
//owner is the user ID that is assigned when logged in
//you could assign this to a variable and put return below,
//instead we're doing it all in one step with return at the top
return sequelize.define('definition', {
	description: DataTypes.STRING,
	logType: DataTypes.STRING,
	owner: DataTypes.INTEGER
});



};

/*
	{
		definition: {
			description: "run 5K",
			logType: "byTime",
			owner: 1 //user id of who created it
		}

	},

	{
		definition: {
			description: "pullups",
			logType: "reps",
			ownder: 6
		}

	}



*/