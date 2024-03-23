const headerBtn = document.querySelector("#headerBtn");
const userCabinet = document.querySelector("#userCabinet");
const btnForm = document.querySelector("#btn-form");
const headerInputName = document.querySelector("#headerInputName");
const headerInputPassword = document.querySelector("#headerInputPassword");
const headerInputEmail = document.querySelector("#headerInputEmail");
const userCabinetForm = document.querySelector("#userCabinetForm");

export const onClickPopup = (event) => {
  event.preventDefault();
  userCabinet.classList.toggle("header-popup-open");
};

headerBtn.addEventListener("click", onClickPopup);
btnForm.addEventListener("click", () => {
  if (
    headerInputEmail.value !== "" &&
    headerInputName.value !== "" &&
    headerInputPassword.value !== ""
  ) {
    headerBtn.textContent = headerInputName.value;
    userCabinet.classList.remove("header-popup-open");
    headerBtn.removeEventListener("click", onClickPopup);
    btnForm.textContent = "Успешный вход!";
  }
});
