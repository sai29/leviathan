const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const auth = require('../handlers/auth')

exports.signUp =   async (req, res) => {
  try { 
  const user = await (new User(req.query)).save();
  res.json({ user });
  } catch (error) {
  res.status(500).json({ error: error.toString() });
  }
}

exports.logIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user)
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, same) => {
      if (!err && same) {
        res.status(201).json({token: jwt.sign({ email: user.email}, 'top_secret')})
      } else res.status(401).json( { message: 'email or password is wrong'}) })
    }
  } catch(error) {
    res.status(500).json( { error: error.toString() });
  }
}
  