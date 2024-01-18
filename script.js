const inputs = document.querySelectorAll("input");
const errorLogo = document.querySelectorAll(".error");
const errorMessage = document.querySelectorAll(".validation-message");
const submitButton = document.querySelector(".submit");

console.log(submitButton);

submitButton.addEventListener("click", () => {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      inputs[i].classList.add("border-red");
      errorLogo[i].classList.add("visible");
      errorMessage[i].classList.add("appear");
    } else {
      inputs[i].classList.remove("border-red");
      errorLogo[i].classList.remove("visible");
      errorMessage[i].classList.remove("appear");
    }
  }
});
