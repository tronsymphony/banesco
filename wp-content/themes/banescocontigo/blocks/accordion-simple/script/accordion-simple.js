'use strict'
document.querySelectorAll('.accordions').forEach(function(accordions) {
    accordions.querySelectorAll('.accordions__item').forEach(function(accordion) {
      const triger = accordion.querySelector('.accordions__item-header')
      const content = accordion.querySelector('.accordions__item-body')
      triger.addEventListener('click', function() {
        accordion.classList.toggle('active')
      })
    })
  })