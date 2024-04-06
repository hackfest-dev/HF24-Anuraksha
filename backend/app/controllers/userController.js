const { pool } = require('../config/db.config');

exports.handleToggleVolunteerStatus = async (req, res) => {
  try {
    const { volunteer_status } = req.body;
    const { user_id } = req.user;
    const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [
      user_id,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json({ status: 401, message: 'User not found' });
    }
    const response = await pool.query(
      'UPDATE users SET is_volunteer = $1 WHERE user_id = $2',
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

exports.handleGetProfile = async (req, res) => {
  try {
    const { user_id } = req.user;
    const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [
      user_id,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json({ status: 401, message: 'User not found' });
    }
    return res.status(200).json({
      status: 200,
      message: 'User Profile',
      data: user.rows[0],
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};
