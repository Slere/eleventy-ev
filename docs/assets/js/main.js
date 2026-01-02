   document.addEventListener("DOMContentLoaded", () => {
    console.log("Main JS loaded");
    const elements = document.querySelectorAll(".js-fade-in");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.8 
      }
    );

    elements.forEach(el => observer.observe(el));
  });