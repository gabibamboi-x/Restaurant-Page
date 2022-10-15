const menu = (function() {
  const menuContent = document.createElement('div')
  menuContent.setAttribute('class', 'menuContent')
  const section = document.querySelector('.section')

  menuContent.innerHTML = 
  '<div class="drinks">\
  <div class="list"><h1>HOT</h1>\
    <div class="wrapper">\
      <div><h2>AMERICANO</h2>\
        <div class="item"><p>Lorem, ipsum dolor sit amet</p><span></span><h3>$5.99</h3></div>\
      </div>\
      <div><h2>ESPRESSO</h2>\
        <div class="item"><p>Lorem, ipsum dolor sit amet</p><span></span><h3>$4.99</h3></div>\
      </div>\
      <div><h2>RISTRETTO</h2>\
        <div class="item"><p>Lorem, ipsum dolor sit amet</p><span></span><h3>$9.99</h3></div>\
      </div>\
      <div><h2>MOCHA</h2>\
        <div class="item"><p>Lorem, ipsum dolor sit amet</p><span></span><h3>$7.99</h3></div>\
      </div>\
      <div><h2>LATTE</h2>\
        <div class="item"><p>Lorem, ipsum dolor sit amet</p><span></span><h3>$6.49</h3></div>\
      </div>\
      <div><h2>VIENNA</h2>\
        <div class="item"><p>Lorem, ipsum dolor sit amet</p><span></span><h3>$11.99</h3></div>\
      </div>\
   </div></div><br>\
  <div class="list"><h1>COLD</h1>\
    <div class="wrapper">\
      <div><h2>ICED LATTE</h2>\
        <div class="item"><p>Lorem, ipsum dolor sit amet</p><span></span><h3>$3.99</h3></div>\
      </div>\
    <div><h2>FRAPPUCCINO</h2>\
        <div class="item"><p>Lorem, ipsum dolor sit amet</p><span></span><h3>$4.99</h3></div>\
      </div>\
    <div><h2>CREAMY ICED COFFEE</h2>\
        <div class="item"><p>Lorem, ipsum dolor sit amet</p><span></span><h3>$4.99</h3></div>\
      </div>\
    <div><h2>FLAT WHITE</h2>\
        <div class="item"><p>Lorem, ipsum dolor sit amet</p><span></span><h3>$6.99</h3></div>\
  </div></div></div>'

  section.appendChild(menuContent)
})()

export default menu