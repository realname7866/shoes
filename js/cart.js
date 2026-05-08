const cartItems = getCart();

const cartContainer = document.getElementById("cart-items");

let total = 0;

cartItems.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);

    total += product.price * item.quantity;

    cartContainer.innerHTML += `
    <div class="cart-item">
      <h3>${product.name}</h3>

      <p>
        ${item.quantity} × $${product.price}
      </p>
    </div>
  `;
});

document.getElementById("cart-total").innerText =
    `$${total}`;