window.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const checkoutButton = document.createElement('button');

    // Menampilkan pesan jika keranjang kosong
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');

            // Image element
            const imgElement = document.createElement('img');
            imgElement.src = item.image;  // Product image
            imgElement.alt = 'Product Image';

            // Description element
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = item.description;

            // Button to remove item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('cart-item-remove');
            removeButton.addEventListener('click', function() {
                removeItem(index);  // Menghapus barang berdasarkan indeks
            });

            // Append all elements to cartItemDiv
            cartItemDiv.appendChild(imgElement);
            cartItemDiv.appendChild(descriptionElement);
            cartItemDiv.appendChild(removeButton);

            // Append cartItemDiv to cart container
            cartContainer.appendChild(cartItemDiv);
        });

        // Button Checkout
        checkoutButton.textContent = 'Proceed to Order or Rent';
        checkoutButton.id = 'checkout-btn';
        checkoutButton.addEventListener('click', checkout);
        cartContainer.appendChild(checkoutButton);
    }

    // Fungsi untuk menghapus item dari keranjang
    function removeItem(index) {
        cartItems.splice(index, 1);  // Hapus item dari array berdasarkan indeks
        localStorage.setItem('cart', JSON.stringify(cartItems));  // Simpan ulang di localStorage
        location.reload();  // Refresh halaman setelah item dihapus
    }

    // Fungsi untuk checkout
    function checkout() {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Add some items before proceeding to order or rent.');
        } else {
            // Menyimpan riwayat checkout
            const checkoutHistory = JSON.parse(localStorage.getItem('checkoutHistory')) || [];
            const newOrder = {
                date: new Date().toLocaleString(),  // Menyimpan tanggal dan waktu checkout
                items: cartItems  // Barang yang dipesan
            };
            checkoutHistory.push(newOrder);
            localStorage.setItem('checkoutHistory', JSON.stringify(checkoutHistory));

            alert('Proceeding to order or rent.');
            localStorage.removeItem('cart');  // Mengosongkan keranjang setelah checkout
            
            // Redirect ke halaman history.html
            window.location.href = 'history.html';  // Mengarahkan ke halaman riwayat
        }
    }
});
