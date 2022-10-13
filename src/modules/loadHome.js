import coffee1 from "../Images/coffee1.jpg"
import coffee2 from "../Images/coffee2.jpg"
import coffee3 from "../Images/coffee3.jpg"
import coffee4 from "../Images/coffee4.jpg"
import coffee5 from "../Images/coffee5.jpg"
import coffee6 from "../Images/coffee6.jpg"
import coffee7 from "../Images/coffee7.jpg"
import coffee8 from "../Images/coffee8.jpg"
import coffee9 from "../Images/coffee9.jpg"

function createLandingPage() {
  const coffeeDiv = document.querySelectorAll('.images') 
  const coffeeimg = [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6, coffee7, coffee8, coffee9];

  let i = 0
  coffeeDiv.forEach(el => {
    const newImage = new Image();
    newImage.src = coffeeimg[i]
    el.appendChild(newImage)
    i++;
  })

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
  });
}

export default createLandingPage;