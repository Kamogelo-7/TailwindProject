let svg_Icon = document.querySelector("#burger");
let menuHtml = document.querySelector("#menu");

svg_Icon.addEventListener("click", () => {
  if (menuHtml.classList.contains("hidden")) {
    menuHtml.classList.remove("hidden");
  } else {
    menuHtml.classList.add("hidden");
  }
});
