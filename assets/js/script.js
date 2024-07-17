// Link Dropdown
const servicesDropdownLink = document.querySelectorAll(
  ".services-dropdown-link"
);
const servicesDropdownContent = document.querySelector(
  ".services-dropdown-content"
);

// Removing the dropdown module
function cancelDropdown() {
  console.log("Hello World");
  // Cancel the popout but only after a second
  setTimeout(() => {
    var userActive = false;
    // Detect if the user is still active on the dropdown
    if (
      servicesDropdownContent.matches(":hover") == true ||
      servicesDropdownContent.matches(":focus") == true
    ) {
      userActive = true;
    }
    servicesDropdownLink.forEach((link) => {
      if (link.matches(":hover") == true || link.matches(":focus") == true) {
        userActive = true;
      }
    });

    // If they aren't
    if (userActive == false) {
      // Close the menu
      clearTimeout(dropdownTimeout);
      servicesDropdownContent.classList.add("hide");
    }
  }, 1000);
}

function handleDropdown() {
  // If the user moves away within the specifc time
  servicesDropdownLink.forEach((link) =>
    link.addEventListener("mouseout", cancelDropdown)
  );
  servicesDropdownLink.forEach((link) =>
    link.addEventListener("focusout", cancelDropdown)
  );

  // Only display the popout after a specific time
  dropdownTimeout = setTimeout(() => {
    servicesDropdownContent.classList.remove("hide");
    servicesDropdownContent.addEventListener("mouseout", cancelDropdown);
    servicesDropdownContent.addEventListener("focusout", cancelDropdown);
  }, 250);
}

// Detect when the services link is highlighted
servicesDropdownLink.forEach((link) =>
  link.addEventListener("mouseover", handleDropdown)
);
servicesDropdownLink.forEach((link) =>
  link.addEventListener("focusin", handleDropdown)
);

// Minimal navbar on scroll
const navbar = document.querySelector("nav");

document.addEventListener("scroll", () => {
  var scrollHeight = document.documentElement.scrollTop;
  // Appear after scrolling 150 pixels. Hide after scrolling within 150 pixels
  if (scrollHeight >= 150) {
    navbar.classList.add("navigation-minimal");
    navbar.style.top = "0";
  } else if (scrollHeight > 10 && scrollHeight < 150) {
    navbar.style.top = "-100%";
    setTimeout(() => {
      navbar.classList.remove("navigation-minimal");
    }, 25);
  } else {
  }
});

// Navigation menu

const navigationMenu = document.querySelector(".navigation-menu");
const navigationLinks = document.querySelectorAll(".navigation-links");

console.log(navigationLinks);

navigationMenu.addEventListener("click", () => {
  navigationMenu.classList.toggle("navigation-active");
  navigationLinks.forEach((link) => {
    link.classList.toggle("navigation-active");
  });
});
