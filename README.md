# E-Commerce Project

This is a simple e-commerce web application designed as part of a mini-project for learning and practice purposes. It allows users to browse products, add items to a cart, and simulate the checkout process. This project was built using HTML, CSS, JavaScript, and a mock backend, utilizing LocalStorage for persistence.

## Features

- **Product Listing**: Displays a variety of products (e.g., shirts, pants, shoes) with name, price, and rating.
- **Shopping Cart**: Add items to a cart, update quantities, and remove items.
- **Search Functionality**: Filters products by categories to improve user experience.
- **Checkout Flow**: Simulates a checkout process, allowing users to review items, confirm payment, and view order details.
- **Star Rating**: Users can rate products, and ratings are stored locally for each session.

## Architecture Overview

This project is organized with a focus on modular JavaScript files:
- **cart.js**: Manages cart operations, including adding, updating, and removing products.
- **checkout.js**: Handles the checkout process, displays the cart’s contents, and calculates the total price.
- **confirmation.js**: Generates a unique order ID, displays order details, and confirms payment success.
  
## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend (Mock)**: LocalStorage and JSON-like data
- **Libraries**: `Body-Parser` and `CORS` for potential backend integration (future expansion planned)

## Getting Started

### Prerequisites

To run the project locally, you need a web browser and optionally a basic HTTP server.

### Running Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/username/ecommerce-project.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ecommerce-project
    ```
3. Open `index.html` in a web browser to start using the application.

## Implementation Details

- **LocalStorage for Persistence**: Used to save the cart’s contents across page reloads, enabling a smoother user experience.
- **Body-Parser and CORS**: These libraries were added to support future backend integration, especially if the project is expanded to use a database.
- **Star Rating**: Users can assign star ratings to each product, with ratings stored temporarily for each session.
- **Checkout Flow**: The checkout process allows users to view an order summary, proceed to payment, and receive an order confirmation with a unique order ID.

## Challenges and Learning Outcomes

During this project, I encountered several challenges, including:
- Implementing a dynamic cart with LocalStorage persistence.
- Integrating a search function to filter products effectively.
- Managing a confirmation flow that simulates order and payment processes.

These challenges enhanced my understanding of web development fundamentals, local storage, and project structuring.

## Future Improvements

I plan to add:
- **Database Integration**: Switch from LocalStorage to MongoDB for data persistence.
- **User Authentication**: Implement login and logout features.
- **Enhanced UI**: Improve the interface for a more polished, user-friendly experience.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

