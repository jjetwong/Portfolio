const darkModeButton = document.getElementById("darkMode");
const lightModeButton = document.getElementById("lightMode");

const navOne = document.getElementById("nav1");
const navTwo = document.getElementById("nav2");
const navThree = document.getElementById("nav3");
const artistSiteLink = document.getElementById("artistSiteLink");

const mainTitle = document.getElementById("mainTitle");
const aboutDesc = document.getElementById("aboutDesc");
const portTitle = document.getElementById("portTitle");
const artistSite = document.getElementById("artistSite");
const contact = document.getElementById("email");
const footer = document.getElementById("footer");

let dark = false;

/*navOne.onmouseover = function () {
  navOne.style.color = "#558564";
};
navTwo.onmouseover = function () {
  navTwo.style.color = "#558564";
};
navThree.onmouseover = function () {
  navThree.style.color = "#558564";
};

navOne.onmouseout = function () {
  navOne.style.color = "#252B2D";
};
navTwo.onmouseout = function () {
  navTwo.style.color = "#252B2D";
};
navThree.onmouseout = function () {
  navThree.style.color = "#252B2D";
};*/

function darkMode() {
  if (dark == false) {
    dark = true;
    document.body.style.backgroundColor = "#252B2D";
    darkModeButton.style.color = "#E5E3DC";
    darkModeButton.innerHTML = "LightMode";
    mainTitle.style.color = "#E5E3DC";
    aboutDesc.style.color = "#E5E3DC";
    portTitle.style.color = "#E5E3DC";
    contact.style.color = "#E5E3DC";
    footer.style.color = "#E5E3DC";
    artistSite.style.color = "#E5E3DC";
    artistSite.style.borderBottom = "1px solid #E5E3DC";
    document.getElementById("aboutTitle").style.color = "#E5E3DC";

    /*darkModeButton.onmouseover = function () {
      darkModeButton.style.color = "#558564";
    };
    darkModeButton.onmouseout = function () {
      darkModeButton.style.color = "#E5E3DC";
    };*/

    navOne.style.color = "#E5E3DC";
    navTwo.style.color = "#E5E3DC";
    navThree.style.color = "#E5E3DC";
    navOne.onmouseout = function () {
      navOne.style.color = "#E5E3DC";
    };
    navTwo.onmouseout = function () {
      navTwo.style.color = "#E5E3DC";
    };
    navThree.onmouseout = function () {
      navThree.style.color = "#E5E3DC";
    };
  } else {
    dark = false;
    document.body.style.backgroundColor = "#CBC8B9";
    darkModeButton.style.color = "#252B2D";
    darkModeButton.innerHTML = "DarkMode";
    mainTitle.style.color = "#252B2D";
    aboutDesc.style.color = "#252B2D";
    portTitle.style.color = "#252B2D";
    contact.style.color = "#252B2D";
    footer.style.color = "#252B2D";
    artistSite.style.color = "#252B2D";
    artistSite.style.borderBottom = "1px solid #252B2D";
    document.getElementById("aboutTitle").style.color = "#252B2D";
    darkModeButton.onmouseout = function () {
      darkModeButton.style.color = "#252B2D";
    };

    navOne.style.color = "#252B2D";
    navTwo.style.color = "#252B2D";
    navThree.style.color = "#252B2D";

    navOne.onmouseout = function () {
      navOne.style.color = "#252B2D";
    };
    navTwo.onmouseout = function () {
      navTwo.style.color = "#252B2D";
    };
    navThree.onmouseout = function () {
      navThree.style.color = "#252B2D";
    };
  }
}

darkModeButton.addEventListener("click", darkMode);
