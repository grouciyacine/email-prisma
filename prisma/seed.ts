import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();
export const main=async()=>{
    await prisma.feedback.createMany({
        data: [
          {
            messages: 'Lovely app',
            feedbackType: 'FEEDBACK',
            email: 'mahmoud@prisma.io',
            name: 'Mahmoud',
          },
          {
            messages: 'Add dark mode',
            feedbackType: 'IDEA',
            email: 'dan@prisma.io',
            name: 'Dan',
          },
          {
            messages: 'layout is broken on mobile',
            feedbackType: 'ISSUE',
            email: 'alex@prisma.io',
            name: 'Alex',
          },
        ],
      });
}
main().catch((e)=>{console.log(e)
process.exit(1)}).finally(async()=>await prisma.$disconnect)
//24m