const express = require('express');

// controller functions
const { loginUser, signupUser } = require('../controllers/userController');

const router = express.Router();

// login route
router.post('/Login', loginUser);

// signup route
router.post('/Signup', signupUser);

module.exports = router;