import "./styles/main.css"
import "./styles/secondary.css"
import "./styles/responsive.css"
import gitlogo from "./Images/gitlogo.png" 
import header from "./modules/template"
import home from "./modules/loadHome"
import menu from "./modules/loadMenu"
import contact from "./modules/loadContact"


(function() {
  // get DOM elements
  const section = document.querySelector('.section')
  // navigation
  const menu = document.querySelector('.menu')
  const menuBtn = document.querySelector('.menu-btn')
  const closeBtn = document.querySelector('.close-btn')
  const navigation = document.querySelector('.navigation')
  // content
  const homeContent = document.querySelector('.mainContent')
  const menuContent = document.querySelector('.menuContent')
  const contactContent = document.querySelector('.contactContent')
  // the tabs
  const home = document.getElementById('home')
  const menuTab = document.getElementById('menu')
  const contact = document.getElementById('contact')

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
  // open the layout would break, therefore, a check is done whenever the window
  // is resized and if it passes the 600 limit, all values are reset
  // and the normal menu button is shown back when resized lower than 600 
  // (works like a charm, after banging my head against the table for 2h 😂)
  window.onresize = () => {
    if (innerWidth > 599){
      navigation.classList.remove('active')
      menu.style.display = 'none'
      menuBtn.style.display = 'none'
    } else if (innerWidth < 600) {
      menuBtn.style.display = 'block'
    }
  }


  home.addEventListener('click', () => {
    closeMenu()
    contactContent.style.display = 'none'
    menuContent.style.display = 'none'
    homeContent.style.display = ''
    section.classList.remove('nHome')
  })

  menuTab.addEventListener('click', () => {
    closeMenu()
    contactContent.style.display = 'none'
    homeContent.style.display = 'none'
    menuContent.style.display = 'block'
    section.classList.add('nHome')
  })

  contact.addEventListener('click', () => {
    closeMenu()
    homeContent.style.display = 'none'
    menuContent.style.display = 'none'
    contactContent.style.display = 'block'
    section.classList.remove('nHome')
  })

  // close the menu when something new has been chosen
  function closeMenu() {
    if (innerWidth < 601) {
      closeBtn.click()
    }
  }

  // add the footer
  const github = document.querySelector('.git')
  const github2 = document.querySelector('.gitMenu')
  const github3 = document. querySelector('.gitContact')
  github.src = github2.src = github3.src = gitlogo

})();