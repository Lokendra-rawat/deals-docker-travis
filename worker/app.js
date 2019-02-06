var https = require('https');
var mongoose = require('mongoose');

/* require functions */
// var saveImage = require('./modules/saveImage');
var getFkmDeals = require('./modules/getDeals');
var getDesiDeals = require('./modules/getdesideals');
var getGrabondeals = require('./modules/getgrabondeals');
// var addStores = require('./modules/saveStores');
var spinbot = require('./modules/spinbot');

// mongodb://mongo:27017/expressdb
// mongodb://lokendra:lokendra@ds115166.mlab.com:15166/stories

mongoose.connect('mongodb://lokendra:lokendra@ds115166.mlab.com:15166/stories', {
	useMongoClient: true
}, function(err) {
	if (err) console.log(err.name + " => " + err.message);
});

// mongoose.connect('mongodb://mongo:27017/expressdb', {
// 	useMongoClient: true
// }, function(err) {
// 	if (err) console.log(err.name + " => " + err.message);
// });

// deal.find({}, saveImage);

var targetUrl = "https://freekaamaal.com/";
var targetUrl2 = "https://www.desidime.com/";
var targetUrl3 = "https://www.grabon.in/deals/";

setInterval(function() {
	https.get(targetUrl, getFkmDeals);
}, 1000 * 60 * 10);

setInterval(function() {
	https.get(targetUrl2, getDesiDeals);
}, 1000 * 60 * 15);

setInterval(function() {
	https.get(targetUrl3, getGrabondeals);
}, 1000 * 60 * 30);

https.get(targetUrl, getFkmDeals);
https.get(targetUrl3, getGrabondeals);
https.get(targetUrl2, getDesiDeals);


setInterval(spinbot, 1000 * 60 * 12);