var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/assessjs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var Article;
var Schema = mongoose.Schema;

function toString(array)
{
	return array.join();
}

var ArticleSchema = new Schema({
   title:String,
   body:String,
   tags: {type:[], get:toString}
});
ArticleSchema.path("title").required(true);
ArticleSchema.path("body").required(true);
ArticleSchema.methods.asJSON= function(test)
{   
	return JSON.stringify(this);

};
ArticleSchema.statics.findByTitle = function(title,result)
{ 
	this.findOne({title: new RegExp(title,'i')},result);
};


Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;


