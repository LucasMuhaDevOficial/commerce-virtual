const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.total-price');

let total = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productTitle = product.querySelector('h2').textContent;
        const productPrice = product.querySelector('.price').textContent;
        
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${productTitle} - ${productPrice}`;
        
        cartItemsList.appendChild(cartItem);
        
        // Atualize o preço total
        const price = parseFloat(productPrice.replace('$', ''));
        total += price;
        cartTotal.textContent = `$${total.toFixed(2)}`;
    });
});
