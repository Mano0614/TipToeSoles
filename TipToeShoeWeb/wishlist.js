document.addEventListener("DOMContentLoaded", () => {
  renderWishlist();
});

function renderWishlist() {
  const wishlistContainer = document.querySelector(".wishlist-container");
  const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

  wishlistContainer.innerHTML = wishlist
    .map(
      (item) => `
        <div class="wishlist-item">
        <a href="Product.html?id=${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            </a>
            <button onclick="removeFromWishlist(${item.id})">Remove</button>
        </div>
    `
    )
    .join("");
}

function removeFromWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  wishlist = wishlist.filter((item) => item.id !== productId);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishlist();
}

document.addEventListener("DOMContentLoaded", () => {
  renderWishlist();
});
