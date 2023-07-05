const heroButtons = [...document.querySelectorAll('.hero-simple-new__btn')]
console.log('working')
if (heroButtons) {
  const uri = window.location.toString()
  heroButtons.map((button) => {
    button.addEventListener('blur', () => {
      if (uri.indexOf('#') > 0) {
        console.log('uri')
        const clean_uri = uri.substring(0, uri.indexOf('#'))

        window.history.replaceState({}, document.title, clean_uri)
      }
    })
  })
}
