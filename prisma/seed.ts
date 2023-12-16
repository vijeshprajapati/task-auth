import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

async function main() {
  const prisma = new PrismaClient();

  //     // clean db
  //   await prisma.$transaction([
  //     prisma.users.deleteMany()
  //   ]);
    
    const passString = await bcrypt.hash(process.env.ADMIN_PASS, 10);

    await prisma.users.create({
      data: {
        name: 'Tyrell Wellick',
        password: passString,
        username: 'admin',
        email: 'admin@123.com',
        role: 'ADMIN',
      },
    });
}

main();
