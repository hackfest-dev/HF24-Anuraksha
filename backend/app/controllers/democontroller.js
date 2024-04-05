const { pool } = require('../config/db');

// exports.handleVerifyOTP = async (req, res) => {
//   try {
//     const { phoneNumber, enteredOTP, requestId } = req.body;

//     const selectQuery =
//       "SELECT * FROM otps WHERE phone_number = ? AND request_id = ?";

//     const deleteQuery =
//       "DELETE FROM otps WHERE phone_number = ? AND request_id = ?";

//     const selectResult = await pool.query(selectQuery, [
//       phoneNumber,
//       requestId,
//     ]);
//     if (selectResult[0][0] !== undefined) {
//       const storedOTP = selectResult[0][0].otp;
//       if (enteredOTP === storedOTP) {
//         try {
//           await pool.query(deleteQuery, [phoneNumber, requestId]);
//         } catch (err) {
//           console.error(error);
//           res.status(500).json({ status: 500, errorCode: "SERVER_ERROR" });
//         }
//         res.status(200).json({ status: 200, valid: true });
//       } else {
//         res.status(200).json({ status: 200, valid: false });
//       }
//     } else {
//       res.status(200).json({ status: 200, valid: false });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ status: 500, errorCode: "SERVER_ERROR" });
//   }
// };
