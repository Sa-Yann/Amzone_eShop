import express from 'express';
// insert "type": "module", in .json file in order to avoid module non handlung error in terminal at launch
import data from './data.js';


const app = express();

app.get('/', (req, res) => {
    res.send('Server is Running')
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

const port = process.env.PORT || 5000;
app.listen(5000, () => {
    // console.log ('Server at running on http://localhost:5000');
    console.log(`Serve at http://localhost:${port}`)
})
// after instaling nodemon in .json package at the root of the project here: amazone_eshope
// "scripts": {
//    "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
// },