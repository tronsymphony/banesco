'use strict'

class AutoFormController {
  constructor() {
    this.carType = document.querySelector('#carType')
    this.loanTerm = document.querySelector('#loanTerm')
    this.carValue = document.querySelector('#carValue')
    this.firstFee = document.querySelector('#firstFee')
    this.clientAge = document.querySelector('#clientAge')
    this.formElement = document.querySelector('.calculator-autos-new__form')
    this.selectField = document.querySelector('select.calculator-autos-new__input-field')
    this.numberInputs = [...document.querySelectorAll('input.calculator-autos-new__input-field')]
    this.calculationResult = document.querySelector('.calculator-autos-new__result-text--right')
    this.formFooter = document.querySelector('.calculator-autos-new__form-footer')

    this.handleCalculations()
  }

  handleCalculations() {
    this.formElement.addEventListener('submit', (e) => {
      e.preventDefault()

      this.formFooter.classList.remove('form-footer--active')

      if (
        this.validateNumberInputs() &&
        this.validateFirstFee() &&
        this.validateMonths() &&
        this.validateClientAge()
      ) {
        let rateValue = this.calculateRateValue()
        let tasaFeci = (rateValue + 1) / 100
        let balance = this.calculateBalance()
        let commisionPercent = this.calculateCommisionPercent()
        let commision = 648.33 * balance * 1.07
        let totalAmount = 648.33 + balance + commision
        let agePercent = this.calculateAgePercent()
        let insuranceMonthlyPayment = (agePercent * balance) / 1000
        let monthCount = this.loanTerm.value
        let numerator = balance * ((tasaFeci / 11.744) * Math.pow(1 + tasaFeci / 11.744, monthCount))
        let denominator = Math.pow(1 + tasaFeci / 11.744, monthCount) - 1
        let capitalFee = numerator / denominator
        let roundedCapitalFee = capitalFee.toFixed(2)
        let result = Number(insuranceMonthlyPayment) + 3.21 + Number(roundedCapitalFee)

        this.calculationResult.innerHTML = ''
        this.calculationResult.innerHTML = `Abono Inicial ${this.firstFee.value} | $${result.toFixed(2)}`

        this.formFooter.classList.add('form-footer--active')
      }
    })
  }

  calculateRateValue() {
    const percentage = ((this.firstFee.value / this.carValue.value) * 100).toFixed(2)
    const loanTerm = this.loanTerm.value

    if (this.carType.value === 'Auto Nuevo') {
      if (percentage < 20) {
        if (loanTerm < 84) {
          return 6.5
        }

        if (loanTerm >= 84 && loanTerm < 90) {
          return 6.75
        }

        if (loanTerm >= 90) {
          return 7.0
        }
      }

      if (percentage >= 20 && percentage < 30) {
        if (loanTerm < 84) {
          return 6.25
        }

        if (loanTerm >= 84 && loanTerm < 90) {
          return 6.5
        }

        if (loanTerm >= 90) {
          return 6.75
        }
      }

      if (percentage >= 30) {
        if (loanTerm < 84) {
          return 6.15
        }

        if (loanTerm >= 84 && loanTerm < 90) {
          return 6.25
        }

        if (loanTerm >= 90) {
          return 6.5
        }
      }
    }

    if (this.carType.value === 'Autos Usado') {
      if (percentage < 20) {
        if (loanTerm < 60) {
          return 7.75
        }

        if (loanTerm >= 60 && loanTerm < 72) {
          return 7.75
        }

        if (loanTerm >= 72) {
          return 7.75
        }
      }

      if (percentage >= 20 && percentage < 30) {
        if (loanTerm < 60) {
          return 7.75
        }

        if (loanTerm >= 60 && loanTerm < 72) {
          return 7.75
        }

        if (loanTerm >= 72) {
          return 7.75
        }
      }

      if (percentage >= 30) {
        if (loanTerm < 60) {
          return 7.3
        }

        if (loanTerm >= 60 && loanTerm < 72) {
          return 7.3
        }

        if (loanTerm >= 72) {
          return 7.3
        }
      }
    }
  }

  calculateAgePercent() {
    if (this.clientAge.value <= 29) {
      return 0.61
    }

    if (this.clientAge.value > 29 && this.clientAge.value <= 39) {
      return 0.63
    }

    if (this.clientAge.value > 39 && this.clientAge.value <= 44) {
      return 0.66
    }

    if (this.clientAge.value > 44 && this.clientAge.value <= 49) {
      return 0.83
    }

    if (this.clientAge.value > 49 && this.clientAge.value <= 54) {
      return 1.11
    }

    if (this.clientAge.value > 54 && this.clientAge.value <= 59) {
      return 1.61
    }

    if (this.clientAge.value > 59 && this.clientAge.value <= 65) {
      return 2.4
    }

    if (this.clientAge.value > 65 && this.clientAge.value <= 79) {
      return 3.57
    }
  }

  calculateCommisionPercent() {
    const percentage = ((this.firstFee.value / this.carValue.value) * 100).toFixed(2)
    const loanTerm = this.loanTerm.value

    if (this.carType.value === 'Auto Nuevo') {
      if (percentage < 20) {
        if (loanTerm < 84) {
          return 1.75
        }

        if (loanTerm >= 84 && loanTerm < 90) {
          return 2.0
        }

        if (loanTerm >= 90) {
          return 2.0
        }
      }

      if (percentage >= 20 && percentage < 30) {
        if (loanTerm < 84) {
          return 2.25
        }

        if (loanTerm >= 84 && loanTerm < 90) {
          return 2.0
        }

        if (loanTerm >= 90) {
          return 2.0
        }
      }

      if (percentage >= 30) {
        if (loanTerm < 84) {
          return 3.05
        }

        if (loanTerm >= 84 && loanTerm < 90) {
          return 2.5
        }

        if (loanTerm >= 90) {
          return 2.5
        }
      }
    }

    if (this.carType.value === 'Autos Usado') {
      if (percentage < 20) {
        if (loanTerm < 60) {
          return 1.5
        }

        if (loanTerm >= 60 && loanTerm < 72) {
          return 1.5
        }

        if (loanTerm >= 72) {
          return 1.5
        }
      }

      if (percentage >= 20 && percentage < 30) {
        if (loanTerm < 60) {
          return 1.5
        }

        if (loanTerm >= 60 && loanTerm < 72) {
          return 1.5
        }

        if (loanTerm >= 72) {
          return 1.5
        }
      }

      if (percentage >= 30) {
        if (loanTerm < 60) {
          return 1.5
        }

        if (loanTerm >= 60 && loanTerm < 72) {
          return 1.5
        }

        if (loanTerm >= 72) {
          return 1.5
        }
      }
    }
  }

  calculateBalance() {
    return this.carValue.value - this.firstFee.value
  }

  validateNumberInputs() {
    this.removeAllErrors()
    let valid = true

    this.numberInputs.map((input) => {
      if (!input.value) {
        document.querySelector('.empty-field-error').classList.add('message--visible')
        input.parentElement.classList.add('has-error')
        valid = false
      }
    })

    return valid
  }

  validateMonths() {
    let valid = true

    if (this.carType.value === 'Auto Nuevo') {
      if (this.loanTerm.value >= 12 && this.loanTerm.value <= 96) return valid

      valid = false
      document.querySelector('.months-new').classList.add('message--visible')
      this.loanTerm.parentElement.classList.add('has-error')

      return valid
    }

    if (this.carType.value === 'Autos Usado') {
      if (this.loanTerm.value >= 12 && this.loanTerm.value <= 84) return valid

      valid = false
      document.querySelector('.months-used').classList.add('message--visible')
      return valid
    }
  }

  validateClientAge() {
    let valid = true

    if (this.clientAge.value < 18 || this.clientAge.value > 79) {
      valid = false
      this.clientAge.parentElement.classList.add('has-error')
      document.querySelector('.age-error').classList.add('message--visible')
    }

    return valid
  }

  validateFirstFee() {
    let valid = true

    if (this.carType.value === 'Auto Nuevo') {
      if (this.carValue.value / 10 > firstFee.value) {
        valid = false
        document.querySelector('.payment-error-new').classList.add('message--visible')
        this.carValue.parentElement.classList.add('has-error')
        this.firstFee.parentElement.classList.add('has-error')
      }
    }

    if (this.carType.value === 'Autos Usado') {
      if (this.carValue.value * 0.2 > firstFee.value) {
        valid = false
        document.querySelector('.payment-error-used').classList.add('message--visible')
        this.carValue.parentElement.classList.add('has-error')
        this.firstFee.parentElement.classList.add('has-error')
      }
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

  removeAllErrors() {
    const errorMessages = [...this.formElement.querySelectorAll('.error-message')]
    const formErrorMessages = [...document.querySelectorAll('.calculator-autos-new__errors-text')]

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

new AutoFormController()
