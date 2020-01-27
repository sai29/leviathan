const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const User = mongoose.model('User');
const domainController = require('../controllers/domainController');
const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');
const auth = require('../handlers/auth');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express Development' });
// });

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.post('/signup', userController.signUp );
router.post('/login', userController.logIn);

router.post('/domains/add', auth, domainController.createDomain);
router.get('/domains', auth, domainController.getDomains);
router.post('/domain/:id', auth, domainController.updateDomain);
router.delete('/domain/:id', auth, domainController.deleteDomain)
router.post('/projects/add', auth, projectController.createProject);
router.get('/projects', auth, projectController.getProjectsByUser);
router.get('/projects/:domain_id', projectController.getProjectsbyDomain);
router.post('/projects/:id', projectController.updateProject);
router.delete('/projects/:id', projectController.deleteProject)
module.exports = router;
