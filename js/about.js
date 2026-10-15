(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsObserver = "IntersectionObserver" in window;

  if (prefersReducedMotion || !supportsObserver) return;

  const revealItems = document.querySelectorAll("[data-about-reveal]");
  const progressItems = document.querySelectorAll("[data-about-path]");

  if (!revealItems.length && !progressItems.length) return;

  document.body.classList.add("about-motion-ready");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -36px 0px"
  });

  revealItems.forEach((item) => revealObserver.observe(item));

  const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -48px 0px"
  });

  progressItems.forEach((item) => progressObserver.observe(item));
})();
