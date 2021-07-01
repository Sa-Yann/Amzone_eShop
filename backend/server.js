import express from 'express';
// insert "type": "module", in .json file in order to avoid module non handlung error in terminal at launch
import data from './data.js';


const app = express();


// Route to fetch details from a specfic product
app.get('/api/products/:id', (req, res) => {
    // first we search for the product
    const product = data.products.find((x) => x._id === req.params.id)
    
    if(product) {
        res.send(product);
        console.log(product);
    } else {
        res.status(404).send(`Product not Found`)
    }
    
})

// Route to get to 'Home' page
app.get('/', (req, res) => {
    res.send('Server is Running')
});

// Route to fetch all the products in store
app.get('/api/products', (req, res) => {
    res.send(data.products);
})

// const port = process.env.PORT || 5000;
const port =  5000;
app.listen(5000, () => {
    // console.log ('Server at running on http://localhost:5000');
    console.log(`Serve at http://localhost:${port}`)
})
// after instaling nodemon in .json package at the root of the project here: amazone_eshope
// "scripts": {
//    "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
// },