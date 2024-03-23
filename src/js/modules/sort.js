const paramsCategoryTopBtn = document.querySelectorAll(
  ".params-category-top__btn"
);

const paramsForm = document.querySelector(".params-category__form");
const arrowTop = document.querySelector("#arrowTop");
const paramsText = document.querySelector(".params__text");
const markaSelect = document.querySelector("#markaSelect");
const modelSelect = document.querySelector("#modelSelect");
const clearCategory = document.querySelector("#clearCategory");
const showCategory = document.querySelector("#showCategory");
const paramsCategoryBtn = document.querySelectorAll(".params-category__btn");
const paramsCategoryInputsBtn = document.querySelector(
  ".params-category__inputs-btn"
);
const probegInp = document.querySelector("#probegInp");
const engineSelect = document.querySelector("#engineSelect");
const moshnostEngine = document.querySelector("#moshnostEngine");
const moshnostDoEngine = document.querySelector("#moshnostDoEngine");
const transmisSelect = document.querySelector("#transmisSelect");
const paramsCategoryBtns3 = document.querySelector(".params-category__btns3");

paramsCategoryInputsBtn.addEventListener("click", () => {
  paramsCategoryInputsBtn.classList.toggle("paramsBtn--active");
});

clearCategory.addEventListener("click", () => {
  probegInp.value = "";
  engineSelect.value = "";
  moshnostEngine.value = "";
  moshnostDoEngine.value = "";
  transmisSelect.value = "";
  paramsCategoryBtns3.value = "";
  markaSelect.value = "";
  modelSelect.value = "";

  paramsCategoryBtn.forEach((btn) => {
    btn.classList.remove("paramsBtn--active");
  });
  paramsCategoryInputsBtn.classList.remove("paramsBtn--active");
});

showCategory.addEventListener("click", () => {
  paramsForm.classList.toggle("paramsForm--active");
  arrowTop.classList.toggle("paramsForm-transition");
});

paramsCategoryBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("paramsBtn--active");
  });
});

export const sortFunc = () => {};
