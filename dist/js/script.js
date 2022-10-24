//Hamburger
const navMenu = document.querySelector("#nav-menu");
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});

//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
