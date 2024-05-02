const products=require('../data/products.json');
const {v4:uuidv4}=require('uuid');

function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(products);
    })
}

function findById(id){
    return new Promise((resolve,reject)=>{
       const product = products.find((p)=>p.id===id);
        resolve(product);
    })
}


function create(prod){
    return new Promise((resolve,reject)=>{
       const newproduct = {id:uuidv4(),...product}
       products.push(newproduct);
       resolve(product);
    })
}

module.exports={
    findAll,findById,create
}