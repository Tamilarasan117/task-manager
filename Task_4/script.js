document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".timeline-item");

  const revealOnScroll = () => {
      items.forEach(item => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
              item.classList.add("visible");
          }
      });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
