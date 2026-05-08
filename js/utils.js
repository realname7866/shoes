function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}

function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}

/* UPDATE CART NUMBER */

function updateCartCount() {

    const cart = getCart();

    let total = 0;

    cart.forEach(item => {

        total += item.quantity;

    });

    /* GET ALL CART COUNT ELEMENTS */

    const cartCounts =
        document.querySelectorAll("#cart-count");

    cartCounts.forEach(el => {

        el.textContent = total;

    });

}

/* ADD PRODUCT */

function addToCart(productId) {

    const cart = getCart();

    const existingItem = cart.find(

        item => item.id === productId

    );

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }

    saveCart(cart);

    /* FORCE UPDATE */

    updateCartCount();

    /* SMALL DELAY SAFETY */

    setTimeout(() => {

        updateCartCount();

    }, 50);

    showCartMessage();

}

/* SUCCESS POPUP */

function showCartMessage() {

    const old =
        document.getElementById("cart-toast");

    if (old) {
        old.remove();
    }

    const toast =
        document.createElement("div");

    toast.id = "cart-toast";

    toast.innerText = "Added to cart";

    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.background = "#88c8bc";
    toast.style.color = "white";
    toast.style.padding = "12px 20px";
    toast.style.zIndex = "9999";
    toast.style.borderRadius = "4px";
    toast.style.fontSize = "14px";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 2000);

}

/* PAGE LOAD */

document.addEventListener(

    "DOMContentLoaded",

    function () {

        updateCartCount();

    }

);