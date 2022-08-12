window.onload = function () {
  document.body.classList.add('loaded');
}
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
var mainNav = document.querySelector('.navbar');

window.onscroll = function () {
  windowScroll();
};

function windowScroll() {
  mainNav.classList.toggle("test", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
}
