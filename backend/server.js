const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const routes = require('./app/routes');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(async (req, res, next) => {
  try {
    await next();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error });
  }
});

cron.schedule('*/5 * * * *', async () => {
  //   await clearOTP();
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
