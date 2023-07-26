const { PrismaClient } = require('@prisma/client');
const { players } = require('./data');
const prisma = new PrismaClient();

const load = async () => {
  try {
    //player table

    // in case id is autoincremented integer
    // await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    // console.log('reset product auto increment to 1');

    await prisma.player.deleteMany();
    console.log('Deleted records in player table');

    console.log('Adding player  data');

    await prisma.player.createMany({
      data: players,
    });

    console.log('Added player data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();

// TODO
//add     "seed":"node prisma/seed.ts"  inside scripts in package.json
// run   npm run seed
