var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		trim: true
	},
	points: {
		type: Number,
		default: 0
	},
	streak: {
		days: {
			Monday: {
				type: Number,
				default: 0
			},
			Tuesday: {
				type: Number,
				default: 0
			},	
			Wednesday: {
				type: Number,
				default: 0
			},
			Thursday: {
				type: Number,
				default: 0
			},
			Friday: {
				type: Number,
				default: 0
			},
			Saturday: {
				type: Number,
				default: 0
			},
			Sunday: {
				type: Number,
				default: 0
			},																	
		}
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}