let hamburger = document.querySelector(".hamburger")
let top_menu = document.querySelector(".top_menu")

hamburger.onclick = function () {
  top_menu.classList.toggle ("mini_menu")
  hamburger.classList.toggle ("hamburger_open")
}