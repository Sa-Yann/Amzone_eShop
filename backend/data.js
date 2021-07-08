import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'SaiYann',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },{
            name: 'Jhon',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            // _id only necessary in static mode, automatically addde in MongoDb mode
            // _id: '1',
            name: 'Nike Slim Shirt',
            category: 'shirts',
            images: '/assets/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Zara',
            rating: 3.7,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            // _id: '2',
            name: 'H&M Slim Shirt',
            category: 'shirts',
            images: '/assets/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'H&M',
            rating: 4.2,
            numReviews: 16,
            description: 'high quality product',
        },
        {
            // _id: '3',
            name: 'Celio Slim Shirt',
            category: 'shirts',
            images: '/assets/p3.jpg',
            price: 140,
            countInStock: 0,
            brand: 'Celio',
            rating: 4.8,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            // _id: '4',
            name: 'Gap Fit Pant',
            category: 'pants',
            images: '/assets/p4.jpg',
            price: 110,
            countInStock: 15,
            brand: 'Gap',
            rating: 4.5,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            // _id: '5',
            name: 'Asos Fit Pant',
            category: 'pants',
            images: '/assets/p5.jpg',
            price: 120,
            countInStock: 5,
            brand: 'Asos',
            rating: 3.6,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            // _id: '6',
            name: 'C&A Fit Pant',
            category: 'pants',
            images: '/assets/p6.jpg',
            price: 120,
            countInStock: 12,
            brand: 'C&A',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        }
    ]
}
export default data