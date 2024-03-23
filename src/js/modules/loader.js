const loader = document.querySelector(".loader");

export const contentLoaded = () => {
  loader.style.opacity = 0;

  setTimeout(() => {
    loader.style.display = "none";
    document.body.style.overflow = "visible";
  }, 600);
};

window.addEventListener("load", contentLoaded);
