'use strict'


const moduleElements = document.getElementsByClassName("text-image-columns__modal-popup");

if (moduleElements.length > 0) {
    console.log('fff')

	document.querySelectorAll('.text-image-columns__modal-popup').forEach(function(item) {
		item.addEventListener('click', function (e) {
			e.preventDefault()
            
            let target = item.dataset.target;
            document.querySelectorAll(`.text-image-columns__modal-content[data-module="${target}"]`).forEach(function(item) {
                item.classList.add('active-modal')
            })
			// document.querySelector('.text-image-columns__modal-content').classList.add('active-modal')
			document.querySelector('.text-image-columns__modal-content-overlay').classList.add('active-modal')
		})
	})

	document.querySelector('.text-image-columns__modal-close').addEventListener('click', function (e) {
		e.preventDefault()
	
		document.querySelector('.text-image-columns__modal-content').classList.remove('active-modal')
		document.querySelector('.text-image-columns__modal-content-overlay').classList.remove('active-modal')
	})
}

