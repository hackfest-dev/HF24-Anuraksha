const express = require('express');

const UserController = require('./controllers/userController');
const SOSController = require('./controllers/SOSController');

const verifyTokenMiddleware = require('./middleware/verifyToken');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({ status: 200, Message: 'Hello. Backend is up!' });
});

router.post('/login', UserController.handleLogin);
router.post('/register', UserController.handleRegister);

router.post(
  '/onboarding',
  verifyTokenMiddleware,
  UserController.handleOnboarding
);

// router.post(
//   '/toggleVolunteerStatus',
//   verifyTokenMiddleware,
//   UserController.handleToggleVolunteerStatus
// );

router.post(
  'triggersos',
  verifyTokenMiddleware,
  SOSController.handleSOSTrigger
);

module.exports = router;
