// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ktk ham di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik luar side bar buat ilangin navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

window.addEventListener("scroll", function() {
  const indicator = document.querySelector(".scroll-indicator");
  if (window.scrollY > 50) {
    indicator.classList.add("hide");
  } else {
    indicator.classList.remove("hide");
  }
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 2500);
});
