import logo from "../Images/logo.jpg"
import menu from "../Images/menu.png"
import close from "../Images/close.png"

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
mobileClose.appendChild(myCloseBtn);
