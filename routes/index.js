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
	{   
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
	var title = req.body.title;
	var body = req.body.body;
	if(!body)
	{
		res.send(500);
	}
	var article = new model({title:title,body:body})
	article.save(function(err) {
});
	res.send({message:"Created Successfully",article:article});
});



/**
 * Update article
 */
router.put('/articles/:id', function (req, res) {
	model.findOne({_id:req.params.id},function(err,docs)
	{  
		docs.title=req.body.title;
		res.send({message:"Updated Successfully",article:docs});
	});
});


 /**
 * END ROUTES
 */

module.exports = router;