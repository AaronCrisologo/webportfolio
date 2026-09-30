// Show navbar logo only after scrolling past the landing section
(function () {
  var nav = document.querySelector('.navbar');
  var landing = document.getElementById('landing');

  function toggleLogo() {
    var pastLanding = window.scrollY > (landing.offsetTop + landing.offsetHeight - 80);
    nav.classList.toggle('logo-visible', pastLanding);
  }

  window.addEventListener('scroll', toggleLogo, { passive: true });
  toggleLogo();
})();
