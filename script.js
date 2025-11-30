document.addEventListener("DOMContentLoaded", () => {
  const upBtn = document.getElementById("upBtn");

  window.addEventListener("scroll", () => {
    const threshold = window.innerHeight * 0.5; // When button should appear

    if (window.scrollY > threshold) {
      upBtn.classList.add("visible");
    } else {
      upBtn.classList.remove("visible");
    }
  });

  upBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
