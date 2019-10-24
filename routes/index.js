const express = require('express');
const router = express.Router();
const domainController = require('../controllers/domainController') 

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express Development' });
// });

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.post('/domains/add', domainController.createDomain);
router.get('/domains', domainController.getDomains);
router.post('/domain/:id', domainController.updateDomain);
router.delete('/domain/:id', domainController.deleteDomain)
module.exports = router;
