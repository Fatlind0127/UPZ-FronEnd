(function () {
  function closeNav(nav, btn) {
    nav.classList.remove("nav-open");
    btn.setAttribute("aria-expanded", "false");
  }

  function initNav(nav) {
    var btn = nav.querySelector(".nav-toggle");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var open = !nav.classList.contains("nav-open");
      nav.classList.toggle("nav-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    var list = nav.querySelector(".nav-list");
    if (list) {
      list.querySelectorAll("a[href]").forEach(function (link) {
        link.addEventListener("click", function () {
          if (window.matchMedia("(max-width: 768px)").matches) {
            closeNav(nav, btn);
          }
        });
      });
    }

    window.addEventListener("resize", function () {
      if (!window.matchMedia("(max-width: 768px)").matches) {
        closeNav(nav, btn);
      }
    });
  }

  document.querySelectorAll(".nav").forEach(initNav);
})();
