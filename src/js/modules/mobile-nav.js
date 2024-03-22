const mobileNavBtn = document.querySelector("#mobileNavBtn");
const mobileNavBlock = document.querySelector("#mobileNavBlock");
const onClickMobileNav = () => {
  mobileNavBtn.addEventListener("click", () => {
    mobileNavBtn.classList.toggle("mobile-nav-btn--active");
    mobileNavBlock.classList.toggle("mobile-nav-block--active");
    document.body.classList.toggle("overflow-hidden");
  });
};

export default onClickMobileNav;
