const NAVBAR_UL = document.getElementById("navbar-ul");
const BURGER_MENU = document.getElementById("burger-menu-pointer");
const HEADER_NAV_LI = document.querySelectorAll(".header-nav");
const TEXTAREA = document.getElementById("description");
const SCROLL_BUTTON = document.getElementById("scroll-to-top-button");
const FORM = document.forms["contact-form"];
let isMobileSize = window.innerWidth <= 992 ? true : false;
let isMenuOpened = false;

//Form allert on submit (mobile - desktop)

if (FORM !== undefined) {
  FORM.onsubmit = (event) => {
    let isValid = true;

    const fields = ["first-name", "surname", "email", "description", "photos"];
    fields.forEach((fieldName) => {
      const field = FORM[fieldName];
      if (field.value.trim() === "") {
        field.classList.add("error");
        field.placeholder = "uzupełnij pole";
        isValid = false;
      } else {
        field.classList.remove("error");
      }
    });

    if (!isValid) {
      event.preventDefault();
      alert("Należy uzupełnić wszystkie pola");
    } else {
      alert("Dziękujemy za przesłanie formularza");
    }
  };
}

//drop-down navbar (mobile)

let burgerMenuClickEvent = BURGER_MENU.addEventListener("click", () => {
  BURGER_MENU.classList.toggle("mobile-menu");
  NAVBAR_UL.classList.toggle("mobile-menu-ul");
  HEADER_NAV_LI.forEach((element) => {
    element.classList.toggle("mobile-menu-li");
    if (!element.classList.contains("picked-nav")) {
      element.classList.toggle("no-picked-nav");
    }
  });
  isMenuOpened = true;
  setTimeout(() => {
    isMenuOpened = false;
  }, 300);
});

//Scroll to top button logic (mobile - desktop)

function scrollButtonVisibility() {
  if (SCROLL_BUTTON !== null) {
    SCROLL_BUTTON.style.display = window.scrollY > 300 ? "block" : "none";
  }
}

let globalScrollEvent = window.addEventListener("scroll", () => {
  scrollButtonVisibility();
  if (!isMenuOpened && BURGER_MENU.classList.contains("mobile-menu")) {
    defaultNavClass();
  }
});

if (SCROLL_BUTTON !== null) {
  SCROLL_BUTTON.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

//Set the default value of the class when the z-window exceeds the 992px point (mobile - desktop)

function defaultNavClass() {
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

function resizeOnPages(isOnload) {
  if (!isOnload) {
    defaultNavClass();
  } else {
    console.info("no errors in the script");
  }
}

window.onresize = () => {
  if (TEXTAREA !== null) {
    TEXTAREA.style.cssText = "width: auto; height: auto;";
  }
  if (isMobileSize !== (window.innerWidth <= 992 ? true : false)) {
    isMobileSize = !isMobileSize;
    resizeOnPages(false);
  }
};

(function () {
  scrollButtonVisibility();
  resizeOnPages(true);
})();
