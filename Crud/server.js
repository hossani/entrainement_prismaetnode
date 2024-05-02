const http=require('http');
const {getProducts,getProduct,createProduct}=require('./Controller/productControler');

const server=http.createServer((req,res)=>{
    if(req.url==='/api/products' && req.method=='GET'){
        getProducts(req,res);
    }
    else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method=='GET'){
        const id=req.url.split('/')[3];
        getProduct(req,res,id);
    }else if(req.url==='/api/products' && req.method=='POST'){
createProduct(req,res);
    }
    else{
        res.writeHead('Content-Text','application/json');
        res.res(JSON.stringify({message:'Probleme in method or url'}));
    }
});

const PORT=process.env.PORT||5000;

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
