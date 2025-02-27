window.addEventListener('DOMContentLoaded', function() {
    // Get the products from localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Clear the grid

    // Loop through each product and create the necessary HTML
    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.classList.add('grid-item');

        const imgElement = document.createElement('img');
        imgElement.src = product.image; // Set the image source to the base64 string

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = product.description;

        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.classList.add('add-to-cart-btn');
        addButton.onclick = function() {
            // Logic to add product to cart (You can later enhance this)
            alert('Product added to cart');
        };

        // Append everything to the grid item
        productItem.appendChild(imgElement);
        productItem.appendChild(descriptionElement);
        productItem.appendChild(addButton);

        // Add the grid item to the grid container
        productGrid.appendChild(productItem);
    });
});