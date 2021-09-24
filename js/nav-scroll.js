document.addEventListener("DOMContentLoaded", () => {
  (function scrollSpy() {
   const targets = document.querySelectorAll(".section"),
    options = {
     threshold: 0.5
    };
   // check if IntersectionObserver is supported
   if ("IntersectionObserver" in window) {
    (() => {
     const inView = target => {
      const interSecObs = new IntersectionObserver(entries => {
       entries.forEach(entry => {
        const elem = entry.target;
        let currentNav = document.querySelector(
         `#home-nav ul li a[href='#${elem.id}']`
        );
        entry.isIntersecting
         ? currentNav.classList.add("active-"+elem.id)
         : currentNav.classList.remove("active-"+elem.id);
       });
      }, options);
      interSecObs.observe(target);
     };
     targets.forEach(inView);
    })();
   }
  })();
 });


