'use strict'

const tabs = [...document.querySelectorAll('.banner-with-buttons-tabs-new__tab')]
const contents = [...document.querySelectorAll('.banner-with-buttons-tabs-new__content')]
const showHideButtons = [...document.querySelectorAll('.banner-with-buttons-tabs-new__grey-button')]
const hiddenContent = [...document.querySelectorAll('.banner-with-buttons-tabs-new__hidden')]

tabs.map((tab) => {
  tab.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return

    tabs.map((tab) => {
      tab.classList.remove('active')
    })

    e.target.classList.add('active')

    contents.map((content) => {
      if (content.classList.contains('active')) content.classList.remove('active')
    })

    if (e.target.classList.contains('first_tab_title')) {
      document.querySelector('.first_tab_content').classList.add('active')
    } else {
      document.querySelector('.second_tab_content').classList.add('active')
    }
  })
})

showHideButtons.map((button) => {
  button.addEventListener('click', (e) => {
    e.target.classList.toggle('active')

    e.target.parentElement.nextElementSibling.classList.toggle('active')
  })
})
