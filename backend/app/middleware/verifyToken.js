const jwt = require('jsonwebtoken');

const verifyTokenMiddleware = async (req, res, next) => {
  try {
    const authorizationToken = req.headers.authorization;
    if (!authorizationToken) {
      return res.status(401).json({ status: 401, message: 'Unauthorized' });
    }

    jwt.verify(
      authorizationToken,
      process.env.JWT_SECRET,
      async (err, decoded) => {
        if (err) {
          res.status(401).json({ status: 401, message: 'Unauthorized' });
        }
        req.user = decoded;
      }
    );
    next();
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};

module.exports = verifyTokenMiddleware;
