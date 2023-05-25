'use strict'

class FormController {
  constructor() {
    this.slideItems = [...document.querySelectorAll('.calculator-simulator-new__slide-item')]
    this.clearFieldsButton = document.querySelector('.clear-fields')
    this.selectField = document.querySelector('select.calculator-simulator-new__input-field')
    this.inputFields = [...document.querySelectorAll('input.calculator-simulator-new__input-field')]

    this.handleEventListener()
    this.resetFields()
  }

  handleEventListener() {
    this.slideItems.map((item) => {
      item.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return

        this.slideItems.map((item) => {
          item.classList.remove('active')
        })

        e.target.classList.add('active')
      })
    })
  }

  resetFields() {
    this.clearFieldsButton.addEventListener('click', () => {
      this.#resetSelectField()
      this.#resetInputFields()
      this.#resetSlideItems()
    })
  }

  #resetSelectField() {
    this.selectField.selectedIndex = 0
  }

  #resetInputFields() {
    this.inputFields.map((input) => {
      input.value = ''
    })
  }

  #resetSlideItems() {
    this.slideItems.map((item) => {
      item.classList.remove('active')
    })

    this.slideItems[0].classList.add('active')
  }
}

new FormController()
