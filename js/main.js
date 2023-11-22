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

// removing welcome div
const imgElement = document.querySelector(".logo-centered");
const imgDivElement = document.querySelector(".logo-centered-container");
imgDivElement.addEventListener("click", function (event) {
  this.remove();
  imgElement.remove();
});
