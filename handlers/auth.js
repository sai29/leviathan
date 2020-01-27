const jwt = require('jsonwebtoken');
const User = require('../models/User');

// const auth = (req, res, next) => {
//   if (req.headers && req.headers.auth && req.headers.auth.split(' ')[0] === 'JWT') {
//     jwt.verify(req.headers.auth.split(' ')[1], 'top_secret', (error, decoded) => {
//       if (error) return res.status(401).send()
//       console.log(decoded)
//       req.user = decoded
//       console.log(req.user)
//       console.log('authenticated as ', decoded.email)
//       next()
//     })
//   } else return res.status(401).json({ message: 'Unauthorized'})
// }


const auth = async (req, res, next) => {
    try {
    	if (req.headers && req.headers.auth && req.headers.auth.split(' ')[0] === 'JWT') {
        const decoded = jwt.verify(req.headers.auth.split(' ')[1], 'top_secret')
        const user = await User.findOne({ email: decoded.email})
        console.log(user, 'this is the user')

        req.user = user
        console.log(req.user, 'maybe from here')
        next()
      }
    } catch (error) {
        res.status(500).json( { error: error.toString() });
    }
}

module.exports = auth