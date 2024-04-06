const { pool } = require('../config/db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

exports.handleLogin = async (req, res) => {
  try {
    const { phone } = req.body;
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
        role: user.role,
        email: user.email,
        phone: user.phone,
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res
      .status(200)
      .json({ status: 200, message: 'Login successful', data: { token } });
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

    return res.status(200).json({ status: 200, message: 'User created' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};
