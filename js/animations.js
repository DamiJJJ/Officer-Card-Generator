"use strict";

(function () {

  function initScrollReveal() {
    const targets = document.querySelectorAll(".guma-reveal");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  }

  function initTileStagger() {
    const tiles = document.querySelectorAll(".guma-tile-stagger");
    if (!tiles.length) return;

    requestAnimationFrame(() => {
      tiles.forEach((tile, i) => {
        tile.style.animationDelay = `${i * 80}ms`;
        requestAnimationFrame(() => tile.classList.add("is-playing"));
      });
    });
  }

  function init() {
    initScrollReveal();
    initTileStagger();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
