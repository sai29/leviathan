const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const slug = require('slugs');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		required: 'Please supply an email address'
	},
	// name: {
	// 	type: String,
	// 	required: 'Please supply a name',
	// 	trim: true
	// },
	password: {
		type: String,
		required: true,
		trim: true
	}
})

userSchema.methods.isValidPassword = async function(password){
  const user = this;
  //Hashes the password sent by the user for login and checks if the hashed password stored in the 
  //database matches the one sent. Returns true if it does else false.
  const compare = await bcrypt.compare(password, user.password);
  if(compare) {
		return true;
	} else { return false}
}

userSchema.pre('save', async function(next) {
	const user = this;

	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8)
	}

	next()
})

module.exports = mongoose.model('User', userSchema);