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
   title: {type:String, required:true},
   body: {type:String, required:true},
   tags: {type:[String], get:toString}
});


Article = mongoose.model('Article', ArticleSchema);
ArticleSchema.methods.asJSON= function(cb)
{
	return JSON.stringify(this.model('Article')),cb;
}
ArticleSchema.statics.findByTitle = function(title,result)
{
	this.find({title: new RegExp(title,'i')},result);
}

module.exports = Article;


