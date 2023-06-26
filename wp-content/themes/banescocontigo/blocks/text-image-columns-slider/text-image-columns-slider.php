<?php

/**
 * Navigation - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'text-image-columns-slider-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block text-image-columns-slider';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;

if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

$module_name = 'module_'.time();
?>

<!-- <section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>"> -->


<?php 
$block_styling= get_field('block_styling'); 
?>

<section <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
    <div class="text-image-columns-slider <?php if(get_field('white_text')){ echo 'text-image-columns-slider-white';} ?>"
        style="
      --padding-top: <?= ($block_styling['padding-top']) ? $block_styling['padding-top'].'px' : '0px' ?>;
      --paddings-top--mobile: <?= ($block_styling['paddings-top--mobile']) ? $block_styling['paddings-top--mobile'].'px' : '0px' ?>;
      --paddings-bottom: <?= ($block_styling['paddings-bottom']) ? $block_styling['paddings-bottom'].'px' : '0px' ?>;
      --paddings-bottom--mobile: <?= ($block_styling['paddings-bottom--mobile']) ? $block_styling['paddings-bottom--mobile'].'px' : '0px' ?>;
      --margins-top: <?= ($block_styling['margins-top']) ? $block_styling['margins-top'].'px' : '0px' ?>;
      --margins-top--mobile: <?= ($block_styling['margins-top--mobile']) ? $block_styling['margins-top--mobile'].'px' : '0px' ?>;
      --margins-bottom: <?= ($block_styling['margins-bottom']) ? $block_styling['margins-bottom'].'px' : '0px' ?>;
      --margins-bottom--mobile: <?= ($block_styling['margins-bottom--mobile']) ? $block_styling['margins-bottom--mobile'].'px' : '0px' ?>;
      --gradient: <?= ($block_styling['gradient'])? $block_styling['gradient'].'px' : '#fff' ?>;
    ">
        <div class="container">

            <div class="slide-content">

                <?php if( have_rows('slides') ): ?>
                <!-- Slider main container -->
                <div class="swiper columns-slider">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <?php while( have_rows('slides') ): the_row(); ?>

                        <!-- Slides -->
                        <div class="swiper-slide">

                            <figure>
                                <img src="<?= get_sub_field('image') ?>" class="desktop" alt="">
                                
                                <?php if(get_sub_field('mobile_image')): ?>
                                    <img src="<?= get_sub_field('mobile_image') ?>" class="mobile" alt="">
                                <?php else: ?>
                                    <img src="<?= get_sub_field('image') ?>" class="mobile" alt="">
                                <?php endif; ?>
                            </figure>
                        </div>


                        <?php endwhile; ?>
                    </div>
                </div>
                <?php endif; ?>


                <?php if( have_rows('slides') ): ?>
                <!-- Slider main container -->
                <div class="swiper columns-slider-content">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <?php while( have_rows('slides') ): the_row(); ?>

                        <!-- Slides -->
                        <div class="swiper-slide">

                            <div class="text-image-columns-slider__content">
                            <?php if (get_sub_field('icon')) : ?>
                                    <img src="<?= get_sub_field('icon') ?>" alt="">
                                <?php endif; ?>
                                <?php if (get_sub_field('title')) : ?>
                                    <h2 class="text-image-columns-slider__title"><?= get_sub_field('title') ?></h2>
                                <?php endif; ?>
                                <?php if (get_sub_field('content')) : ?>
                                    <div class="text-image-columns-slider__description text">
                                        <?= get_sub_field('content') ?>
                                    </div>
                                <?php endif; ?>

                                <div class="social_icons">
                                <?php if (get_sub_field('apple_play_link')) : ?>
                                    <a href="<?= get_sub_field('apple_play_link') ?>">
                                    <img src="<?php echo get_template_directory_uri() . '/blocks/text-image-columns-slider/assets/appstore.png'; ?>" />
                                    </a>
                                    <?php endif; ?>
                                    <?php if (get_sub_field('android_app_link')) : ?>
                                        
                                        <a href="<?= get_sub_field('android_app_link') ?>">
                                        <img src="<?php echo get_template_directory_uri() . '/blocks/text-image-columns-slider/assets/googleplay.png'; ?>" /> 
                                        </a>
                                    <?php endif; ?>
                                </div>
                                

                            </div>
                        </div>
                        <?php endwhile; ?>
                    </div>
                </div>
                <?php endif; ?>

            </div>
        </div>
    </div>
</section>



<script src="https://code.jquery.com/jquery-3.7.0.min.js"
    integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
<script type="module">
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
const swiperImage = new Swiper(".columns-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 10000,
    },
    effect: 'fade',
    autoHeight: true,
    observer: true,
    observeParents: true,
    mousewheelControl: true,
    mousewheel: {
    releaseOnEdges: true,
  },
    fadeEffect: {
        crossFade: true
    },
});

const swiperText = new Swiper(".columns-slider-content", {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    mousewheelControl: true,

   

    autoplay: {
        delay: 10000,
    },
    breakpoints: {
    768: {
        direction: 'vertical',
    }
  }
});


swiperImage.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = swiperImage.realIndex;
    let currentSlide = swiperImage.slides[index_currentSlide]
    swiperText.slideTo(index_currentSlide, 1000, false);
});

swiperText.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = swiperText.realIndex;
    let currentSlide = swiperText.slides[index_currentSlide]
    swiperImage.slideTo(index_currentSlide, 1000, false);
});
</script>