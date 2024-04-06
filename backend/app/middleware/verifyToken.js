const jwt = require('jsonwebtoken');

const verifyTokenMiddleware = async (req, res, next) => {
  try {
    const authorizationToken = req.cookies['next-auth.session-token'];
    if (!authorizationToken) {
      return res.status(Errors.UNAUTHORIZED.status).json(Errors.UNAUTHORIZED);
    }

    jwt.verify(
      authorizationToken,
      process.env.JWT_SECRET,
      async (err, decoded) => {
        if (err) {
          return res
            .status(Errors.UNAUTHORIZED.status)
            .json(Errors.UNAUTHORIZED);
        }

        req.user = decoded.user;
      }
    );
    next();
  } catch (error) {
    return res.status(Errors.SERVER_ERROR.status).json(Errors.SERVER_ERROR);
  }
};

module.exports = verifyTokenMiddleware;
