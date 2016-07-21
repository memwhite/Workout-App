var router = require('express').Router();
var sequelize = require('../db');
var Definition = sequelize.import('../models/definition');

//create definition 
router.post('/', function(req, res){
	var description = req.body.definition.desc;
	var logType = req.body.definition.type;
	var owner = req.user.id;

	Definition.create({
		description: description,
		logType: logType,
		owner : owner
	})
	.then(
		function createSuccess (definition) {
			res.json({
				definition: definition
			});
		},
		function createError(err){
			res.send(500, err.message);

		}
	);

});


//fetch definitions by userid
router.get('/', function(req, res){
	var owner = req.user.id; //shortify
	Definition     //JavaScript doesn't care about white space
		.findAll({  //so .findAll can be on this line or the line above
			where: { owner: owner }
		})
		.then(
			function findAllSuccess(data){
				res.json(data);
			},
			function findAllError(err){
				res.send(500, err.message);
			}
	);
});

module.exports = router;











