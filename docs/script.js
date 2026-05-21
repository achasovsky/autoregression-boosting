// Button 'Наверх'
let mybutton = document.getElementById('toTocBtn');

// sections to activate TOC
let sections = document.querySelectorAll('section[target]')
let height = screen.height

// Activate TOC on scroll
window.onscroll = function() {

  // top button
  scrollFunction()

  activateSection(sections, height)
  
}






