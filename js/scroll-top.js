const scrollToTopButton = document.getElementById("scroll-top-button");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
