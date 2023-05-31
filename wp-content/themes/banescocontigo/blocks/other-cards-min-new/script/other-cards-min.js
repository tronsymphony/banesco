'use strict'

const links = document.getElementsByClassName("links-tab");

if (links.length > 0) {

    document.querySelectorAll('.tab-first, .tab-second,.tab-third').forEach(function(item) {
        item.classList.add('tab-option')
    })

    document.querySelectorAll('.tab-first').forEach(function(item) {
        item.classList.add('tab-active')
    })


    
    
	document.querySelectorAll('.links-tab').forEach(function(item) {
		item.addEventListener('click', function (e) {
			e.preventDefault()
            let tabSelect = item.dataset.tabOption;
            let select;

            switch (tabSelect) {
                case '1':
                    select = 'tab-first'
                    break;
                case '2':
                    select = 'tab-second'
                    break;
                case '3':
                    select = 'tab-third'
                    break;
                default:
                    select = 'tab-first'
                    break;
            }
            
            document.querySelectorAll('.links-tab').forEach(function(item) {
                item.classList.remove('links-tab-active')
            })

            document.querySelectorAll('.tab-first,.tab-second,.tab-third').forEach(function(item) {
                item.classList.remove('tab-active')
            })
	
            document.querySelectorAll(`[data-tab-option="${tabSelect}"]`).forEach(function(item) {
                item.classList.add('links-tab-active')
            })

			document.querySelectorAll(`.${select}`).forEach(function(item) {
                item.classList.add('tab-active')
            })
            
		})
	})
}

