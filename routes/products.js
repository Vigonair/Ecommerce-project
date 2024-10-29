const express = require('express');
const router = express.Router();

// Route to get all products (mocked data or static file)
router.get('/', (req, res) => {
    // Mocked product data (replace with actual data as needed)
    const products = [
        { id: 1, name: 'Product 1', price: 250 },
        { id: 2, name: 'Product 2', price: 300 },
        { id: 4, name: 'Product 3', price: 450 },
        { id: 5, name: 'Product 4', price: 500 },
        { id: 6, name: 'Pants 1', price: 650 },
        { id: 7, name: 'Product 6', price: 1200 },
        { id: 8, name: 'Hush Puppies Black Formal', price: 799 },
        { id: 9, name: 'Product 9', price: 759 },
        { id: 10, name: 'Product 10', price: 859 },
        { id: 11, name: 'Product 11', price: 1759 },
        { id: 12, name: 'Product 12', price: 1999 },
        { id: 13, name: 'Product 13', price: 4999 },
        { id: 14, name: 'Product 14', price: 999 },
        { id: 15, name: 'Product 15', price: 959 },



        
    ]
    res.json(products); // Respond with the static/mock data
});

module.exports = router;

