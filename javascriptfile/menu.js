let hamburger_btn = document.querySelector(".hamburger_img")
let close_hamburger_btn = document.querySelector(".close_hamburger")
let modal_menu_container = document.querySelector(".hamburger_img")

hamburger_btn.addEventListener("click", openMobileMenu);
close_hamburger_btn.addEventListener("click", closeMobileMenu);

const openMobileMenu = e => {
  e.preventDefault();
  modal_menu_container.classList.add('block1')
}
const closeMobileMenu = e => {
  e.preventDefault()
  modal_menu_container.classList.remove('block1')
}