const reviewBtn = document.querySelector(".review-btn");
const backDrop = document.querySelector(".backdrop ");

reviewBtn.addEventListener("click", backdropOpener);
backDrop.addEventListener("click", backdropCloser);

function backdropOpener() {
  backDrop.classList.add("is-open");
}

function backdropCloser(event) {
  if (
    !event.target.closest(".modal-close-btn") &&
    !event.target.classList.contains("backdrop")
  ) {
    return;
  }
  backDrop.classList.remove("is-open");
}

// * * * Mobile menu * * *

const menuBtn = document.querySelector(".menu-btn");
const mobMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", menuOpener);
mobMenu.addEventListener("click", menuHandler);

function menuOpener() {
  mobMenu.classList.add("is-open");
}

function menuHandler(event) {
  event.preventDefault();
  if (
    !event.target.closest(".close-mobile-menu-btn") &&
    !event.target.closest(".mobile-menu-link")
  ) {
    return;
  }
  mobMenu.classList.remove("is-open");
}
