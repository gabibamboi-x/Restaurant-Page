import coffee1 from "../Images/coffee1.jpg"
import coffee2 from "../Images/coffee2.jpg"
import coffee3 from "../Images/coffee3.jpg"
import coffee4 from "../Images/coffee4.jpg"
import coffee5 from "../Images/coffee5.jpg"
import coffee6 from "../Images/coffee6.jpg"
import coffee7 from "../Images/coffee7.jpg"
import coffee8 from "../Images/coffee8.jpg"
import coffee9 from "../Images/coffee9.jpg"

const homeModule = (function () {
  const section = document.querySelector('.section')

  const mainContent = document.createElement('div')
  mainContent.setAttribute('class', 'mainContent')

  mainContent.innerHTML = '<div class="textBox">\
      <h1>The Only Coffee You Need</h1>\
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\
        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>\
        <a href="#">Learn More</a>\
    </div>\
    <div class="swiper mySwiper">\
      <div class="swiper-wrapper">\
        <div class="swiper-slide images"></div>\
        <div class="swiper-slide images"></div>\
        <div class="swiper-slide images"></div>\
        <div class="swiper-slide images"></div>\
        <div class="swiper-slide images"></div>\
        <div class="swiper-slide images"></div>\
        <div class="swiper-slide images"></div>\
        <div class="swiper-slide images"></div>\
        <div class="swiper-slide images"></div>\
      </div>\
      <div class="swiper-button-next"></div>\
      <div class="swiper-button-prev"></div>\
      <div class="swiper-pagination"></div>\
    </div>\
    <div class="socialMedia">\
      <ul>\
        <li><a href="#">FACEBOOK</a></li>\
        <li><a href="#">TWITTER</a></li>\
        <li><a href="#">INSTAGRAM</a></li>\
      </ul>\
    </div>'
    
  section.appendChild(mainContent)

  const coffeeDiv = document.querySelectorAll('.images') 
  const coffeeimg = [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6, coffee7, coffee8, coffee9];

  // add an image to each div
  let i = 0
  coffeeDiv.forEach(el => {
    const newImage = new Image();
    newImage.src = coffeeimg[i]
    el.appendChild(newImage)
    i++;
  })

  // code reused from swiperjs.com
  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  })
})()

export default homeModule