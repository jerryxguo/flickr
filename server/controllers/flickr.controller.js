'use strict';

/**
 * Module dependencies.
 */
var request = require("request");
var url =  "https://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&nojsoncallback=1";



/**
 * List of menu
 */
exports.getPhotos = function(req, res) {
	
	request(url, function(error, response, body){
		var photos = [];
		var items =  JSON.parse(body).items;
		items.forEach(function (item) {
			var photo ={};
			photo['tag']= item['tags'];
			photo['url']= item['media']['m'];
			photos.push(photo);
		});
		res.json(photos);
	})
};


/**
 * List of menu
 */
exports.getPhotosByTag = function(req, res) {
	res.json(req.photos);
};


/**
 * menu middleware
 */
exports.photosByTag = function(req, res, next, tag) {
	var api = url + '&tags=' + tag;

	console.log(api);
	request(api, function(error, response, body){
		var photos = [];
		var items =  JSON.parse(body).items;
		items.forEach(function (item) {
			var photo ={};
			photo['tag']= item['tags'];
			photo['url']= item['media']['m'];
			photos.push(photo);
		});

		req.photos = photos
		next();
	})
};