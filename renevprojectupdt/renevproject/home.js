window.addEventListener('DOMContentLoaded', function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productGrid = document.getElementById('product-grid');

    // Filter products by category "vehicle"
    const vehicleProducts = products.filter(product => product.category === 'vehicle');

    if (vehicleProducts.length === 0) {
        productGrid.innerHTML = '<p>No vehicle products added yet.</p>';
    } else {
        productGrid.innerHTML = ''; // Clear any previous product grid

        vehicleProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('grid-item');

            const imgElement = document.createElement('img');
            imgElement.src = product.image;
            imgElement.alt = 'Product Image';

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = product.description;

            const priceElement = document.createElement('p');
            priceElement.textContent = `$${product.price}`;

            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            addButton.classList.add('add-to-cart-btn');
            addButton.onclick = function() {
                addToCart(product);
            };

            // Append elements to the product item
            productItem.appendChild(imgElement);
            productItem.appendChild(descriptionElement);
            productItem.appendChild(priceElement);
            productItem.appendChild(addButton);

            productGrid.appendChild(productItem);
        });
    }
});

// Add product to the cart
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}
