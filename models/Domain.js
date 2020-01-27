const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const domainSchema = new Schema({
	name: {
		type: String,
		required: 'Please supply a name'
	},
	description: {
		type: String,
		required: 'Please supply a description'
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: 'Please create a domain assosciated with a user',
		ref: 'User'
	}
})

module.exports = mongoose.model('Domain', domainSchema)