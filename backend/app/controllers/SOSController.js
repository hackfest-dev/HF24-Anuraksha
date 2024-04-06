const { pool } = require('../config/db.config');
const axios = require('axios');
const qs = require('qs');
// exports.handleSOSTrigger = async (req, res) => {
//   try {
//     const { latitude, longitude } = req.body;
//     const { user_id } = req.user;

//     const user = await pool.query(
//       'INSERT INTO sos_history (location, user_id) VALUES ($1, $2) RETURNING *',
//       [`${latitude}, ${longitude}`, user_id]
//     );

//     const emergencyContacts = await pool.query(
//       'SELECT * FROM emergencycontacts WHERE user_id = $1',
//       [user_id]
//     );

//     console.log(emergencyContacts.rows);

//     return res.status(200).json({
//       status: 200,
//       message: 'User created',
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({
//       status: 500,
//       message: 'Internal server error',
//       description: err,
//     });
//   }
// };
exports.handleSOSTrigger = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const { user_id } = req.user;

    const user = await pool.query(
      'INSERT INTO sos_history (location, user_id) VALUES ($1, $2) RETURNING *',
      [`${latitude}, ${longitude}`, user_id]
    );

    const emergencyContacts = await pool.query(
      'SELECT * FROM emergencycontacts WHERE user_id = $1',
      [user_id]
    );

    for (const contact of emergencyContacts.rows) {
      const { name, phone } = contact;
      const message = `This is a distress message. Location: ${latitude}, ${longitude}`;

      await sendDistressMessage(name, phone, message);
    }

    return res.status(200).json({
      status: 200,
      message: 'Distress messages sent to emergency contacts',
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err,
    });
  }
};

async function sendDistressMessage(name, phone, message) {
  try {
    const data = qs.stringify({
      token: 's7qeg6kfqt99ztw4',
      to: phone,
      body: message,
    });

    const config = {
      method: 'post',
      url: 'https://api.ultramsg.com/instance83042/messages/chat',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };
    const response = await axios(config);
    console.log(`Distress message sent to ${name} (${phone}): ${message}`);
    return response.data;
  } catch (error) {
    console.error(
      `Failed to send distress message to ${name} (${phone}): ${error.message}`
    );
    throw error;
  }
}

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
    console.error('Error:', err);
    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      description: err.message,
    });
  }
};
