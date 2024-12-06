require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userroutes');

const app = express();
app.use(bodyParser.json());

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
