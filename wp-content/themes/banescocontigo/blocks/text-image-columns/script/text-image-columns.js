'use strict'

const moduleElements = document.getElementsByClassName('text-image-columns__modal-popup')

if (moduleElements.length > 0) {
  document.querySelectorAll('.text-image-columns__modal-popup').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault()

      let target = item.dataset.target
      document
        .querySelectorAll(`.text-image-columns__modal-content[data-module="${target}"]`)
        .forEach(function (item) {
          item.classList.add('active-modal')
        })

      // document.querySelector('.text-image-columns__modal-content').classList.add('active-modal')
      document.querySelector('.text-image-columns__modal-content-overlay').classList.add('active-modal')
    })
  })

  document.querySelectorAll('.text-image-columns__modal-close').forEach((modalClose) => {
    modalClose.addEventListener('click', function (e) {
      e.preventDefault()

      modalClose.closest('.text-image-columns__modal-content').classList.remove('active-modal')
      document.querySelector('.text-image-columns__modal-content-overlay').classList.remove('active-modal')

      document.querySelectorAll('.text-image-columns__modal-content.active-modal').forEach((modal) => {
        modal.classList.remove('active-modal')
      })
    })
  })
}

/* jQuery( document ).ready(function() {
	let get_height = function() {
		return jQuery( "[data-content] > div" ).height();
	};
	
	if ( get_height() > 150 ) {
		jQuery( "[data-view-more]" ).text( "+ Ver mas" );
		
		jQuery( document ).off( "click", "[data-view-more]" ).on( "click", "[data-view-more]", function ( e ) {
			e.preventDefault();
			jQuery( this ).closest( "[data-content]" ).toggleClass( "is-active" );
		});
	}
}); */

const readMoreContent = document.querySelector('.read-more-content')
const readMoreWrapper = document.querySelector('.text-image-columns__readmore-wrapper')
const readMoreButton = document.querySelector('.text-image-columns__readmore-button')

if (readMoreWrapper) {
  readMoreWrapper.addEventListener('click', () => {
    readMoreButton.classList.toggle('readmore-active')
    readMoreContent.classList.toggle('readmore-active')
    readMoreWrapper.classList.toggle('readmore-active')

    if (readMoreButton.classList.contains('readmore-active')) {
      readMoreButton.innerHTML = readMoreWrapper.dataset.readless
    } else {
      readMoreButton.innerHTML = readMoreWrapper.dataset.readmore
    }
  })
}
