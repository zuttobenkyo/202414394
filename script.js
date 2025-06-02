document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');
  const pages = document.querySelectorAll('.page');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-page');

      pages.forEach(page => {
        page.classList.remove('active');
      });

      document.getElementById(targetId).classList.add('active');
    });
  });
});
