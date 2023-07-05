'use strict'

const readMoreButton = document.querySelector('.features-new__read-more-button')
const hiddenContents = [...document.querySelectorAll('.features-new__feature--hidden')]

if (readMoreButton) {
  readMoreButton.addEventListener('click', (e) => {
    e.target.classList.toggle('active')

    hiddenContents.map((hiddenContent) => {
      hiddenContent.classList.toggle('features-new__feature--hidden')
    })
  })
}
