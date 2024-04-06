const { pool } = require('../config/db.config');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

exports.handleLogin = async (req, res) => {
  try {
    const { phone, is_verified } = req.body;
    if (!is_verified)
      return res
        .status(401)
        .json({ status: 401, message: 'User is not verified' });

    const user = await pool.query('SELECT * FROM users WHERE phone = $1', [
      phone,
    ]);

    if (user.rows.length === 0) {
      return res
        .status(401)
        .json({ status: 401, message: 'User is not registered' });
    }

    const token = jwt.sign(
      {
        user_id: user.user_id,
        name: user.username,
        phone: user.phone,
        state: user.state,
        is_volunteer: user.is_volunteer,
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      status: 200,
      message: 'Login successful',
      data: {
        user: {
          user_id: user.user_id,
          name: user.username,
          phone: user.phone,
          state: user.state,
          is_volunteer: user.is_volunteer,
        },
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};

exports.handleRegister = async (req, res) => {
  try {
    const { name, phone, dob, gender, state, current_location, is_volunteer } =
      req.body;
    const user = await pool.query(
      'INSERT INTO users (name, phone, dob, gender, state, current_location, is_volunteer) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, phone, dob, gender, state, current_location, is_volunteer]
    );
    console.log(user);
    return res.status(200).json({
      status: 200,
      message: 'User created',
      user_id: user.rows[0].user_id,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};

exports.handleOnboarding = async (req, res) => {
  try {
    const { user_id, contactDetails } = req.body;
    const user = await pool.query(
      'INSERT INTO users (name, phone, dob, gender, state, current_location, is_volunteer) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, phone, dob, gender, state, current_location, is_volunteer]
    );

    return res
      .status(200)
      .json({ status: 200, message: 'User Onboarding Successful' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};
