const NAVBAR_UL = document.getElementById("navbar-ul");
const BURGER_MENU = document.getElementById("burger-menu-pointer");
const HEADER_NAV_LI = document.querySelectorAll(".header-nav");
const GALLERY_HEDLINE = document.getElementById("gallery-headline");

//drop-down navbar (mobile)

BURGER_MENU.addEventListener("click", () => {
  BURGER_MENU.classList.toggle("mobile-menu");
  NAVBAR_UL.classList.toggle("mobile-menu-ul");
  HEADER_NAV_LI.forEach((element) => {
    element.classList.toggle("mobile-menu-li");
    if (!element.classList.contains("picked-nav")) {
      element.classList.toggle("no-picked-nav");
    }
  });
});

let isMobileSize = window.innerWidth < 992 ? true : false; //boolean

//Set the default value of the class when the z-window exceeds the 992px point (mobile - desktop)

window.onresize = () => {
  if (isMobileSize !== (window.innerWidth < 992 ? true : false)) {
    NAVBAR_UL.classList = new Array();
    BURGER_MENU.classList = new Array();
    HEADER_NAV_LI.forEach((element) => {
      if (element.classList.contains("picked-nav")) {
        element.classList = ["header-nav picked-nav"];
      } else {
        element.classList = ["header-nav no-picked-nav"];
      }
    });

    //Smaller hedline for mobile devices on the gallery page

    if (GALLERY_HEDLINE !== null) {
      if (isMobileSize) {
        GALLERY_HEDLINE.innerText = "Galeria zdjęć z waszych podroży";
      } else {
        GALLERY_HEDLINE.innerText = "Galeria zdjęć";
      }
    }
    isMobileSize = !isMobileSize;
  }
};
