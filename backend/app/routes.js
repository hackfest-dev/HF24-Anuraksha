const express = require('express');

// const OTPController = require('./controllers/OTPController');

// const verifyTokenMiddleware = require('./middleware/verifyToken');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({ status: 200, Message: 'Hello' });
});

router.get(
  '/getSubmissions',
  verifyTokenMiddleware,
  submissionController.handleGetSubmissions
);

module.exports = router;
