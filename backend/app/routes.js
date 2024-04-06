const express = require('express');

const UserController = require('./controllers/userController');

const verifyTokenMiddleware = require('./middleware/verifyToken');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({ status: 200, Message: 'Hello. Backend is up!' });
});

router.get('/login', UserController.handleLogin);
router.get('/register', UserController.handleRegister);

module.exports = router;
