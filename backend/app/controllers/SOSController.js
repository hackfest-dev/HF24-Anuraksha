const { pool } = require('../config/db.config');

exports.handleSOSTrigger = async (req, res) => {
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

exports.handleGetSOSHistory = async (req, res) => {
  try {
    const { user_id } = req.user;
    const sosHistory = await pool.query(
      'SELECT * FROM sos_history WHERE user_id = $1',
      [user_id]
    );
    return res.status(200).json({
      status: 200,
      message: 'SOS History',
      data: sosHistory.rows,
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};
