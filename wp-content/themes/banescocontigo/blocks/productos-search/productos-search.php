<?php

/**
 * text - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'text-block-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block text-block';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;

if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

$module_name = 'module_'.time();
?>

<?php 
$block_styling= get_field('block_styling'); 
?>


 

<section class="wp-block-banescocontigo-search-filter productos-search">
    <div class="search-filter">
        <div class="container">
        <div class="search-filter__inner">
                <div class="search-filter__content">
                    <h2 class="search-filter__title"><?php the_field('search_title'); ?></h2>
                </div>
                <div class="search-filter__input">
                    <div class="search-input search-input--only-button-right active">
                        <form class="search-input__form" action="#" id="faq-filter-search-obj">
                            <input type="text" class="search-input__entry" id="faq-filter-search"
                                placeholder="Estoy buscando...">
                            <button class="search-input__button" type="submit"><img decoding="async"
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQ1MjVfNjQ3MikiPgo8cGF0aCBkPSJNNC4zNTgyNCAxNS43NDA2QzUuNzQzNzYgMTcuMTI3NiA3LjU4ODg0IDE3Ljk2MDMgOS41NDU4OSAxOC4wODE3QzExLjUwMjkgMTguMjAzMSAxMy40MzY4IDE3LjYwNDkgMTQuOTgzMyAxNi4zOTk3TDIwLjMwNDMgMjEuNzE5MkMyMC40OTMgMjEuOTAxNCAyMC43NDU4IDIyLjAwMjIgMjEuMDA4MSAyMkMyMS4yNzA1IDIxLjk5NzcgMjEuNTIxNCAyMS44OTI1IDIxLjcwNjkgMjEuNzA3QzIxLjg5MjUgMjEuNTIxNiAyMS45OTc3IDIxLjI3MDcgMjIgMjEuMDA4NEMyMi4wMDIyIDIwLjc0NjEgMjEuOTAxNCAyMC40OTM1IDIxLjcxOTEgMjAuMzA0OEwxNi4zOTgxIDE0Ljk4NTNDMTcuNjU3MSAxMy4zNzAxIDE4LjI1MjQgMTEuMzM1NSAxOC4wNjI0IDkuMjk2NTRDMTcuODcyNSA3LjI1NzYgMTYuOTExNyA1LjM2Nzg4IDE1LjM3NiA0LjAxMjc3QzEzLjg0MDMgMi42NTc2NiAxMS44NDUzIDEuOTM5MjUgOS43OTggMi4wMDQwM0M3Ljc1MDY2IDIuMDY4ODEgNS44MDUxNSAyLjkxMTkyIDQuMzU4MjQgNC4zNjE0QzMuNjEwNjEgNS4xMDg0MyAzLjAxNzU0IDUuOTk1NCAyLjYxMjkgNi45NzE2NEMyLjIwODI3IDcuOTQ3ODggMiA4Ljk5NDI1IDIgMTAuMDUxQzIgMTEuMTA3NyAyLjIwODI3IDEyLjE1NDEgMi42MTI5IDEzLjEzMDNDMy4wMTc1NCAxNC4xMDY2IDMuNjEwNjEgMTQuOTkzNSA0LjM1ODI0IDE1Ljc0MDZaTTUuNzczMDQgNS43Nzc4QzYuNzYyMTggNC43ODg5NyA4LjA2MzY3IDQuMTczNTkgOS40NTU3NyA0LjAzNjUxQzEwLjg0NzkgMy44OTk0MyAxMi4yNDQ0IDQuMjQ5MTIgMTMuNDA3NiA1LjAyNjAxQzE0LjU3MDcgNS44MDI5IDE1LjQyODQgNi45NTg5MiAxNS44MzQ1IDguMjk3MTFDMTYuMjQwNiA5LjYzNTMgMTYuMTcgMTEuMDcyOSAxNS42MzQ4IDEyLjM2NDlDMTUuMDk5NiAxMy42NTY5IDE0LjEzMjggMTQuNzIzNCAxMi44OTkyIDE1LjM4MjdDMTEuNjY1NiAxNi4wNDIxIDEwLjI0MTUgMTYuMjUzNCA4Ljg2OTUzIDE1Ljk4MDdDNy40OTc1NCAxNS43MDgxIDYuMjYyNTcgMTQuOTY4MyA1LjM3NTAxIDEzLjg4NzRDNC40ODc0NiAxMi44MDY1IDQuMDAyMjUgMTEuNDUxNCA0LjAwMjA0IDEwLjA1M0MzLjk5OTI5IDkuMjU4MzMgNC4xNTQ0MyA4LjQ3MTA1IDQuNDU4NDQgNy43MzY4MkM0Ljc2MjQ2IDcuMDAyNTkgNS4yMDkzIDYuMzM2MDIgNS43NzMwNCA1Ljc3NThWNS43Nzc4WiIgZmlsbD0iIzU1NjE3NiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQ1MjVfNjQ3MiI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                                    alt="search"></button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="search-filter__inner" id="filter_container">

            <?php if( have_rows('cards') ): ?>
                <div class="search-filter__left">
                    <?php while( have_rows('cards') ): the_row(); ?>
                    <div class="search-filter__item search-filter search_tab">
                    <div class="search-filter__image ">
                            <img src="<?php the_sub_field('image'); ?>" alt="">
                        </div>
                        <div class="search-filter__header search__triger">
                            <h3 class="search-filter__title"><?php the_sub_field('title'); ?></h3>
                        </div>
                        <div class="search-filter__body search__content">
                            <div class="search-filter__body-inner">
                                <div class="search-filter__content">
                                    <?php the_sub_field('content'); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endwhile; ?>
                </div>
            <?php endif; ?>

            </div>
        </div>
    </div>
</section>

<script>

   // Get input element
   let filterInput = document.getElementById('faq-filter-search');
    // Add event listener
    filterInput.addEventListener('keyup', filterNames);

    function filterNames(){

      // Get value of input
      let filterValue = document.getElementById('faq-filter-search').value.toUpperCase();

      // Get names ul
      let ul = document.getElementById('filter_container');

      // Get lis from ul
      let li = ul.querySelectorAll('.search__triger');

      // Loop through collection-item lis
      for(let i = 0;i < li.length;i++){
        let a = li[i].getElementsByTagName('h3')[0];
        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
          li[i].parentElement.style.display = '';
        } else {
          li[i].parentElement.style.display = 'none';
        }
      }

    }


document.querySelectorAll('button.filter__filter_btn').forEach(function(filterItem) {

    filterItem.addEventListener('click', function(item) {
        if(item.isTrusted){
            
           
            document.querySelectorAll('.search__triger').forEach(function(item) {
                    item.parentElement.style.display = '';
                    
            })
            document.getElementById('faq-filter-search-obj').reset()
        }
        
    })
})


document.querySelectorAll('.search-filter__filter_tabs').forEach(function(filter) {
    filter.addEventListener('click', function() {
        if (filter.dataset.id != 'Ver todo') {
            document.querySelectorAll('.search-filter__filter_tabs').forEach(function(button) {
                button.classList.remove('active')
            })
            filter.classList.add('active')
            document.querySelectorAll('.search-filter__item').forEach(function(accordion) {
                accordion.classList.add('none')
            })
            document
                .querySelectorAll(`.search-filter__item[data-category="${filter.dataset.id}"]`)
                .forEach(function(accordion) {
                    accordion.classList.remove('none')
                })
        } else {
            document.querySelectorAll('.search-filter__filter_tabs').forEach(function(button) {
                button.classList.remove('active')
            })
            filter.classList.add('active')
            document.querySelectorAll(`.search-filter__item`).forEach(function(accordion) {
                accordion.classList.remove('none')
            })
        }
    })
})

document.querySelectorAll('.search_tab').forEach(function(accordion) {
    const triger = accordion.querySelector('.search__triger')
    const content = accordion.querySelector('.search__content')
    triger.addEventListener('click', function() {
        accordion.classList.toggle('active')
    })
})
</script>