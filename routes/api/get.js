const router = require('express').Router();

// api to get all users
router.get('/', async (req, res) => {
  try {
    res.send("hello world")
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});


module.exports = router;
