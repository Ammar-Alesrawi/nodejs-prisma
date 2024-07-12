require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/api/index');
const app = express();


app.use(express.json());
app.use(morgan('dev'));

  // ROUTES//
app.use(routes);
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
