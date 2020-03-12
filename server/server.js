const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/exercises', exerciseRouter);

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB database connected!'))
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
  });

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
