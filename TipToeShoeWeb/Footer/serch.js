document.addEventListener("DOMContentLoaded", function () {
  var searchBtn = document.getElementById("search-btn");
  var closeBtn = document.getElementById("close-btn");
  var searchInput = document.getElementById("search-input");

  searchBtn.addEventListener("click", function () {
    searchInput.style.width = "200px";
    searchInput.style.paddingLeft = "35px";
    searchInput.style.visibility = "visible";
    searchInput.style.opacity = 1;
    closeBtn.style.display = "block";

    searchInput.focus();
  });

  closeBtn.addEventListener("click", function () {
    searchInput.style.width = "0";
    searchInput.style.visibility = "hidden";
    searchInput.style.opacity = 0;
    this.style.display = "none";
    searchInput.value = "";
  });
});
