import express from 'express';
import data from '../data.js';
import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter = express.Router()

// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// }); BECOMES

productRouter.get(
    '/',
    expressAsyncHandler(
    async ( req, res) => {
        const productsList = await Product.find();
        res.send(productsList)
    })
);



productRouter.get(
    '/seed',
    expressAsyncHandler(
        async (req, res) => {
        await Product.remove({});
        const createdProducts = await Product.insertMany(data.products);
        res.send(createdProducts)
    })
);

// The id route must be defined affter the seed route in order for the  sedd from '/seed' route to not be treated as an id
productRouter.get(
    '/:id',
    expressAsyncHandler(
    async ( req, res) => {
        const productDetail = await Product.findById(req.params.id);
        if(productDetail){
            res.send(productDetail)
            console.log("🚀 ~ file: productRouter.js ~ line 28 ~ productDetail", productDetail) 
        }else {
            res.status(404).send({message: 'Product Not Found'})
        }
        
    })
);

export default productRouter