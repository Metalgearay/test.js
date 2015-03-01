var express = require('express');
var router = express.Router();
var model = require('../models/article');
var db = model.Article;

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
    res.json(db.asJSON());

});


/**
 * Show
 */

router.get('/articles/:id', function(req, res) {
	db.find({title:req.params.id},function(err,docs)
	{
		res.json(docs.body);
	});

});


/**
 * Create an article
 */
router.post('/articles', function (req, res) {
    res.
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