const express = require('express');

const UserController = require('./controllers/userController');

const verifyTokenMiddleware = require('./middleware/verifyToken');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({ status: 200, Message: 'Hello. Backend is up!' });
});

router.post('/login', UserController.handleLogin);
router.post('/register', UserController.handleRegister);
router.post('/onboarding', UserController.handleOnboarding);

module.exports = router;
