'use strict'

const readMoreButton = document.querySelector('.full-width-image-text-new__read-more-btn')
const hiddenContent = document.querySelector('.full-width-image-text-new__content.content--hidden')

readMoreButton.addEventListener('click', (e) => {
  e.target.classList.toggle('active')

  hiddenContent.classList.toggle('content--hidden')
})
