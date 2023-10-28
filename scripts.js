document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
