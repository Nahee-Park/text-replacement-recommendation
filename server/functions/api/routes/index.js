const express = require('express');
const router = express.Router();

router.use('/emoji', require('./emoji'));

module.exports = router;
