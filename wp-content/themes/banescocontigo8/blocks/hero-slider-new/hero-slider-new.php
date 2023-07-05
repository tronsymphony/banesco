<?php

/**
 * Hero Slider Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'hero-slider-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block hero-slider-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$hero_slides = get_field('hero_slides');
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<!-- Slider main container -->
  <div class="swiper hero-slider-new__swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <?php if ( $hero_slides ) : ?>
        <?php foreach( $hero_slides as $slide ) : ?>
          <?php 
            $desktop_image = Pacific_Helper::generate_image( array(
              'image' => $slide['desktop_image'],
              'attributes' => array(
                'title' => $slide['desktop_image'] ? $slide['desktop_image']['title'] : null,
                'class' => 'hero-slider-new__background-image hero-slider-new__background-image--desktop'
              )
            ));

            $mobile_image = Pacific_Helper::generate_image( array(
              'image' => $slide['mobile_image'],
              'attributes' => array(
                'title' => $slide['mobile_image'] ? $slide['mobile_image']['title'] : null,
                'class' => 'hero-slider-new__background-image hero-slider-new__background-image--mobile'
              )
            ));

            $slide_content = Pacific_Helper::generate_paragraph(array(
              'text'  => $slide['slide_content'],
              'class' => 'hero-slider-new__content ' . $slide['content_color'],
            ));

            $slide_details = Pacific_Helper::generate_paragraph(array(
              'text'  => $slide['slide_details'],
              'class' => 'hero-slider-new__details',
            ));

            $slide_button = Pacific_Helper::generate_acf_link(array(
              'link' => $slide['button']['button'],
              'class' => 'hero-slider-new__btn ' . $slide['button']['button_options'],
              'link_attributes' => array(
                'title' => $slide['button']['button'] ? $slide['button']['button']['title'] : null,
                'alt' => $slide['button']['button'] ? $slide['button']['button']['title'] : null,
                'target' => $slide['button']['button']['target'] ?? null
              )
            ));
          ?>
          <div class="swiper-slide">
            <?php echo $desktop_image; ?>
            <?php echo $mobile_image; ?>
            <div class="container">
              <div class="hero-slider-new__content-wrapper">
                <?php echo $slide_content; ?>
                <?php echo $slide_details; ?>
                <?php echo $slide_button; ?>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>
    <!-- If we need pagination -->
    <div class="hero-slider-new__dots swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</section>