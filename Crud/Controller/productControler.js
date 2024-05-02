const product=require('../Models/productmodel');

async function getProducts(req,res){
    try{
const products= await product.findAll();
res.writeHead(200,{'Content-Type':'application/json'});
res.end(JSON.stringify(products));
    }catch(error){
        console.log(error);
    }
}

async function getProduct(req,res,id){
    try{
const products= await product.findById(id);
if(!products){
    res.writeHead(404,{'Content-Type':'application/json'});
res.end(JSON.stringify({message:"not found product"}));
}else{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(products));
}
    }catch(error){
        console.log(error);
    }
}

async function createProduct(req,res){
    try{
const produc={
    name:"prod3",
    description:"MY  prod3 WORSE",
    price:283
};
const nproduct=product.create(produc);
res.writeHead(201,{'Content-Type':'application/json'});
return res.end(JSON.stringify(nproduct));
    }catch(error){
        console.log(error);
    }
}

module.exports={
  getProducts,getProduct,createProduct
}