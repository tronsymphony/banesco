class CardsController {
  constructor() {
    this.checkboxes = [...document.querySelectorAll('.compare-three-cards-new__checkbox')]
    this.popUpItems = [...document.querySelectorAll('.compare-three-cards-new__popup-item')]
    this.popup = document.querySelector('.compare-three-cards-new__popup')
    this.popUpInnerClose = document.querySelector('.compare-three-cards-new__popup-inner-close')
    this.submitButton = document.querySelector('.compare-three-cards-new__popup-btn')

    this.handleCheckboxes()
    this.handleCollapsedState()
    this.submitComparison()
  }

  submitComparison() {
    this.submitButton.addEventListener('click', () => {
      //window.location.href = '/tarjetas-main/tarjetas-comparar/?query=' + cards.join(',')
      const activeItems = this.popUpItems.filter(
        (item) => item.classList.contains('active') && item.dataset.url,
      )

      const dataUrls = activeItems.map((item) => item.dataset.url)

      console.log(dataUrls.join(','))
      window.location.href = '/tarjetas/comparar/?query=' + dataUrls.join(',')
    })
  }

  handleCheckboxes() {
    this.checkboxes.map((checkbox) => {
      checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
          this.handlePopUp()
          this.handleSelectedCard(checkbox)
        } else {
          const checkBoxUrl = checkbox.closest('.compare-three-cards-new__card').dataset.url
          this.handleUnselectedCard(checkBoxUrl)
        }
      })
    })
  }

  handleSelectedCard(checkbox) {
    const thumbnailUrl = checkbox.closest('.compare-three-cards-new__card').dataset.thumbnailurl
    const dataUrl = checkbox.closest('.compare-three-cards-new__card').dataset.url
    const nonActiveItem = this.popUpItems.find((item) => !item.classList.contains('active'))

    if (nonActiveItem) {
      nonActiveItem.dataset.url = dataUrl
      const image = nonActiveItem.querySelector('.compare-three-cards-new__popup-item-image img')
      image.src = thumbnailUrl
      nonActiveItem.classList.add('active')

      const closeButton = nonActiveItem.querySelector('.compare-three-cards-new__popup-item-close')
      closeButton.addEventListener('click', () => {
        this.handleUnselectedCard(nonActiveItem.dataset.url)
      })
    }
  }

  handleUnselectedCard(url) {
    const defaultThumbnail = `${origin}/wp-content/themes/banescocontigo8/assets/images/cards/none.png`
    const item = this.popUpItems.find((item) => item.dataset.url === url)

    if (item) {
      item.dataset.url = ''
      const image = item.querySelector('.compare-three-cards-new__popup-item-image img')
      image.src = defaultThumbnail
      item.classList.remove('active')
      this.checkActivePopUpItems()

      const correspondingCheckbox = this.checkboxes.find(
        (checkbox) => checkbox.closest('.compare-three-cards-new__card').dataset.url === url,
      )

      if (correspondingCheckbox) {
        correspondingCheckbox.checked = false
      }
    }
  }

  checkActivePopUpItems() {
    const activeItems = this.popUpItems.filter((item) => item.classList.contains('active'))
    if (activeItems.length === 0) {
      this.popup.classList.remove('active')
      this.popup.classList.remove('collapsed')
    }
  }

  handlePopUp() {
    this.popup.classList.add('active')
  }

  handleCollapsedState() {
    this.popUpInnerClose.addEventListener('click', () => {
      this.popup.classList.toggle('collapsed')
    })
  }
}

new CardsController()
