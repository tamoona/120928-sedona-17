window.onload = function() {
  objectFitImages();

  document.querySelector("body").classList.remove("no-js");

  document.querySelector(".main-nav__toggle").addEventListener("click", function() {
    document.querySelector(".main-nav").classList.toggle("main-nav--opened");
  });
};
