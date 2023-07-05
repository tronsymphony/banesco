const creadMoreContent = document.querySelector('.read-more-content')
const readMoreWrapper = document.querySelector('.text-with-backgroung-image-new__readmore-wrapper')
const readMoreButton = document.querySelector('.text-with-backgroung-image-new__readmore-button')
const innerWrapper = document.querySelector('.text-with-backgroung-image-new__inner-wrapper')

if (readMoreWrapper) {
  readMoreWrapper.addEventListener('click', () => {
    readMoreButton.classList.toggle('readmore-active')
    creadMoreContent.classList.toggle('readmore-active')
    innerWrapper.classList.toggle('readmore-active')
    readMoreWrapper.classList.toggle('readmore-active')

    if (readMoreButton.classList.contains('readmore-active')) {
      readMoreButton.innerHTML = readMoreWrapper.dataset.readless
    } else {
      readMoreButton.innerHTML = readMoreWrapper.dataset.readmore
    }
  })
}
