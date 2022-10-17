const contact = (function() {
  const contactDiv = document.createElement('div')
  const section = document.querySelector('.section')
  contactDiv.setAttribute('class', 'contactContent')

  contactDiv.innerHTML = 
  '<div class="contact">\
    <h1>Hours</h1>\
    <p>Monday - Thursday: 10:30AM - 11:00PM</p>\
    <p>Thursday - Sunday: 08:30AM - 11:30PM</p>\
  <br><h1>Contact Us</h1>\
    <p>by Email: odinscoffee@realemail.com</p>\
    <p>by Phone: 194-274-8562</p>\
  <br><h1>Address</h1>\
    <p>420 Real Street</p>\
    <p>Valhalla, VH</p>\
    <p>V8P C0F</p>\
  <br>\
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48110.0757056718!2d-73.80176343513683!3d41.093474335062695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2958c7377bc3d%3A0x29a23f616afc5cfa!2sValhalla%2C%20NY%2C%20USA!5e0!3m2!1sen!2sde!4v1666025331473!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\
  </div><footer>\
    <a href="https://github.com/gabibamboi-x">\
      Developed by <img class="gitContact"> gabibamboi-x\
    </a>\
  </footer>\
  <div class="credit">Credit to all mentioned below for the pictures: \
    <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a>\
    <a href="https://unsplash.com/@brigittetohm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brigitte Tohm</a>\
    <a href="https://unsplash.com/@yaanapi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yanapi Senaud</a>\
    <a href="https://unsplash.com/@danieltafjord?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel Tafjord</a>\
    <a href="https://unsplash.com/@ceydaciftci?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ceyda Çiftci</a>\
    <a href="https://unsplash.com/@topicc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nikola Topić</a>\
    <br>\
    <div><a target="_blank" href="https://icons8.com/icon/3096/menu">Menu and Close</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a></div>\
  </div>'

  section.appendChild(contactDiv)
})()

export default contact