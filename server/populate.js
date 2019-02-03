// var needle = require('needle');
// var fs = require('fs');
// var cheerio = require('cheerio');
var mongoose = require('mongoose');

var deal = mongoose.Schema({
  storeName: {
    type: String,
    required: true,
    unique: false
  },
  dealName: {
    type: String,
    required: true
  },
  spinName: {
    type: String,
    required: false
  },
  smallImageUrl: {
    type: String,
    required: false
  },
  bigImageUrl: {
    type: String,
    required: false
  },
  mainPrice: {
    type: Number,
    required: false
  },
  cutPrice: {
    type: Number,
    required: false
  },
  dealUrl: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: false
  },
  spin:{
    type: Boolean,
    required: false
  }
});

var deals = mongoose.model('deals', deal);

mongoose.connect('mongodb://mongo:27017/expressdb', {
	useMongoClient: true
}, function(err) {
	if (err) console.log(err.name + " => " + err.message);
});


// deals.

function saveDeal(obj) {
	var deal = new deals(obj);
	deal.save({}, function(err, data) {
		if (err) console.log(err);
		else console.log("deal added");
	})
}

var obj = {
	storeName: 'amazon',
	dealName: "in stock now - apis himalaya honey [ 2 K.G at Just Rs. 321 ]",
	smallImageUrl: "https://res.cloudinary.com/supremedeals/image/upload/h_158/v1548917089/m0y3j3gxnfq4owklktux.jpg"
,
	bigImageUrl: "https://res.cloudinary.com/supremedeals/image/upload/v1518296468/uei4qp986sp2arof9o3v.jpg",
	mainPrice: 321,
	cutPrice: 780,
	dealUrl: "https://www.amazon.in/Apis-Himalaya-Honey-each-Free/dp/B0168I6B32/ref=sr_1_1?ie=UTF8&qid=1515214531&sr=8-1&keywords=apis",
	tags: [
		"Himalaya",
		"Food & Drink"
	]
}

saveDeal(obj)

// deals.find({}, function(err, data) {
// 	// console.log(data);

// 	data.forEach(data => {
// 		var id = data._id;
// 		var data = data.dealName;

// 		(function(id,data) {
// 			deals.update({
// 				'_id': id
// 			}, {
// 				$set: {
// 					'spinName' : data
// 				}
// 			}, {
// 				multi: true
// 			}).exec(function(err, data) {
// 				if (err) return;
// 				console.log(data.nModified);
// 			});
// 		})(id, data);

// 	});

// }).limit(1000).sort('-_id');