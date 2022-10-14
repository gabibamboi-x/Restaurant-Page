import logo from "../Images/logo.jpg"
import menu from "../Images/menu.png"
import close from "../Images/close.png"


const header = (function () {
  // to avoid repetition while creating the DOM (create the divs, add the class, innerText etc.)
  // and append all elements, it's been created with innerHTML and the module pattern for increased 
  // front-end security
  document.body.innerHTML = 
  '<section class="section">\
  <div class="menu close-btn"></div>\
    <div class="header">\
      <div class="logo"></div>\
      <div class="menu menu-btn"></div>\
      <div class="navigation">\
        <ul>\
          <li id="home">Home</li>\
          <li id="menu">Menu</li>\
          <li id="contact">Contact</li>\
        </ul>\
      </div>\
    </div>\
    </section>\
    </div>'

  const icon = document.querySelector('.logo')
  const mobileMenu = document.querySelector('.menu-btn')
  const mobileClose = document.querySelector('.close-btn')

  const myLogo = new Image();
  myLogo.src = logo;
  icon.appendChild(myLogo)

  const myMenu = new Image();
  myMenu.src = menu;
  mobileMenu.appendChild(myMenu);

  const myCloseBtn = new Image();
  myCloseBtn.src = close;
  mobileClose.appendChild(myCloseBtn)
})()

export default header
