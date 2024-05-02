const {PrismaClient}=require('@prisma/client');

const prisma=new PrismaClient();
const mail= 'bestLail@gmail.com';
const updateUser=async (id,newEmail) =>{
try{
const userUp=await prisma.user.update({
    where: { id },
    data:{ email :newEmail}
});
return userUp;
// console.log(userUp);
}
catch(err){
}
finally{
    console.log("hello mr");
    await prisma.$disconnect();
}
}
updateUser(2,mail).then(user=>console.log(user)).catch(err=>console.log(err));