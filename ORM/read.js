const {PrismaClient}=require('@prisma/client');

const prisma=new PrismaClient();

const afficher=async ()=>{
    try {
        const users=await prisma.user.findMany();
        console.log(users);
    } catch (error) {
        console.log(error);
    }finally{
        await prisma.$disconnect();
    }
}

afficher();