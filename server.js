const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API');
});

// Product Routes
const productRoutes = require('./routes/products');
app.use('/products', productRoutes); // Use /products endpoint for product data

// Checkout route
app.post('/checkout', (req, res) => {
    // Simulating an order ID generation
    const orderId = Math.floor(Math.random() * 1000000); // Generates a random order ID
    
    // Respond with a success message and order ID
    res.json({ message: 'Checkout successful', orderId: orderId });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

