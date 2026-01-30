const ninjaKeys = document.querySelector("ninja-keys");

// determineComputedTheme is only available when darkmode is enabled
if (typeof determineComputedTheme === "function") {
  let searchTheme = determineComputedTheme();
  if (searchTheme === "dark") {
    ninjaKeys.classList.add("dark");
  } else {
    ninjaKeys.classList.remove("dark");
  }
}

function openSearchModal() {
  // collapse navbarNav if expanded on mobile
  const $navbarNav = $("#navbarNav");
  if ($navbarNav.hasClass("show")) {
    $navbarNav.collapse("hide");
  }
  ninjaKeys.open();
}
window.openSearchModal = openSearchModal;
