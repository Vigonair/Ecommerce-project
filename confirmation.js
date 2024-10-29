document.addEventListener("DOMContentLoaded", function () {
    // Extract and display the order ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('orderId');
    document.getElementById('order-id').textContent = orderId || "N/A"; // Fallback if orderId is missing

    // Load cart data from localStorage and display it
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutItemsContainer = document.getElementById('checkout-items');
    let totalAmount = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'checkout-item';
        itemElement.innerHTML = `
          <div class="item-details">
            <img src="${item.image}" alt="${item.name}" class="product-image-small"/>
            <div class="item-info">
                <span>${item.name}</span>
                <span>₹${item.price} x ${item.quantity}</span>
            </div>
        </div>
    `;
        checkoutItemsContainer.appendChild(itemElement);
        totalAmount += item.price * item.quantity;
    });

    document.getElementById('total-amount').textContent = totalAmount;

    window.proceedToPayment = function() {
        alert("Payment successful!");
        
        const receiptElement = document.createElement('div');
        receiptElement.className = 'receipt-message';
        receiptElement.innerHTML = `
            <h2>Payment Successful!</h2>
            <p>Your order has been confirmed and will be shipped soon.</p>
        `;
        document.body.appendChild(receiptElement);

        localStorage.removeItem('cart');
        localStorage.removeItem('totalPrice');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 8000);
    };
});
