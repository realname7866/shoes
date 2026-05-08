const productContainer = document.getElementById("product-list");

function renderProducts(products) {
    productContainer.innerHTML = "";

    products.forEach(product => {
        productContainer.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">

        <h3>${product.name}</h3>

        <p>$${product.price}</p>

        <button onclick="addToCart('${product.id}')">
          Add To Cart
        </button>

        <a href="product.html?id=${product.id}">
          View Product
        </a>
      </div>
    `;
    });
}

renderProducts(PRODUCTS);