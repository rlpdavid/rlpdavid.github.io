// Home page: keep the menu-bar logo hidden while the hero logo (#im-hero-logo) is on screen,
// and show it once the hero logo has scrolled under the fixed menu bar.
(function () {
  var heroLogo = document.getElementById("im-hero-logo");
  if (!heroLogo) return;
  var body = document.body;
  if (!("IntersectionObserver" in window)) {
    body.classList.add("im-show-header-logo");
    return;
  }
  new IntersectionObserver(
    function (entries) {
      body.classList.toggle("im-show-header-logo", !entries[0].isIntersecting);
    },
    { rootMargin: "-120px 0px 0px 0px" }
  ).observe(heroLogo);
})();
