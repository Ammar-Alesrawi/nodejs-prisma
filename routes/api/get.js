const router = require('express').Router();

// api to get all users
router.get('/', async (req, res) => {
  try {
    send.json("hello world")
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});


module.exports = router;
