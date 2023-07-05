<?php

/**
 * Hero Simple Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'hero-simple-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block hero-simple-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$background_image = get_field('background_image');
$mobile_background_image = get_field('mobile_background_image');
$header = get_field('header');
$content = get_field('content');
$hero_buttons = get_field('hero_buttons');
$content_color = get_field('content_color');
$section_height = get_field('section_height');
$reduce_mobile_height = get_field('reduce_mobile_height');

$header = Pacific_Helper::generate_header(array(
  'text' => $header['title'],
  'tag' => $header['tag'],
  'class' => 'hero-simple-new__title ' . $content_color
));

$content = Pacific_Helper::generate_paragraph(array(
  'text'  => $content,
  'class' => 'hero-simple-new__text ' . $content_color
));
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> <?php echo $reduce_mobile_height ? "height-reduced" : null; ?>" style="
  --height: <?php echo $section_height; ?>;
  --desktop-background: url('<?php echo esc_attr($background_image['url']); ?>');
  <?php if ( $mobile_background_image ) : ?>
    --mobile-background: url('<?php echo esc_attr($mobile_background_image['url']); ?>');
  <?php endif; ?>
">
  <div class="container">
    <div class="hero-simple-new__content-wrapper">
      <?php echo $header; ?>
      <?php echo $content; ?>

      <div class="hero-simple-new__button-wrapper">
        <?php if ( $hero_buttons ) : ?>
          <?php foreach( $hero_buttons as $hero_button ) : ?>
            <?php
              $button = Pacific_Helper::generate_acf_link(array(
                'link' => $hero_button['hero_button']['hero_button_link'],
                'class' => 'hero-simple-new__btn ' . $hero_button['hero_button']['hero_button_options'],
                'link_attributes' => array(
                  'title' => $hero_button['hero_button']['hero_button_link'] ? $hero_button['hero_button']['hero_button_link']['title'] : null,
                  'alt' =>  $hero_button['hero_button']['hero_button_link'] ? $hero_button['hero_button']['hero_button_link']['title'] : null,
                  'target' => $hero_button['hero_button']['hero_button_link']['target'] ?? null
                )
              ));
            ?>
            <?php echo $button ?>
          <?php endforeach; ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>