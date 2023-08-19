<?php

/**
 * Navigation - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'navigation-slider-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block navigation-slider-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
    <div class="container">

        <!-- Slider main container -->
        <div class="swiper swiper-tabs">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <?php
                // Check rows existexists.
                if( have_rows('navigation') ):

                  // Loop through rows.
                  while( have_rows('navigation') ) : the_row();
                      // Load sub field value.
                      $tab_title = get_sub_field('tab_title');
                      ?>
                        <div class="swiper-slide">
                            <span class="nav-link">
                                <?php echo $tab_title; ?>
                            </span>
                        </div>
                        <?php
                  // End loop.
                  endwhile;

                  // Do something...
                endif;
                ?>
            </div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev">
                <svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 30.8945L24.7302 20.5512C25.147 20.2126 25.147 19.5764 24.7302 19.2378L12 8.89453"
                        stroke="#232323" stroke-width="3.38462" stroke-linecap="round" />
                </svg>
            </div>
            <div class="swiper-button-next">
                <svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 30.8945L24.7302 20.5512C25.147 20.2126 25.147 19.5764 24.7302 19.2378L12 8.89453"
                        stroke="#232323" stroke-width="3.38462" stroke-linecap="round" />
                </svg>
            </div>
        </div>

        <div class="block-content">
            <!-- Slider main container -->
            <div class="swiper-main-content swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <?php
                    // Check rows existexists.
                    if( have_rows('navigation') ):

                      // Loop through rows.
                      while( have_rows('navigation') ) : the_row();

                          // Load sub field value.
                          $tab_content = get_sub_field('tab_content');
                          ?>
                                <div class="swiper-slide">
                                    <div class="slide-content">
                                    <?php 
                                    if($tab_content){
                                      echo $tab_content;
                                    }
                                    ?>
                                    </div>
                                <?php 
                                if( have_rows('accordion') ):
                                // loop through rows (sub repeater)
                                 ?>
                                  <div class="accordions" >
                                    <div class="container">
                                        <div class="accordions__inner">
                                          <?php while( have_rows('accordion') ): the_row(); ?>
                                              <div class="accordions__item">
                                                <div class="accordions__item-header">
                                                    <h3 class="accordions__item-title"><?php the_sub_field('title'); ?></h3>
                                                </div>
                                                <div class="accordions__item-body">
                                                  <div class="accordions__item-body-inner">
                                                      <div class="accordions__item-content text"><?php the_sub_field('content'); ?></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <?php endwhile; ?>
                                        </div>
                                    </div>
                                  </div>
                                  <?php 
                                endif; ?>

                                </div>
                                <?php
                      // End loop.
                      endwhile;

                      // Do something...
                    endif;
                    ?>
                </div>

            </div>
        </div>

    </div>
</section>
<script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
<script type="module">
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper-tabs', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop:true,
    watchSlidesProgress: true,
    autoHeight:true,
    calculateHeight:true,

    slideToClickedSlide:true,
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1000: {
            slidesPerView: 3.3,
            spaceBetween: 72,
        }
    },
  

});



const swiperMainContent = new Swiper('.swiper-main-content', {
    slidesPerView: 1,
    effect: 'fade',
    autoHeight: true,
    observer: true,
  observeParents: true,
    fadeEffect: {
      crossFade: true
    },
});
// swiper.controller.control = swiperMainContent;
// swiperMainContent.controller.control = swiper;

swiper.on('slideChangeTransitionEnd', function() {
  let index_currentSlide = swiper.realIndex;
  let currentSlide = swiper.slides[index_currentSlide]
  swiperMainContent.slideTo(index_currentSlide, 1000, false);
});

swiperMainContent.on('slideChangeTransitionEnd', function() {
  let index_currentSlide = swiperMainContent.realIndex;
  let currentSlide = swiperMainContent.slides[index_currentSlide]
  swiper.slideTo(index_currentSlide, 1000, false);
});


document.querySelectorAll('.accordions').forEach(function(accordions) {
    accordions.querySelectorAll('.accordions__item').forEach(function(accordion) {
      const triger = accordion.querySelector('.accordions__item-header')
      const content = accordion.querySelector('.accordions__item-body')
      triger.addEventListener('click', function() {
        accordion.classList.toggle('active')
      })
    })
  })
  
</script>
