// Button 'Наверх'
let mybutton = document.getElementById('toTocBtn');

// sections to activate TOC
let sections = document.querySelectorAll('section[target]')

// Activate TOC on scroll
window.onscroll = function() {

  // top button
  scrollFunction()

  let height = screen.height
  
  sections.forEach((section, i) => {

    let id = section.getAttribute('target')
    let menuItem = document.getElementById('#' + id)

    let boundingRect = section.getBoundingClientRect()
    let top = boundingRect.top
    let bottom = boundingRect.bottom

    if ((top < 0.25*height) & ((bottom > 0) & (bottom > 0.25*height))) {
      menuItem.parentElement.classList.add('active')
    } else {
      menuItem.parentElement.classList.remove('active')
    }

  })
  
}






