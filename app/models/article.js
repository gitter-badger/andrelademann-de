/**
 * Article Model
 *
 * @project      AndreLademannDe
 * @author       André Lademann <vergissberlin@googlemail.com>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
var mongoose = require('mongoose'),
		Schema   = mongoose.Schema;

var ArticleSchema = new Schema({
		state:    String,
		title:    {
			type:     String,
			index:    true,
			required: true
		},
		slug:     {
			type:     String,
			index:    true,
			unique:   true,
			required: true
		},
		image:    String,
		teaser:   String,
		text:     String,
		comments: []
	},
	{
		timestamps: true
	}
);

mongoose.model('Article', ArticleSchema);
