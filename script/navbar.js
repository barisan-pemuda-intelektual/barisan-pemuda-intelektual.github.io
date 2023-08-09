var prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.querySelector('.navbar');

  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove('scrolled');
  } else {
    navbar.classList.add('scrolled');
  }

  prevScrollPos = currentScrollPos;
});

  
function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    }