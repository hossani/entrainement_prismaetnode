const {PrismaClient}=require('@prisma/client');

const prisma=new PrismaClient();

const deleteU =async(id)=>{
    try {
       await prisma.user.delete({
            where: { id },
          });
    } catch (error) {
        
    }
    finally{
        await prisma.$disconnect();
    }
}

deleteU(2);

