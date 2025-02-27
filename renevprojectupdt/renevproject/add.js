document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const imageFile = document.getElementById('product-image').files[0];
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;  // Get the price from the input field
    const category = document.getElementById('product-category').value; // Get the selected category

    if (imageFile && description && price && category) {
        const reader = new FileReader();

        reader.onloadend = function() {
            // Create an object to hold the new product
            const newProduct = {
                image: reader.result, // base64 image
                description: description,
                price: price,
                category: category // Add category to the product object
            };

            // Get the current products for that specific category from localStorage or initialize as an empty array
            let categoryProducts = JSON.parse(localStorage.getItem(category)) || [];

            // Add the new product to the corresponding category array
            categoryProducts.push(newProduct);

            // Save the updated product list back to localStorage for that category
            localStorage.setItem(category, JSON.stringify(categoryProducts));

            // Redirect to the category page after saving the product
            window.location.href = `${category}.html`;
        };

        reader.readAsDataURL(imageFile); // Convert the image to base64
    }
});
