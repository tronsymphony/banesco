const flippingBooks = [...document.querySelectorAll('.flipping-book a')]
const iframeVideos = [...document.querySelectorAll('.iframe-video a')]
const darkOverlay = document.querySelector('.dark-overlay')
const closeIcon = document.querySelector('.pdf-with-link-new__close-icon')

flippingBooks.map((book) => {
  const flippingBookWrapper = book.parentElement.querySelector('.pdf-with-link-new__flipping-book-wrapper')

  book.addEventListener('click', (e) => {
    e.preventDefault()

    darkOverlay.style.display = 'block'
    closeIcon.style.display = 'block'
    flippingBookWrapper.classList.toggle('book-hidden')
  })
})

closeIcon.addEventListener('click', () => {
  darkOverlay.style.display = 'none'
  closeIcon.style.display = 'none'

  flippingBooks.map((book) => {
    const flippingBookWrapper = book.parentElement.querySelector('.pdf-with-link-new__flipping-book-wrapper')

    if (flippingBookWrapper) {
      flippingBookWrapper.classList.add('book-hidden')
    }
  })

  iframeVideos.map((video) => {
    const flippingBookWrapper = video.parentElement.querySelector('.pdf-with-link-new__flipping-book-wrapper')

    if (flippingBookWrapper) {
      flippingBookWrapper.classList.add('book-hidden')
    }
  })
})

iframeVideos.map((video) => {
  const flippingBookWrapper = video.parentElement.querySelector('.pdf-with-link-new__flipping-book-wrapper')

  video.addEventListener('click', (e) => {
    e.preventDefault()
    darkOverlay.style.display = 'block'
    closeIcon.style.display = 'block'
    flippingBookWrapper.classList.toggle('book-hidden')
  })
})
