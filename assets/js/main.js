// Get the navbar toggler and the navbar content
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarContent = document.querySelector('#navbarSupportedContent');

// Add a click event listener to the navbar toggler
navbarToggler.addEventListener('click', function() {
  // Toggle the 'show' class on the navbar content
  navbarContent.classList.toggle('show');
});
