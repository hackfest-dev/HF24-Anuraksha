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
        user_id: user.rows[0].user_id,
        name: user.rows[0].username,
        phone: user.rows[0].phone,
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      status: 200,
      message: 'Login successful',
      data: {
        user: {
          user_id: user.rows[0].user_id,
          name: user.rows[0].name,
          state: user.rows[0].state,
          is_volunteer: user.rows[0].is_volunteer,
          language: user.rows[0].language,
        },
        token,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};

exports.handleRegister = async (req, res) => {
  try {
    const {
      name,
      phone,
      dob,
      gender,
      state,
      current_location,
      is_volunteer,
      language,
    } = req.body;
    const user = await pool.query(
      'INSERT INTO users (name, phone, dob, gender, state, current_location, is_volunteer, language) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [
        name,
        phone,
        dob,
        gender,
        state,
        current_location,
        is_volunteer,
        language,
      ]
    );
    return res.status(200).json({
      status: 200,
      message: 'User created',
      user_id: user.rows[0].user_id,
    });
  } catch (err) {
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
    const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [
      user_id,
    ]);
    if (user.rows.length === 0) {
      return res
        .status(401)
        .json({ status: 401, message: 'User is not registered' });
    }

    for (const contact of contactDetails) {
      await pool.query(
        'INSERT INTO emergencycontacts (user_id, name, phone) VALUES ($1, $2, $3)',
        [user_id, contact.name, contact.phone]
      );
    }

    return res
      .status(200)
      .json({ status: 200, message: 'User Onboarding Successful' });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};

exports.handleToggleVolunteerStatus = async (req, res) => {
  try {
    const { user_id, volunteer_status } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [
      user_id,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json({ status: 401, message: 'User not found' });
    }
    const response = await pool.query(
      'UPDATE users SET is_volunteer = $1 * WHERE user_id = $2',
      [volunteer_status, user_id]
    );
    return res
      .status(200)
      .json({ status: 200, message: 'Volunteer Status Updated' });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};
