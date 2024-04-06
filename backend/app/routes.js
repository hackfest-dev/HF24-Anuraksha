const express = require('express');

const AuthController = require('./controllers/authController');
const SOSController = require('./controllers/SOSController');
const UserController = require('./controllers/userController');

const verifyTokenMiddleware = require('./middleware/verifyToken');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({ status: 200, Message: 'Hello. Backend is up!' });
});

router.post('/login', AuthController.handleLogin);
router.post('/register', AuthController.handleRegister);

router.post('/onboarding', AuthController.handleOnboarding);

router.post(
  '/toggleVolunteerStatus',
  verifyTokenMiddleware,
  UserController.handleToggleVolunteerStatus
);

router.post(
  '/triggerSOS',
  SOSController.handleSOSTrigger //Yet to complete
);

router.get('/profile', verifyTokenMiddleware, UserController.handleGetProfile);

router.get(
  '/SOSHistory',
  verifyTokenMiddleware,
  SOSController.handleGetSOSHistory
);

module.exports = router;
