document.addEventListener('DOMContentLoaded', () => {
  const formButton = document.querySelector('.two-column-image-form-new__form-button')

  if (formButton) {
    const formWrapper = document.querySelector('.two-column-image-form-new__form-wrapper')
    const closeButton = formWrapper.querySelector('.two-column-image-form-new__close-button')

    formButton.addEventListener('click', () => {
      formWrapper.classList.remove('closed')
    })

    closeButton.addEventListener('click', () => {
      formWrapper.classList.add('closed')
    })
  }
})
