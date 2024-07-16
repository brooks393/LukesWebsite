const navbarDropdownLink = document.querySelector('#dropbtn')
const navbarDropdownContent = document.querySelector(".dropdown-content")

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

navbarDropdownLink.addEventListener("click", function (e) {
    navbarDropdownContent.classList.toggle("show")
    console.log("Hello World")
})

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// keep track of previous scroll position
let prevScrollPos = window.pageXOffset;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('.main-container').classList.add('show');
  } else {
    // user has scrolled down
    document.querySelector('.main-container').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});