require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/api/index');
const prisma = require('./prisma/prisma');
const app = express();


app.use(express.json());
app.use(morgan('dev'));

async function seedDatabase() {
  const existingUsers = await prisma.user.findMany();
  if (existingUsers.length === 0) {
    console.log('Seeding database...');
    const seed = await require('./prisma/seed')();
    await seed();
  }
}
seedDatabase()
  .then(() => {
    console.log('Database seeding completed.');
  })
  .catch(err => {
    console.error('Error seeding database:', err);
  });

  // ROUTES//
app.use(routes);
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
