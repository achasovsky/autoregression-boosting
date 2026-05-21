function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to element (anchor 'href' analog)
function scrollToID(id) {
  
  let element = document.getElementById(id);

  element.scrollIntoView({
    block: 'start',
    // behavior: 'smooth',
    inline: 'start'
  });
} 

function logit(x) {
  console.log(x)
}

function deactivateAllTOCElements() {

  let toc = document.getElementById('toc-id')
  let tocChildren = [... toc.children]

  tocChildren.forEach((el, i) => {
    el.classList.remove('active')
  })
  
}


function activateSection(sections, screenHeight) {

  sections.forEach((section, i) => {

    let id = section.getAttribute('target')
    let menuItem = document.getElementById('#' + id)

    let boundingRect = section.getBoundingClientRect()
    let top = boundingRect.top
    let bottom = boundingRect.bottom

    if ((top < 0.25*screenHeight) & ((bottom > 0) & (bottom > 0.25*screenHeight))) {
      menuItem.classList.add('active')
    } else {
      menuItem.classList.remove('active')
    }

  })
  
}


