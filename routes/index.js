var express = require('express');
var router = express.Router();
var model = require('../models/article');
/**
 *
 *___ _____ _   ___ _____   _  _ ___ ___ ___
 / __|_   _/_\ | _ \_   _| | || | __| _ \ __|
 \__ \ | |/ _ \|   / | |   | __ | _||   / _|
 |___/ |_/_/ \_\_|_\ |_|   |_||_|___|_|_\___|
						CREATE ADDITIONAL ROUTES
 */


/**
 * List
 */
router.get('/articles', function(req, res) {
	model.find(function(err,docs)
	{   console.log("Fucke you")
		res.json(docs);
	});
	
});


/**
 * Show
 */

router.get('/articles/:id', function(req, res) {
	model.findOne({_id:req.params.id},function(err,docs)
	{  
		if(err)
		{
			res.send(500);
		}
		res.json(docs);

	});

});


/**
 * Create an article
 */
router.post('/articles', function (req, res) {
});



/**
 * Update article
 */
router.put('/articles/:id', function (req, res) {

});


 /**
 * END ROUTES
 */

module.exports = router;