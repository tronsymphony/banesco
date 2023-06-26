<?php

/**
 * Navigation - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'product-slider-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block product-slider';
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

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" style="
      --padding-top: <?= ($block_styling['padding-top']) ? $block_styling['padding-top'].'px' : '20px' ?>;
      --paddings-top--mobile: <?= ($block_styling['paddings-top--mobile']) ? $block_styling['paddings-top--mobile'].'px' : '20px' ?>;
      --paddings-bottom: <?= ($block_styling['paddings-bottom']) ? $block_styling['paddings-bottom'].'px' : '20px' ?>;
      --paddings-bottom--mobile: <?= ($block_styling['paddings-bottom--mobile']) ? $block_styling['paddings-bottom--mobile'].'px' : '20px' ?>;
      --margins-top: <?= ($block_styling['margins-top']) ? $block_styling['margins-top'].'px' : '20px' ?>;
      --margins-top--mobile: <?= ($block_styling['margins-top--mobile']) ? $block_styling['margins-top--mobile'].'px' : '20px' ?>;
      --margins-bottom: <?= ($block_styling['margins-bottom']) ? $block_styling['margins-bottom'].'px' : '20px' ?>;
      --margins-bottom--mobile: <?= ($block_styling['margins-bottom--mobile']) ? $block_styling['margins-bottom--mobile'].'px' : '20px' ?>;
      --gradient: <?= ($block_styling['gradient'])? $block_styling['gradient'].'px' : '#fff' ?>;
    ">
    <div class="">
        <div class="container">


            <h2 class="title"><?php the_field('title'); ?></h2>

            <?php 
        if( have_rows('products') ):
            ?>
            <div class="products">
                <div class="container">
                    <div class="products__inner product-slider-slide swiper">
                        <div class="swiper-wrapper">
                        
                        <?php while( have_rows('products') ): the_row(); ?>

                        <div class="products__item swiper-slide">
                            <?php if(get_sub_field('link')): ?>
                                <a href="<?php the_sub_field('link'); ?>">
                            <?php endif; ?>

                                <div class="slide_content">
                                <figure class="product-image">
                                    <img src="<?php the_sub_field('product_image'); ?>" alt="">
                                </figure>
                                <div class="content">
                                    <h3 class="products__item-title"><?php the_sub_field('title'); ?></h3>
                                    <span class="text"><?php the_sub_field('text'); ?></span>
                                </div>
                                </div>

                            <?php if(get_sub_field('link')): ?>
                                </a>
                            <?php endif; ?>
                        </div>

                        <?php endwhile; ?>
                            </div>
                             <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev">
                    <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0762 2.06641L2.32598 12.385C1.90856 12.7229 1.90733 13.359 2.32344 13.6985L15.0336 24.0664" stroke="#232323" stroke-width="3.38462" stroke-linecap="round"/>
</svg>

                    </div>
                    <div class="swiper-button-next">
                    <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 24L14.7302 13.6567C15.147 13.3181 15.147 12.6819 14.7302 12.3433L2 2" stroke="#232323" stroke-width="3.38462" stroke-linecap="round"/>
</svg>

                    </div>
                    </div>
                    
                </div>
            </div>
            <?php 
        endif; ?>

        </div>
    </div>
</section>



<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

<script type="module">



const productSlider = new Swiper(".product-slider-slide", {
    loop: true,
      // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    autoplay: {
        delay: 10000,
    },
    mousewheelControl: true,
    mousewheel: {
        releaseOnEdges: true,
    },
    fadeEffect: {
        crossFade: true
    },
    breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 5,
    }
  }
});
</script>