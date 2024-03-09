document.addEventListener("DOMContentLoaded", function () {
  var searchBtn = document.getElementById("search-btn");
  var closeBtn = document.getElementById("close-btn");
  var searchInput = document.getElementById("search-input");
  var searchCheckBtn = document.getElementById("search-btn-check");

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

  searchBtn.addEventListener("click", function () {
    searchInput.style.width = "200px";
    searchInput.style.paddingLeft = "35px";
    searchInput.style.visibility = "visible";
    searchInput.style.opacity = 1;
    closeBtn.style.display = "block";
    searchCheckBtn.style.display = "block";

    searchInput.focus();
  });

  closeBtn.addEventListener("click", function () {
    searchInput.style.width = "0";
    searchInput.style.visibility = "hidden";
    searchInput.style.opacity = 0;
    this.style.display = "none";
    searchCheckBtn.style.display = "none";
    searchInput.value = "";
  });

  searchCheckBtn.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm) {
      const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.brand.toLowerCase().includes(searchTerm)
      );

      if (filteredProducts.length === 1) {
        window.location.href = `Product.html?id=${filteredProducts[0].id}`;
      } else if (filteredProducts.length > 1) {
        window.location.href = `New.html?search=${encodeURIComponent(
          searchTerm
        )}`;
      } else {
        alert("No products found.");
      }
    }
  });
});
