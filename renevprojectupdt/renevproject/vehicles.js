window.onload = function() {
    const category = 'vehicle'; // Ganti dengan kategori sesuai halaman, misalnya 'home', 'vehicle', 'clothes'
    const products = JSON.parse(localStorage.getItem(category)) || [];

    const productContainer = document.getElementById('product-container'); // Pastikan ada elemen dengan id 'product-container'

    if (products.length === 0) {
        productContainer.innerHTML = "<p>No products available in this category.</p>";
    } else {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            const img = document.createElement('img');
            img.src = product.image;
            productElement.appendChild(img);

            const description = document.createElement('p');
            description.textContent = product.description;
            productElement.appendChild(description);

            const price = document.createElement('p');
            price.textContent = `$${product.price}`;
            productElement.appendChild(price);

            productContainer.appendChild(productElement);
        });
    }
};
