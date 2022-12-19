let hamburger_btn = document.querySelector(".hamburger_img");
let close_hamburger_btn = document.querySelector(".close_hamburger");
let modal_menu_container = document.querySelector(".modal_menu_container");  



const openMobileMenu = e => {
  e.preventDefault();
  modal_menu_container.classList.remove('hide1') 
}

const closeMobileMenu = e => {
  e.preventDefault()
  modal_menu_container.classList.add('hide1') 
}

hamburger_btn.addEventListener("click", openMobileMenu);
close_hamburger_btn.addEventListener("click", closeMobileMenu); 