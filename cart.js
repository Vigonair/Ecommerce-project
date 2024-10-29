let cart = [];

// Function to add product to cart
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1, image: product.image });
    }
    updateCartDisplay();
    saveCartToLocalStorage();
}

// Function to update cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <div>${item.name} - ₹${item.price} x ${item.quantity}</div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').innerText = totalPrice;
}

// Function to remove product from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartDisplay();
    saveCartToLocalStorage();
}

// Function to save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load cart from localStorage
function loadCartFromLocalStorage() {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = savedCart;
    updateCartDisplay();
}

// Load cart on page load
window.onload = loadCartFromLocalStorage;

// Checkout functionality
document.getElementById('checkout').addEventListener('click', function () {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Calculate total price of the items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Save total price to localStorage so it can be displayed on the confirmation page
    localStorage.setItem('totalPrice', totalPrice);

    // Generate a random order ID
    const orderId = Math.floor(Math.random() * 1000000) + 1;
    
    // Redirect to the confirmation page with the order ID in the URL
    window.location.href = 'confirmation.html?orderId=' + orderId;
});



// Function to rate a product
function rateProduct(productId, rating) {
    // Highlight stars
    const productStars = document.querySelectorAll(`.product:nth-child(${productId}) .star`);
    productStars.forEach(star => star.classList.remove('active'));
    for (let i = 0; i < rating; i++) {
        productStars[i].classList.add('active');
    }

    // Save rating to localStorage
    localStorage.setItem(`product_${productId}_rating`, rating);
    console.log(`Product ID: ${productId}, Rating: ${rating}`);
}

// Function to restore ratings after page reload
function restoreProductRating(productId) {
    const savedRating = localStorage.getItem(`product_${productId}_rating`);
    
    if (savedRating) {
        const productStars = document.querySelectorAll(`.product:nth-child(${productId}) .star`);
        
        // Highlight the saved stars
        for (let i = 0; i < savedRating; i++) {
            productStars[i].classList.add('active');
        }
    }
}

// Call restoreProductRating for each product when the page loads
window.onload = () => {
    const products = document.querySelectorAll('.product');
    
    products.forEach((product, index) => {
        const productId = index + 1; // Assuming product IDs are sequential starting from 1
        restoreProductRating(productId);
    });
};

