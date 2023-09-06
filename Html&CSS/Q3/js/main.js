//grab the value
const nextBtn = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formStep = document.querySelectorAll(".form-step");

let formStemCount = 0;

nextBtn.forEach((btn) => {
  //console.log("clicked");
  btn.addEventListener("click", () => {
    formStemCount++;
    updateFormSteps();
  });
});
function updateFormSteps() {
  formStep.forEach((formstep) => {
    formStep.classList.contains(".active") &&
      formStep.classList.remove(".active");
  });
  formStep[formStemCount].classList.add("active");
}
