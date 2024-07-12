// seed.js
const prisma = require('./prisma');

async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'user1@example.com',
        name: 'User One',
      },
      {
        email: 'user2@example.com',
        name: 'User Two',
      },
      {
        email: 'user3@example.com',
        name: 'User Three',
      },
    ],
  });

  console.log('Users seeded');
}

module.exports = main;
