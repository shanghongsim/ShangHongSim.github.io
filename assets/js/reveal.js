// Scroll-reveal: fades content in as it enters the viewport.
// Elements get .sr-item (hidden) and .sr-in (revealed) — styles in _sass/_editorial.scss.
// Skips elements that already animate on load (.cv-reveal) and respects reduced motion.
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  const SELECTORS = [
    ".post-header",
    ".post article > *",
    ".header-bar",
    ".post-list > li",
    ".publications .bibliography > li",
    ".publications h2.bibliography",
    ".projects .grid-item",
    ".projects .card",
    ".cv-page > section",
    ".cv-page > div",
    ".life-grid .life-item",
    ".life-section",
    ".social",
  ].join(", ");

  function init() {
    const items = Array.from(document.querySelectorAll(SELECTORS)).filter((el) => !el.classList.contains("cv-reveal"));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // stagger the batch that intersects together
        let i = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.style.transitionDelay = `${Math.min(i, 6) * 70}ms`;
          el.classList.add("sr-in");
          observer.unobserve(el);
          i += 1;
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    items.forEach((el) => {
      el.classList.add("sr-item");
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
