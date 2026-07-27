document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#primary-navigation");
const printButton = document.querySelector(".print-button");
const year = document.querySelector("#current-year");

function closeNavigation() {
  if (!navToggle || !navigation) return;
  navToggle.setAttribute("aria-expanded", "false");
  navigation.removeAttribute("data-open");
}

if (navToggle && navigation) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.toggleAttribute("data-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
      navToggle.focus();
    }
  });
}

if (printButton) {
  printButton.addEventListener("click", () => window.print());
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}
