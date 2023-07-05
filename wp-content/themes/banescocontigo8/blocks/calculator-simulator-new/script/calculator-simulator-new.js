'use strict'

class FormController {
  constructor() {
    //Form Fields
    this.initialAllowance = null
    this.loanType = document.querySelector('#loanType').value
    this.loanYears = document.querySelector('#loanYears').value
    this.property = document.querySelector('#property').value
    this.salePrice = null
    this.age = document.querySelector('#age').value

    this.slideItems = [...document.querySelectorAll('.calculator-simulator-new__slide-item')]
    this.clearFieldsButton = document.querySelector('.clear-fields')
    this.selectFields = [...document.querySelectorAll('select.calculator-simulator-new__input-field')]
    this.numberInputs = [...document.querySelectorAll('input.calculator-simulator-new__input-field')]
    this.inputFields = [...document.querySelectorAll('input.calculator-simulator-new__input-field')]
    this.formElement = document.querySelector('.calculator-simulator-new__form')
    this.hiddenYearInput = document.querySelector('#loanYears')
    this.loanSelectField = document.querySelector('#loanType')
    this.propertySelectField = document.querySelector('#property')
    this.calculationResult = document.querySelector('.calculator-simulator-new__result-text--right')
    this.formFooter = document.querySelector('.calculator-simulator-new__form-footer')

    this.handleSlideItemListener()
    this.resetFields()
    this.handleCalculations()
    this.listenSelectField([this.loanSelectField, this.propertySelectField])
  }

  handleSlideItemListener() {
    this.slideItems.map((item) => {
      item.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return

        this.slideItems.map((item) => {
          item.classList.remove('active')
        })

        e.target.classList.add('active')

        this.hiddenYearInput.value = e.target.dataset.years
      })
    })
  }

  resetFields() {
    if (this.clearFieldsButton) {
      this.clearFieldsButton.addEventListener('click', () => {
        this.removeAllErrors()
        this.#resetSelectField()
        this.#resetInputFields()
        this.#resetSlideItems()
      })
    }
  }

  handleCalculations() {
    this.formElement.addEventListener('submit', (e) => {
      e.preventDefault()
      this.formFooter.classList.remove('form-footer--active')

      if (this.validateNumberInputs() && this.validateClientAge() && this.validateInitialAllowance()) {
        this.initialAllowance = this.formElement.elements.initialAllowance.value
        this.loanType = this.formElement.elements.loanType.value
        this.loanYears = this.formElement.elements.loanYears.value
        this.property = this.formElement.elements.property.value
        this.salePrice = this.formElement.elements.salePrice.value
        this.age = this.formElement.elements.age.value

        let H7 = this.calculateLoanSumm()
        let I7 = this.calculateTasaVariable()
        let J7 = this.calculateFeci()
        let F7 = this.calculateMonths()
        let K7 = 8.56

        // Step 1: Calculate the term inside the first set of parentheses
        let step1 = I7 / 11.767 + J7 / 11.767
        // Step 2: Calculate the term inside the second set of parentheses
        let step2 = 1 + step1
        // Step 3: Calculate the exponent term
        let step3 = F7
        // Step 4: Calculate the denominator
        let step4 = Math.pow(step2, step3) - 1
        // Step 5: Calculate the numerator
        let step5 = H7 * step1 * Math.pow(step2, step3)
        // Step 6: Calculate the final result
        let result = step5 / step4 + K7

        this.calculationResult.innerHTML = ''
        this.calculationResult.innerHTML = `Abono Inicial $${this.initialAllowance} | $${result.toFixed(2)}`

        this.formFooter.classList.add('form-footer--active')
      }
    })
  }

  validateNumberInputs() {
    this.removeAllErrors()
    let valid = true

    this.numberInputs.map((input) => {
      if (!input.value) {
        input.parentElement.querySelector('.error-message').classList.add('message--visible')
        input.parentElement.classList.add('has-error')
        valid = false
      }
    })

    return valid
  }

  validateClientAge() {
    let valid = true
    let age = Number(this.formElement.querySelector('#age').value)
    let loanYears = Number(this.formElement.querySelector('#loanYears').value)

    if (age + loanYears > 79) {
      valid = false
      this.formElement.querySelector('.age-error').classList.add('message--visible')
    }

    return valid
  }

  validateInitialAllowance() {
    let valid = true

    if (
      this.formElement.querySelector('#salePrice').value / 10 >
      this.formElement.querySelector('#initialAllowance').value
    ) {
      valid = false
      this.formElement.querySelector('.payment-error').classList.add('message--visible')
    }

    return valid
  }

  calculateTasaVariable() {
    if (this.loanType === 'Vivienda Principal') {
      if (this.property === 'Casa') {
        return this.salePrice <= 120000 ? 1.75 / 100 : 7.25 / 100
      }

      if (this.property === 'Apartamento') {
        if (this.salePrice <= 120000) {
          return 1.75 / 100
        }

        if (this.salePrice > 120000 && this.salePrice <= 150000) {
          return 3.75 / 100
        }

        if (this.salePrice > 150000 && this.salePrice <= 180000) {
          return 4.25 / 100
        }

        if (this.salePrice > 180000) {
          return 7.25 / 100
        }
      }
    }

    if (this.loanType === 'Segunda Residencia') {
      if ((this.initialAllowance / this.salePrice) * 100 >= 30) {
        return 7.6 / 100
      } else {
        return 7.75 / 100
      }
    }
  }

  calculateLoanSumm() {
    return this.salePrice - this.initialAllowance
  }

  calculateFeci() {
    return this.loanType === 'Vivienda Principal' ? 0 / 100 : 1 / 100
  }

  calculateMonths() {
    return this.loanYears * 12
  }

  #resetSelectField() {
    this.selectFields.map((select) => {
      select.selectedIndex = 0
    })
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

    const activeElement = Array.from(this.slideItems).find(
      (element) => !element.classList.contains('item-hidden'),
    )

    if (activeElement) {
      activeElement.classList.add('active')
    }
  }

  listenSelectField(selectFields) {
    selectFields.map((select) => {
      select.addEventListener('change', () => {
        this.hideAllSlideItems()
        this.showSlideItems()
      })
    })
  }

  showSlideItems() {
    this.slideItems.map((item) => {
      if (
        this.loanSelectField.value === 'Vivienda Principal' &&
        (this.propertySelectField.value === 'Casa' || this.propertySelectField.value === 'Apartamento')
      ) {
        if (
          item.dataset.years === '15' ||
          item.dataset.years === '20' ||
          item.dataset.years === '25' ||
          item.dataset.years === '30'
        ) {
          item.classList.remove('item-hidden')
        }
      }

      if (
        this.loanSelectField.value === 'Segunda Residencia' &&
        (this.propertySelectField.value === 'Casa' || this.propertySelectField.value === 'Apartamento')
      ) {
        if (
          item.dataset.years === '5' ||
          item.dataset.years === '10' ||
          item.dataset.years === '15' ||
          item.dataset.years === '20' ||
          item.dataset.years === '25'
        ) {
          item.classList.remove('item-hidden')
        }
      }
    })
  }

  hideAllSlideItems() {
    this.slideItems.map((item) => {
      item.classList.add('item-hidden')
    })
  }

  removeAllErrors() {
    const errorMessages = [...this.formElement.querySelectorAll('.error-message')]
    const formErrorMessages = [...this.formElement.querySelectorAll('.calculator-simulator-new__errors-text')]

    errorMessages.map((message) => {
      message.classList.remove('message--visible')
    })

    formErrorMessages.map((message) => {
      message.classList.remove('message--visible')
    })

    this.numberInputs.map((input) => {
      input.parentElement.classList.remove('has-error')
    })
  }
}

new FormController()
