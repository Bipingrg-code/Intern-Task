//grab the value
const nextBtn = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStemCount = 0;

nextBtn.forEach((btn) => {
  //console.log("clicked");
  btn.addEventListener("click", () => {
    formStemCount++;
    updateFormSteps();
    upDateProgressBar();
  });
});

//next step data update
function updateFormSteps() {
  formSteps.forEach((formstep) => {
    formstep.classList.contains("active") &&
      formstep.classList.remove("active");
  });
  formSteps[formStemCount].classList.add("active");
}

//next step progress-steps update
function upDateProgressBar() {
  progressSteps.forEach((stage, id) => {
    if (id < formStemCount + 1) {
      stage.classList.add("active");
    } else {
      stage.classList.remove("active");
    }
  });
  //progress-active
  const progressActive = document.querySelectorAll(".progress-step.active");
  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
