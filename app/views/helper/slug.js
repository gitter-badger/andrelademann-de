/**
 * Slug view helper
 *
 * @project      AndreLademannDe
 * @author       André Lademann <vergissberlin@googlemail.com>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';

var Handlebars = require('handlebars'),
		getSlug    = require('speakingurl');

Handlebars.registerHelper('slug', function (context) {
	return new Handlebars.SafeString(getSlug(context));
});
