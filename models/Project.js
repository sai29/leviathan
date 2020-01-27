const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const projectSchema = new Schema({
	name: {
		type: String,
		required: 'Please supply a name.'
	},
	description: {
		type: String,
		required: 'Please supply a description'
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: 'Please create a project assosciated with a domain and a user',
		ref: 'User'
	},
	domain: {
		type: mongoose.Schema.Types.ObjectId,
		required: 'Project needs to be assosciated with a domain',
		ref: 'Domain'
	},
	completion_percentage: {
		type: Number,
		required: 'Please calculate and send completion percentage'
	},
	completed: {
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model('Project', projectSchema)