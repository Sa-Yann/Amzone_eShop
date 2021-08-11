import express from 'express';
// insert "type": "module", in .json file in order to avoid module non handlung error in terminal at launch
import mongoose from 'mongoose';
// import data from './data.js';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js'
import orderRouter from './routers/oderRouter.js';

dotenv.config();

const app = express();
// mongoose.connect('mongodb://localhost/saiyanzone',{
//     // since i m working from the mongoDb soft installedon my computer teh uri is mongodb://localhost/<name of the database>
//     useNewUrlParser: true, //getting rid of duplicated warnings
//     useUnifiedTopology: true,
//     useCreateIndex: true
// });
app.use(express.json());
// app.use(express.urlrencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://dbUser:dbUserPassword@cluster0.zhzqe.mongodb.net/saiyanzone',{
    // since i m working from the mongoDb soft installedon my computer teh uri is mongodb+srv://dbUser:dbUserPassword@cluster0.zhzqe.mongodb.net/saiyanzone not : mongodb://localhost/<name of the database> like in teh tuto
    connectTimeoutMS: 3000,
    socketTimeoutMS: 3000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Route to fetch details from a specfic product
// not needed anymore when datas are stored in MongoDb
// app.get('/api/products/:id', (req, res) => {
//     // first we search for the product
//     const product = data.products.find((x) => x._id === req.params.id)
    
//     if(product) {
//         res.send(product);
//         console.log(product);
//     } else {
//         res.status(404).send(`Product not Found`)
//     }
    
// })


// Route to fetch all the products in store
// not needed anymore when datas are stored in MongoDb
// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// });

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// Route to get to 'Home' page
app.get('/', (req, res) => {
    res.send('Server is Running')
});

// in order to display on teh front end the errormessage from expressAsyncHandler set up in userRouter.js
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
// const port =  5000;
app.listen(5000, () => {
    // console.log ('Server at running on http://localhost:5000');
    console.log(`Serve at http://localhost:${port}`)
});
// after instaling nodemon in .json package at the root of the project here: amazone_eshope
// "scripts": {
//    "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
// },