events();

document.addEventListener("astro:after-swap", () => { events() });

function events() {
  const menu = document.querySelector(".menu");
  document.querySelector(".hamburger svg").addEventListener("click", () => {
    menu.classList.toggle("invisible");
    menu.classList.replace("opacity-0", "opacity-1");
  });

  document.querySelector(".close").addEventListener("click", () => {
    menu.classList.replace("opacity-1", "opacity-0");
    setTimeout(() => menu.classList.toggle("invisible"), 150);
  });
}