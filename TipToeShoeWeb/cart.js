document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  updateCartTotal();
});

function renderCart() {
  const cartContainer = document.querySelector(".cart-container");
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  cartContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
        <a href="Product.html?id=${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            </a>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `
    )
    .join("");

  updateCartTotal();
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function updateCartTotal() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.slice(1)),
    0
  );

  const totalElement = document.getElementById("cart-total");
  totalElement.textContent = `$${total.toFixed(2)}`;
}
