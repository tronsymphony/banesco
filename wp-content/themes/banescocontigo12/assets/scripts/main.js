document.querySelectorAll('.mheader').forEach(function (header) {
	header.querySelectorAll('.menu .navigation .menu-list > .menu-item:nth-child(1)').forEach(function (item) {
		item.classList.add('active')
	})
	header.querySelectorAll('.menu .navigation .menu-list > .menu-item').forEach(function (item) {
		item.addEventListener('click', function (e) {
			e.preventDefault()
			document
				.querySelectorAll('.mheader .menu .navigation .menu-list > .menu-item')
				.forEach(function (item) {
					item.classList.remove('active')
				})
			item.classList.add('active')
		})
	})
	header.querySelectorAll('.burger').forEach(function (burger) {
		burger.addEventListener('click', function () {
			const menu = document.querySelector('.mheader__menu .menu')
			menu && menu.classList.toggle('active')
			document.body.classList.toggle('mobile-overflow-hidden')
		})
	})
})

document.querySelectorAll('.lheader').forEach(function (lheader) {
	const menu = lheader.querySelector('.navigation__nested-menu')
	const open = lheader.querySelector('.open-menu.menu-item')
	if (!menu || !open) return
	open.addEventListener('mouseenter', function () {
		menu.classList.add('active')
	})
	open.addEventListener('mouseout', function () {
		menu.classList.remove('active')
	})
	lheader.querySelectorAll('.nested-menu').forEach(function (nested) {
		nested.addEventListener('mouseover', function () {
			open.classList.add('hovered')
			open.parentNode.closest('.menu-item').classList.add('hovered')
			nested.classList.add('active')
		})
		nested.addEventListener('mouseout', function () {
			open.classList.remove('hovered')
			open.parentNode.closest('.menu-item').classList.remove('hovered')
			nested.classList.remove('active')
		})
	})
})

document.querySelectorAll('.country-picker').forEach(function (picker) {
	const triger = picker.querySelector('.country-picker__inner')
	triger &&
		triger.addEventListener('click', function () {
			if (!picker.classList.contains('blured')) {
				this.parentNode.classList.toggle('active')
				this.parentNode.focus()
			}
		})
	picker.addEventListener('blur', function () {
		this.classList.remove('active')
		this.classList.add('blured')
		setTimeout(() => {
			this.classList.remove('blured')
		}, 200)
	})
})

document.querySelectorAll('.language-picker').forEach(function (picker) {
	const triget = picker.querySelector('.language-picker__inner')
	triget &&
		triget.addEventListener('click', function () {
			if (!picker.classList.contains('blured')) {
				this.parentNode.classList.toggle('active')
				this.parentNode.focus()
			}
		})
	picker.addEventListener('blur', function () {
		this.classList.remove('active')
		this.classList.add('blured')
		setTimeout(() => {
			this.classList.remove('blured')
		}, 200)
	})
})

document.querySelectorAll('.search-input').forEach(function (searchInput) {
	const id = searchInput.dataset.id
	const open = searchInput.querySelector('.search-input__open')
	const close = searchInput.querySelector('.search-input__close')
	const entry = searchInput.querySelector('.search-input__entry')
	if (open) {
		open.addEventListener('click', function () {
			document.querySelectorAll(`.search-input[data-id=${id}]`).forEach(function (input) {
				input.classList.add('active')
			})
			document.querySelector('.header').classList.add('hide-navigation')
			document.querySelector('.header').classList.add('hide-mobile-primary-button')
		})
	}
	if (close) {
		close.addEventListener('click', function () {
			document.querySelectorAll(`.search-input[data-id=${id}]`).forEach(function (input) {
				input.classList.remove('active')
			})
			document.querySelector('.header').classList.remove('hide-navigation')
			document.querySelector('.header').classList.remove('hide-mobile-primary-button')
			document.querySelectorAll(`.search-input[data-id=${id}]`).forEach(function (input) {
				input.querySelector('input').value = ''
			})
		})
	}
	if (entry) {
		entry.addEventListener('focus', function () {
			document.querySelectorAll(`.search-input[data-id=${id}]`).forEach(function (input) {
				input.classList.add('focused')
			})
		})
		entry.addEventListener('blur', function () {
			document.querySelectorAll(`.search-input[data-id=${id}]`).forEach(function (input) {
				input.classList.remove('focused')
			})
		})
		entry.addEventListener('change', function () {
			document.querySelectorAll(`.search-input[data-id=${id}]`).forEach(function (input) {
				input.querySelector('input').value = entry.value
			})
		})
	}
})

document.querySelectorAll('.primary-picker').forEach(function (picker) {
	const triger = picker.querySelector('.primary-picker__button')
	triger &&
		triger.addEventListener('click', function () {
			if (!picker.classList.contains('blured')) {
				this.parentNode.classList.toggle('active')
				this.parentNode.focus()
			}
		})
	picker.addEventListener('blur', function () {
		this.classList.remove('active')
		this.classList.add('blured')
		setTimeout(() => {
			this.classList.remove('blured')
		}, 200)
	})
})

document.querySelectorAll('.helper').forEach(function (helper) {
	const open = helper.querySelector('.helper__button--action')
	const close = helper.querySelector('.helper__button--close')
	open &&
		open.addEventListener('click', function () {
			helper.classList.toggle('active')
			document.querySelector('.overlay').classList.toggle('active')
			document.body.classList.toggle('overflow-hidden')
		})
	close &&
		close.addEventListener('click', function () {
			helper.classList.remove('active')
			document.querySelector('.overlay').classList.remove('active')
			document.body.classList.remove('overflow-hidden')
		})
})

document.querySelectorAll('.mobile-fixed-button').forEach(function (button) {
	button.focus()
	button.addEventListener('blur', function () {
		setTimeout(() => {
			button.classList.remove('active')
		}, 200)
	})
})

document.querySelectorAll('.overlay').forEach(function (overlay) {
	overlay.addEventListener('click', function () {
		const helper = document.querySelector('.helper')
		helper && helper.classList.remove('active')
		overlay.classList.remove('active')
		document.body.classList.remove('overflow-hidden')
	})
})

document.querySelectorAll('.checkbox').forEach(function (checkbox) {
	checkbox.addEventListener('click', function (e) {
		checkbox.classList.toggle('active')
	})
})

document.querySelectorAll('.switcher').forEach(function (switcher) {
	switcher.addEventListener('click', function (e) {
		switcher.classList.toggle('active')
	})
})
