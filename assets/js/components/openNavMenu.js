const btnBurger = document.querySelector('.btn-burger');
const navbarMobile = document.querySelector('.navbar-mobile');

btnBurger.addEventListener('click', (e) => {
  navbarMobile.classList.toggle('is-active');
})