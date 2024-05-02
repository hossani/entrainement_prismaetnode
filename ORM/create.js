const {PrismaClient}= require('@prisma/client');

const prisma=new PrismaClient();

// prisma.user.findMany().then(resolve=> console.log(resolve));

const utilisateur={
email:"ayoub.ayoub@gmail.com",
password:'yoyo'
}
const creation= async (utilisateur)=>{
    try{
        const userCreate= await prisma.user.create({
            data:{
                email:utilisateur.email,
                password:utilisateur.password
            }
    })
    return user  
} catch(error){
    // console.log(error);
}
finally{
    await prisma.$disconnect();
}
}

creation(utilisateur).then(user=>console.log(user)).catch(error=>console.log(error));