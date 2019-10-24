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
	}
})

module.exports = mongoose.model('Domain', domainSchema)