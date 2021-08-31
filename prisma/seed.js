const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  console.log('reached here');
  const result = await prisma.internship.create({
    data: {
      position: 'Senior Frontend Engineer',
      contract: 'Full time',
      location: 'Palo Alto, California, USA',
      logo: 'https://bookassist.org/wp-content/uploads/elementor/thumbs/google_3_520-oc7dqerwmsbfad0t1gveosa6x2uck2bd7y6l2r7txs.jpg',
      company: 'Google',
      role: 'Senior Software engineer',
      tools: ['React', 'Javascript', 'Typescript', 'CSS'],
    },
  });
}

seed();
