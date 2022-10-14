import "./styles/main.css"
import "./styles/responsive.css"
import header from "./modules/header"
import home from "./modules/loadHome"

(function() {
  const menu = document.querySelector('.menu')
  const menuBtn = document.querySelector('.menu-btn')
  const closeBtn = document.querySelector('.close-btn')
  const navigation = document.querySelector('.navigation')

  // open the menu, add active class for the actual menu to show
  menuBtn.addEventListener('click' , () => {
    navigation.classList.add('active')
    closeBtn.style.display = 'block'
    menuBtn.style.display = 'none'
  })

  // close the menu by removing the class 
  closeBtn.addEventListener('click' , () => {
    navigation.classList.remove('active')
    menuBtn.style.display = 'block'
    closeBtn.style.display = 'none'
  })

  // while resizing the window with the menu
  // open the layout breaks, therefore, a check is done whenever the window
  // is resized and if it passes the 600 limit all values are reset
  // and the normal menu button is shown back when resized lower than 600 
  // (works like a charm, after banging my head against the table for 2h 😂)
  window.onresize = () => {
    if (innerWidth > 600){
      navigation.classList.remove('active')
      menu.style.display = 'none'
      menuBtn.style.display = 'none'
    } else if (innerWidth < 600) {
      menuBtn.style.display = 'block'
    }
  }
})()