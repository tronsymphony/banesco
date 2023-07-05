class HandleSelect {
  constructor() {
    this.filterSelect = document.querySelector('.filter-tag-posts-new__filter-select')
    this.filterItemWrapper = this.filterSelect.querySelector('.filter-tag-posts-new__filter-items')
    this.selectValue = this.filterSelect.querySelector('.filter-tag-posts-new__filter-select-value')
    this.checkboxes = [...document.querySelectorAll('.filter-tag-posts-new__filter-controller')]
    this.filterBoxes = [...document.querySelectorAll('.filter-tag-posts-new__post')]

    this.handleSelectState()
    this.handleCheckboxes()
  }

  handleSelectState() {
    this.filterSelect.addEventListener('click', () => {
      this.filterSelect.classList.toggle('opened')
      this.filterItemWrapper.classList.toggle('opened')
    })
  }

  handleCheckboxes() {
    this.checkboxes.map((checkbox) => {
      checkbox.addEventListener('click', () => {
        this.handleCheckboxState()
        this.updateSelectValue(checkbox.querySelector('input').name)

        checkbox.querySelector('input').checked = true

        this.handleFilter()
      })
    })
  }

  handleCheckboxState() {
    this.checkboxes.map((checkbox) => {
      checkbox.querySelector('input').checked = false
    })
  }

  updateSelectValue(title) {
    this.selectValue.innerHTML = title
  }

  handleFilter() {
    const selectedOption = this.selectValue.innerHTML.toLowerCase().trim()

    this.filterBoxes.forEach((box) => {
      const itemValues = box.dataset.filtervalues.toLowerCase().split(',')

      if (selectedOption === 'mostrar todo' || itemValues.some((value) => value.trim() === selectedOption)) {
        box.style.display = 'block'
      } else {
        box.style.display = 'none'
      }
    })
  }
}

new HandleSelect()
