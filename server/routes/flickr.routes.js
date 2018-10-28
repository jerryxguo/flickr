'use strict';

module.exports = function(app) {
	// Root routing
	var flickr = require('../controllers/flickr.controller');

	//item routing
	app.route('/photos/:tag')
		.get(flickr.getPhotosByTag);

	app.route('/photos')
		.get(flickr.getPhotos);

	// Finish by binding the  middleware
	app.param('tag', flickr.photosByTag);
};
