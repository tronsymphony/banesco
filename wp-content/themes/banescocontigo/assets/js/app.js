class DropDownMenu {
  constructor() {
    this.menuTopItems = [...document.querySelectorAll('.menu-primary-container .menu-item-has-children')]
    this.topItemSubMenu = [...document.querySelectorAll('.menu-primary-container .sub-menu')]
    this.subMenuItems = [...document.querySelectorAll('.menu-primary-container .sub-menu .menu-item')]

    this.handleTopItems()
  }

  handleTopItems() {
    this.menuTopItems.forEach((topItem) => {
      topItem.addEventListener('click', (e) => {
        e.preventDefault()

        if (topItem.classList.contains('child-level-visible')) {
          topItem.classList.remove('child-level-visible')
        } else {
          this.menuTopItems.forEach((item) => {
            item.classList.remove('child-level-visible')
          })

          topItem.classList.add('child-level-visible')
        }

        if (topItem.querySelector('.sub-menu').classList.contains('menu-child-visible')) {
          topItem.querySelector('.sub-menu').classList.remove('menu-child-visible')
        } else {
          this.topItemSubMenu.forEach((subMenu) => {
            subMenu.classList.remove('menu-child-visible')
          })

          topItem.querySelector('.sub-menu').classList.add('menu-child-visible')
        }
      })
    })

    document.querySelector('.site-main.main').addEventListener('click', () => {
      const activeMenuItem = document.querySelector(
        '.menu-primary-container .menu-item-has-children.child-level-visible',
      )

      if (activeMenuItem) {
        if (activeMenuItem.querySelector('.navigation-level-wrapper')) {
          activeMenuItem.querySelector('.navigation-level-wrapper').remove()
        }

        activeMenuItem.querySelector('.menu-item.child-level-visible').classList.remove('child-level-visible')
        activeMenuItem.querySelector('.sub-menu').classList.remove('menu-child-visible')
        activeMenuItem.classList.remove('child-level-visible')
      }
    })

    this.handleSubMenuItems()
  }

  handleSubMenuItems() {
    this.subMenuItems.map((subItem) => {
      subItem.addEventListener('click', async (e) => {
        e.stopPropagation()

        let slicedClassName = null
        const classListString = Array.from(subItem.classList).join(' ')

        if (classListString.includes('childrens-')) {
          e.preventDefault()
        }

        if (subItem.classList.contains('child-level-visible')) {
          subItem.classList.remove('child-level-visible')
        } else {
          this.subMenuItems.forEach((item) => {
            item.classList.remove('child-level-visible')
          })

          subItem.classList.add('child-level-visible')
        }

        const navigationLevelWrapper = document.querySelector('.navigation-level-wrapper')

        if (navigationLevelWrapper) {
          navigationLevelWrapper.remove()
        }

        if (classListString.includes('childrens-')) {
          for (let i = 0; i < subItem.classList.length; i++) {
            const className = subItem.classList[i]

            if (className.startsWith('childrens-')) {
              slicedClassName = className.slice(10)

              if (slicedClassName) {
                try {
                  const response = await fetch(
                    `${origin}/wp-json/menu-items/v1/options/?parent_item=${slicedClassName}`,
                  )
                  const data = await response.json()
                  subItem.innerHTML += data.html

                  this.handleThirdLevelItems()
                } catch (error) {
                  console.error(error)
                }
              }

              break
            }
          }
        }
      })
    })
  }

  handleThirdLevelItems() {
    document.querySelector('.navigation-level-wrapper').addEventListener('click', (e) => {
      e.stopPropagation()
    })
  }
}

new DropDownMenu()