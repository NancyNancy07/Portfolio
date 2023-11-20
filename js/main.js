const icon = document.querySelector("#icon");
icon.addEventListener("click", function (event) {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "images/moon.png";
  } else {
    icon.src = "images/sun.png";
  }
});
