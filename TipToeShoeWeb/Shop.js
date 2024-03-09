document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Casual Blue",
      brand: "Clancy",
      colour: "Blue",
      price: "40",
      gender: "Man",
      image: "Clancy Blue.jpg",
    },

    {
      id: 2,
      name: "Gary Black",
      brand: "Gary",
      colour: "Black",
      price: "60",
      gender: "Man",
      image: "Gary Black.jpg",
    },

    {
      id: 3,
      name: "Gary Tan",
      brand: "Gary",
      colour: "Brown",
      price: "69",
      gender: "Man",
      image: "Gary Tan.jpg",
    },

    {
      id: 4,
      name: "Heavenly Black Black",
      brand: "Havenly",
      colour: "Black",
      price: "79",
      gender: "Women",
      image: "Heavenly Black.jpg",
    },

    {
      id: 5,
      name: "Sally Black",
      brand: "Sally",
      colour: "Black",
      price: "75",
      gender: "Women",
      image: "Sally Black.jpg",
    },

    {
      id: 6,
      name: "Sally Tan",
      brand: "Sally",
      colour: "Brown",
      price: "69",
      gender: "Women",
      image: "Sally Tan.jpg",
    },

    {
      id: 5,
      name: "Work and Walk Chesnut",
      brand: "Work and Walk",
      colour: "Brown",
      price: "62",
      gender: "Man",
      image: "Work and Walk Chesnut.jpg",
    },
  ];
  const brandFilter = document.getElementById("brandFilter");
  const colourFilter = document.getElementById("colourFilter");
  const priceFilter = document.getElementById("Price");
  const genderFilter = document.getElementById("Gender");
  const productList = document.querySelector(".product-list");

  brandFilter.addEventListener("change", applyFilters);
  colourFilter.addEventListener("change", applyFilters);
  priceFilter.addEventListener("change", applyFilters);
  genderFilter.addEventListener("change", applyFilters);

  function applyFilters() {
    let filteredProducts = products;

    const brandValue = brandFilter.value;
    if (brandValue !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand === brandValue
      );
    }

    const colourValue = colourFilter.value;
    if (colourValue !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.colour === colourValue
      );
    }

    const priceValue = priceFilter.value;
    if (priceValue !== "all") {
      filteredProducts = filteredProducts.filter((product) =>
        priceRangeMatch(product.price, priceValue)
      );
    }

    const genderValue = genderFilter.value;
    if (genderValue !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.gender === genderValue
      );
    }

    displayProducts(filteredProducts);
  }

  function priceRangeMatch(price, range) {
    return true;
  }

  function displayProducts(productsToDisplay) {
    productList.innerHTML = "";

    productsToDisplay.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "product";
      productElement.innerHTML = `
      <a href="Product.html?id=${product.id}">
      <img src="Resources/${product.image}" alt="${product.name}">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-brand">Brand: ${product.brand}</p>
        <p class="product-price">Price: $${product.price}</p>
        </a>
      `;
      productList.appendChild(productElement);
    });
  }

  function setGenderFromQuery() {
    const queryParams = new URLSearchParams(window.location.search);
    const genderParam = queryParams.get("gender");
    if (genderParam) {
      genderFilter.value = genderParam;
      applyFilters();
    }
  }

  function setBrandFromQuery() {
    const queryParams = new URLSearchParams(window.location.search);
    const brandParam = queryParams.get("brand");
    if (brandParam) {
      brandFilter.value = brandParam;
      applyFilters();
    }
  }

  setGenderFromQuery();
  setBrandFromQuery();
});
