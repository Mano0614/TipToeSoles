document.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);
  const productId = queryParams.get("id");

  const products = [
    {
      id: 1,
      name: "Casual Blue",
      brand: "Clancy",
      colour: ["Blue"],
      price: "40",
      gender: "Man",
      image: "Clancy Blue.jpg",
      sizes: ["5", "6", "7", "8", "9", "10", "11"],
    },

    {
      id: 2,
      name: "Gary Black",
      brand: "Gary",
      colour: ["Black"],
      price: "60",
      gender: "Man",
      image: "Gary Black.jpg",
      sizes: ["5", "6", "7", "8", "9", "10", "11"],
    },

    {
      id: 3,
      name: "Gary Tan",
      brand: "Gary",
      colour: ["Brown"],
      price: "69",
      gender: "Man",
      image: "Gary Tan.jpg",
      colors: "Brown",
      sizes: ["5", "6", "7", "8", "9", "10", "11"],
    },

    {
      id: 4,
      name: "Heavenly Black Black",
      brand: "Havenly",
      colour: ["Black"],
      price: "79",
      gender: "Women",
      image: "Heavenly Black.jpg",
      colors: "Black",
      sizes: ["5", "6", "7", "8", "9", "10", "11"],
    },

    {
      id: 5,
      name: "Sally Black",
      brand: "Sally",
      colour: ["Black"],
      price: "75",
      gender: "Women",
      image: "Sally Black.jpg",
      sizes: ["5", "6", "7", "8", "9", "10", "11"],
    },

    {
      id: 6,
      name: "Sally Tan",
      brand: "Sally",
      colour: ["Brown"],
      price: "69",
      gender: "Women",
      image: "Sally Tan.jpg",
      sizes: ["5", "6", "7", "8", "9", "10", "11"],
    },

    {
      id: 5,
      name: "Work and Walk Chesnut",
      brand: "Work and Walk",
      colour: ["Brown"],
      price: "62",
      gender: "Man",
      image: "Work and Walk Chesnut.jpg",
      sizes: ["5", "6", "7", "8", "9", "10", "11"],
    },
  ];

  const product = products.find((p) => p.id.toString() === productId);

  if (product) {
    document.querySelector(".product-name").textContent = product.name;
    document.querySelector(
      ".product-brand"
    ).textContent = `Brand: ${product.brand}`;
    document.querySelector(
      ".product-price"
    ).textContent = `Price: $${product.price}`;
    document.querySelector(
      ".product-images img"
    ).src = `Resources/${product.image}`;
    document.querySelector(".product-images img").alt = product.name;

    updateOptions(product.colour, document.getElementById("color-select"));
    updateOptions(product.sizes, document.getElementById("size-select"));
  }

  function updateOptions(options, selectElement) {
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.toLowerCase();
      optionElement.textContent = option;
      selectElement.appendChild(optionElement);
    });
  }

  document
    .getElementById("add-to-wishlist")
    .addEventListener("click", function () {
      const productToAdd = {
        id: product.id,
        name: product.name,
        price: `$${product.price}`,
        image: `Resources/${product.image}`,
      };
      addToWishlist(productToAdd);
    });

  document.getElementById("add-to-cart").addEventListener("click", function () {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: `$${product.price}`,
      image: `Resources/${product.image}`,
    };
    addToCart(productToAdd);
  });
});

function addToWishlist(product) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  if (!wishlist.some((item) => item.id === product.id)) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else {
  }
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (!cart.some((item) => item.id === product.id)) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  } else {
    alert("This product is already in your cart.");
  }
}
