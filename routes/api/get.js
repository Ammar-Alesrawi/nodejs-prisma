const router = require('express').Router();
const prisma = require('../../prisma/prisma');

// api to get all users
router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});


module.exports = router;
