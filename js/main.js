// changing theme
const icon = document.querySelector("#icon");
icon.addEventListener("click", function (event) {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "images/moon.png";
  } else {
    icon.src = "images/sun.png";
  }
});
// user input
const headingElement = document.querySelector("#heading");
const subHeadingElement = document.querySelector("#sub-heading");
const inputElement = document.querySelector("#input-name");
const buttonElement = document.querySelector("#submit-button");

buttonElement.addEventListener("click", function (event) {
  event.preventDefault();
  let enteredName = inputElement.value;
  if (enteredName !== "") {
    headingElement.innerText = "Thank You!" + " " + enteredName;
    subHeadingElement.innerText = "For Contacting Me...";
  } else {
    headingElement.innerText = "Contact Me";
    subHeadingElement.innerText = " Fill this Form to Contact";
  }
});
