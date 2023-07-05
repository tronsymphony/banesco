<?php

/**
 * Steps Slider Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'steps-slider-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block steps-slider-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$header = get_field('header');
$text = get_field('text');
$slider_steps = get_field('slider_steps');

$header = Pacific_Helper::generate_header(array(
  'text' => $header['title'],
  'tag' => $header['tag'],
  'class' => 'steps-slider-new__title'
));

$text = Pacific_Helper::generate_paragraph(array(
  'text'  => $text,
  'class' => 'steps-slider-new__text'
));
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="steps-slider-new__top-border"></div>
  <?php echo $header; ?>
  <?php echo $text; ?>
  
  <div class="steps-slider-new__steps">
    <!-- Slider main container -->
    <div class="swiper steps-slider-new__swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <?php if( $slider_steps ) : ?>
          <?php foreach( $slider_steps as $slider_step ) : ?>
            <?php 
              $slider_image = Pacific_Helper::generate_image( array(
                'image' => $slider_step['step_image'],
                'attributes' => array(
                  'title' => $slider_step['step_image'] ? $slider_step['step_image']['title'] : null,
                  'class' => 'steps-slider-new__step-image'
                )
              ));
              
              $step_counter = Pacific_Helper::generate_paragraph(array(
                'text'  => $slider_step['step_counter'],
                'class' => 'steps-slider-new__step-counter'
              ));

              $header = Pacific_Helper::generate_paragraph(array(
                'text'  => $slider_step['step_title'],
                'class' => 'steps-slider-new__step-title'
              ));

              $content = Pacific_Helper::generate_paragraph(array(
                'text'  => $slider_step['step_text'],
                'class' => 'steps-slider-new__step-content'
              ));
            ?>
            <?php if ( $slider_image || $step_counter || $header || $content ) : ?>
              <div class="swiper-slide">
                <div class="steps-slider-new__step">
                  <div class="steps-slider-new__step-top">
                    <?php echo $slider_image; ?>
                    <?php echo $step_counter; ?>
                  </div>
                  <div class="steps-slider-new__step-middle">
                    <?php echo $header; ?>
                  </div>
                  <div class="steps-slider-new__step-bottom">
                    <?php echo $content; ?>
                  </div>
                </div>
              </div>
            <?php endif; ?>
          <?php endforeach; ?>
        <?php endif; ?>
      </div>
      <!-- If we need pagination -->
      <div class="steps-slider-new__dots swiper-pagination"></div>
    </div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</section>