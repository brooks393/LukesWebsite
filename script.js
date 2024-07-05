const navbarDropdownLink = document.querySelector('#dropbtn')
const navbarDropdownContent = document.querySelector(".dropdown-content")

console.log(navbarDropdownLink)
console.log(navbarDropdownContent)

navbarDropdownLink.addEventListener("click", function (e) {
    navbarDropdownContent.classList.toggle("show")
    console.log("Hello World")
})
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})