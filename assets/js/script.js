// Link Dropdown
const servicesDropdownLink = document.querySelector(".services-dropdown-link");
const servicesDropdownContent = document.querySelector(
  ".services-dropdown-content"
);

function cancelDropdown() {
  // Cancel the popout
  clearTimeout(dropdownTimeout);
  servicesDropdownContent.classList.add("hide");
}

function handleDropdown() {
  // If the user moves away within the specifc time
  servicesDropdownLink.addEventListener("mouseout", cancelDropdown);
  servicesDropdownLink.addEventListener("focusout", cancelDropdown);

  // Only display the popout after a specific time
  dropdownTimeout = setTimeout(() => {
    servicesDropdownLink.removeEventListener("mouseout", cancelDropdown);
    servicesDropdownLink.removeEventListener("focusout", cancelDropdown);
    servicesDropdownContent.classList.remove("hide");

    while (
      servicesDropdownContent.matches(":hover") !== false ||
      (servicesDropdownContent.matches(":focus") !== false &&
        servicesDropdownLink.matches(":hover") !== false) ||
      servicesDropdownLink.matches(":focus") !== false
    ) {
      console.log("Hello World");
    }
  }, 250);
}

// Detect when the services link is highlighted
servicesDropdownLink.addEventListener("mouseover", handleDropdown);
servicesDropdownLink.addEventListener("focusin", handleDropdown);
