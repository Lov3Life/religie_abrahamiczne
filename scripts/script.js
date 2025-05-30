const NAVBAR_UL = document.getElementById("navbarUl");
const BURGER_MENU = document.getElementById("burger-menu-pointer");
const HEADER_NAV_LI = document.querySelectorAll(".headerNav");

//drop-down navbar (mobile)

BURGER_MENU.addEventListener("click", () => {
  BURGER_MENU.classList.toggle("mobile-menu");
  NAVBAR_UL.classList.toggle("mobile-menu-ul");
  HEADER_NAV_LI.forEach((element) => {
    element.classList.toggle("mobile-menu-li");
    if (!element.classList.contains("pickedNav")) {
      element.classList.toggle("noPickedNav");
    }
  });
});

let isMobileSize = window.innerWidth < 992 ? true : false; //boolean

//Set the default value of the class when the z-window exceeds the 992px point (mobile - desktop)

window.onresize = () => {
  if (isMobileSize !== (window.innerWidth < 992 ? true : false)) {
    isMobileSize = !isMobileSize;
    NAVBAR_UL.classList = new Array();
    BURGER_MENU.classList = new Array();
    HEADER_NAV_LI.forEach((element) => {
      if (element.classList.contains("pickedNav")) {
        element.classList = ["headerNav pickedNav"];
      } else {
        element.classList = ["headerNav noPickedNav"];
      }
    });
  }
};
