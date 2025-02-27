// Function to display products from localStorage
window.addEventListener('DOMContentLoaded', function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productGrid = document.getElementById('product-grid');

    if (products.length === 0) {
        productGrid.innerHTML = '<p>No products added yet.</p>';
    } else {
        productGrid.innerHTML = ''; // Clear any previous product grid

        products.forEach((product, index) => {
            const productItem = document.createElement('div');
            productItem.classList.add('grid-item');

            const imgElement = document.createElement('img');
            imgElement.src = product.image; // Use the uploaded image
            imgElement.alt = 'Product Image';

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = product.description;

            const priceElement = document.createElement('p');
            priceElement.textContent = `$${product.price}`;  // Display the price

            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            addButton.classList.add('add-to-cart-btn');
            addButton.onclick = function() {
                addToCart(product);
            };

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.onclick = function() {
                deleteProduct(index);  // Call the function to delete the product
            };

            // Append elements to the product item
            productItem.appendChild(imgElement);
            productItem.appendChild(descriptionElement);
            productItem.appendChild(priceElement);  // Add price element
            productItem.appendChild(addButton);
            productItem.appendChild(deleteButton);

            productGrid.appendChild(productItem);
        });
    }
});

// Add product to the cart
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);  // Add the product to the cart array
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the cart to localStorage
    alert('Product added to cart!');
}

// Delete product from the grid and localStorage
function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);  // Remove product at the specified index
    localStorage.setItem('products', JSON.stringify(products));  // Update localStorage
    location.reload();  // Reload the page to reflect the changes
}
