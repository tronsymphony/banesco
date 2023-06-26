<?php

/**
 * Navigation - Simulator Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'advantage-acf-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block advantage-acf';
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
      --gradient: <?= ($block_styling['gradient'])? $block_styling['gradient'] : '#fff' ?>;
    ">

    <div class="container">

        <div class="advantages__inner">
            
          <div class="advantages__grid">
          <?php if( have_rows('tabs') ): ?>
                <?php while( have_rows('tabs') ): the_row(); ?>

              <a class="advantages__item" href="<?php the_sub_field('header_text'); ?>" style="background: <?php the_sub_field('background'); ?>">
                <div class="advantages__item-image">
                    <img src="<?php the_sub_field('image'); ?>" alt="icon" />
                </div>
                  <div class="advantages__item-title"><?php the_sub_field('title'); ?></div>
              </a>
              <?php endwhile; ?>
            <?php endif; ?>
          </div>

          <div class="advantages__swiper swiper">
            <div class="advantages__list swiper-wrapper">

            <?php if( have_rows('tabs') ): ?>
                <?php while( have_rows('tabs') ): the_row(); ?>

                <a class="advantages__item swiper-slide" href="<?php the_sub_field('header_text'); ?>" style="background: <?php the_sub_field('background'); ?>">
                    <div class="advantages__item-image">
                        <img src="<?php the_sub_field('image'); ?>" alt="icon" />
                    </div>
                    <div class="advantages__item-title"><?php the_sub_field('title'); ?></div>
                </a>

                <?php endwhile; ?>
            <?php endif; ?>
              
            </div>
          </div>

        </div>
    </div>


</section>

<script>
  document.addEventListener('DOMContentLoaded', (event) => {
    const mediaQuery = window.matchMedia('(max-width: 1199.98px)')

    function handleTabletChange(e) {
      if (e.matches) {
        new Swiper(".advantages__swiper", {
          slidesPerView: 1.1,
          spaceBetween: 16,
          allowTouchMove: true,
          mousewheel: true,
          freeMode: {
            enabled: true,
            sticky: true,
          },
          breakpoints: {
            576: {
              slidesPerView: 1.8,
            },
            768: {
              slidesPerView: 2.2,
            },
            992: {
              slidesPerView: 3.3
            },
          },
        });
      }
    }

    mediaQuery.addListener(handleTabletChange)

    handleTabletChange(mediaQuery)
  });
</script>