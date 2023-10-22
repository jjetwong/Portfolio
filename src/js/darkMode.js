const darkColor = "#252B2D";
const lightColor = "#e5e3dc";

const darkModeButton = document.getElementById("darkMode");
const nav = document.getElementsByClassName("navbar__link");
const projectsImg = document.getElementsByClassName("projects__img");

let dark = false;
function darkMode() {
  if (dark == false) {
    dark = true;
    document.body.style.backgroundColor = darkColor;
    darkModeButton.innerHTML = "LightMode";
    document.getElementById("header").style.backgroundColor = darkColor;
    document.getElementById("mainTitle").style.color = lightColor;
    document.getElementById("about").style.color = lightColor;
    document.getElementById("projects").style.color = lightColor;
    for (var i = 0; i <= nav.length; i++) {
      nav[i].style.color = lightColor;
    }
  } else {
    dark = false;
    document.body.style.backgroundColor = lightColor;
    document.getElementById("header").style.backgroundColor = lightColor;
    document.getElementById("mainTitle").style.color = darkColor;
    document.getElementById("about").style.color = darkColor;
    document.getElementById("projects").style.color = darkColor;
    darkModeButton.innerHTML = "DarkMode";
    for (var i = 0; i <= nav.length; i++) {
      nav[i].style.color = darkColor;
    }
  }
}

darkModeButton.addEventListener("click", darkMode);
