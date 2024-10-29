document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");

    if (searchBar) {
        searchBar.addEventListener("input", filterProducts);
    } else {
        console.error("Search bar not found");
    }
});

function filterProducts() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();
        const productCategory = product.querySelector("p.category") 
            ? product.querySelector("p.category").textContent.toLowerCase() 
            : "";

        if (productName.includes(searchQuery) || productCategory.includes(searchQuery)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
