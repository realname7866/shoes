const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = PRODUCTS.find(p => p.id === productId);

if (product) {
    document.getElementById("product-name").innerText =
        product.name;

    document.getElementById("product-image").src =
        product.image;

    document.getElementById("product-price").innerText =
        `$${product.price}`;

    document.getElementById("product-description").innerText =
        product.description;
}