const router = require('express').Router();
const get = require('./get');


// get Users
router.use('/prisma/get', get);

module.exports = router;
