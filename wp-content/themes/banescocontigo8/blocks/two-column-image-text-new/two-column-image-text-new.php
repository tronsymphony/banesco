<?php

/**
 * Two Column Image Text Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'two-column-image-text-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block two-column-image-text-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$section_title = get_field('section_title');
$desktop_image = get_field('desktop_image');
$mobile_image = get_field('mobile_image');
$top_tag = get_field('top_tag');
$header = get_field('header');
$content = get_field('content');
$buttons = get_field('buttons');
$block_options = get_field('block_options');
$layout = get_field('layout');
$list_style = get_field("list_style");
$background_color = get_field('background_color');

$section_title = Pacific_Helper::generate_header(array(
  'text' => $section_title['title'],
  'tag' => $section_title['tag'],
  'class' => 'two-column-image-text-new__section-title'
));

$top_tag = Pacific_Helper::generate_paragraph(array(
  'text'  => $top_tag,
  'class' => 'two-column-image-text-new__top-tag',
));

$desktop_image = Pacific_Helper::generate_image( array(
  'image' => $desktop_image,
  'image_size' => 'connect2',
  'attributes' => array(
    'title' => $desktop_image ? $desktop_image['title'] : null,
    'alt' => $desktop_image ? $desktop_image['title'] : null,
    'class' => 'two-column-image-text-new__image desktop'
  )
));

$mobile_image = Pacific_Helper::generate_image( array(
  'image' => $mobile_image,
  'image_size' => 'connect2',
  'attributes' => array(
    'title' => $mobile_image ? $mobile_image['title'] : null,
    'alt' => $mobile_image ? $mobile_image['title'] : null,
    'class' => 'two-column-image-text-new__image mobile'
  )
));

$header = Pacific_Helper::generate_header(array(
  'text' => $header['title'],
  'tag' => $header['tag'],
  'class' => 'two-column-image-text-new__title'
));

$content = Pacific_Helper::generate_wysiwyg(array(
	'content'  => $content,
	'classes' => array('two-column-image-text-new__content ' . $list_style),
));
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>"
style="
  --padding-top: <?php echo $block_options['padding_top']; ?>;
  --padding-top--mobile: <?php echo $block_options['pading_top_mobile']; ?>;
  --padding-bottom: <?php echo $block_options['padding_bottom']; ?>;
  --padding-bottom--mobile: <?php echo $block_options['padding_bottom_mobile']; ?>;
  --margin-top: <?php echo $block_options['margin_top']; ?>;
  --margin-top--mobile: <?php echo $block_options['margin_top_mobile']; ?>;
  --margin-bottom: <?php echo $block_options['margin_bottom']; ?>;
  --margin-bottom--mobile: <?php echo $block_options['margin_bottom_mobile']; ?>;
  --background-color: <?php echo $background_color; ?>;
">
  <div class="container-xl">
    <?php echo $section_title; ?>
    <div class="two-column-image-text-new__inner-container <?php echo $layout; ?>">
    <div class="two-column-image-text-new__image-wrapper">
      <?php echo $desktop_image; ?>
      <?php echo $mobile_image; ?>
    </div>
      <div class="two-column-image-text-new__content-wrapper">
        <?php echo $top_tag; ?>
        <?php echo $header; ?>
        <?php echo $content; ?>
        <?php if ( $buttons ) : ?>
          <div class="two-column-image-text-new__button-wrapper">
            <?php foreach ( $buttons as $button ) : ?>
              <?php 
                $button = Pacific_Helper::generate_acf_link(array(
                  'link' => $button['button']['link'],
                  'class' => 'banner-with-buttons-tabs-new__btn ' . $button['button']['button_options'],
                  'link_attributes' => array(
                    'title' => $button['button']['link'] ? $button['button']['link']['title'] : null,
                    'target' => $button['button']['link']['target'] ?? null
                  )
                ));

                echo $button;
              ?>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>