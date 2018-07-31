function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  const link = document.getElementById('navbar-link');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-shown');
        link.classList.add('navbar-link');
      } else {
        navbar.classList.remove('navbar-wagon-shown');
        link.classList.remove('navbar-link');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
