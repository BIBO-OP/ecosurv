window.addEventListener('DOMContentLoaded', function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productGrid = document.getElementById('product-grid');

    // Filter products by category "clothes"
    const clothesProducts = products.filter(product => product.category === 'clothes');

    if (clothesProducts.length === 0) {
        productGrid.innerHTML = '<p>No clothes products added yet.</p>';
    } else {
        productGrid.innerHTML = ''; // Clear any previous product grid

        clothesProducts.forEach(product => {
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
