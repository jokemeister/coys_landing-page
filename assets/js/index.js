// slider
import "bootstrap/js/src/carousel.js";
// /slider

// mobile nav menu open on btn-burger click
import "./components/openNavMenu.js";
// /mobile nav menu open on btn-burger click

// phone number input formatting
import "./components/formatPhoneNumber.js";
// /phone number input formatting

document.addEventListener('DOMContentLoaded', () => {
  const orderInput = document.querySelector('.js--order-input');
  orderInput.addEventListener('input', (e) => {
    formatPhoneNumber(orderInput, e.data);
  })
});