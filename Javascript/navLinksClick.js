const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    console.log("JavaScript file loaded!");

    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});
