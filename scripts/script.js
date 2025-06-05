const NAVBAR_UL = document.getElementById("navbar-ul");
const BURGER_MENU = document.getElementById("burger-menu-pointer");
const HEADER_NAV_LI = document.querySelectorAll(".header-nav");
const TEXTAREA = document.getElementById("description");
const SCROLL_BUTTON = document.getElementById("scroll-to-top-button");

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

//Scroll to top button logic (mobile - desktop)

function scrollButtonVisibility() {
  if (SCROLL_BUTTON !== null) {
    SCROLL_BUTTON.style.display = window.scrollY > 300 ? "block" : "none";
  }
}

window.addEventListener("scroll", () => {
  scrollButtonVisibility();
});

if (SCROLL_BUTTON !== null) {
  SCROLL_BUTTON.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

let isMobileSize = window.innerWidth < 992 ? true : false;

function resizeOnPages(isOnload) {
  //Set the default value of the class when the z-window exceeds the 992px point (mobile - desktop)
  if (!isOnload) {
    NAVBAR_UL.classList = new Array();
    BURGER_MENU.classList = new Array();
    HEADER_NAV_LI.forEach((element) => {
      if (element.classList.contains("picked-nav")) {
        element.classList = ["header-nav picked-nav"];
      } else {
        element.classList = ["header-nav no-picked-nav"];
      }
    });
  }

  //Smallet textarea for mobile devices on the contant page

  if (TEXTAREA !== null) {
    if (!isMobileSize) {
      TEXTAREA.attributes.cols.value = "50";
    } else {
      TEXTAREA.attributes.cols.value = "35";
    }
  }
}

window.onresize = () => {
  if (isMobileSize !== (window.innerWidth < 992 ? true : false)) {
    isMobileSize = !isMobileSize;
    resizeOnPages(false);
  }
};

(function () {
  resizeOnPages(true);
  scrollButtonVisibility();
})();
