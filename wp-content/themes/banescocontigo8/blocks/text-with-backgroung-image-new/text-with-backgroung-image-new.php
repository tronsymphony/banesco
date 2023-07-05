<?php

/**
 * Text With Background Image Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'text-with-backgroung-image-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block text-with-backgroung-image-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$image = get_field('image');
$mobile_image = get_field('mobile_image');
$content = get_field('content');
$add_read_more_button = get_field('add_read_more_button');
$read_more_text = get_field('read_more_text');
$read_less_text = get_field('read_less_text');
$read_more_text_color = get_field('read_more_text_color');
$add_read_more_content = get_field('add_read_more_content');
$read_more_content = get_field('read_more_content');
$block_options = get_field('block_options');
$mobile_height = get_field('mobile_height');
$show_less_mobile_height = get_field('show_less_mobile_height');

$content = Pacific_Helper::generate_wysiwyg(array(
  'content'=> $content,
  'classes' => array('text-with-backgroung-image-new__content')
));

$read_more_content = Pacific_Helper::generate_wysiwyg(array(
  'content'=> $read_more_content,
  'classes' => array('text-with-backgroung-image-new__content read-more-content')
));

$read_more_button = Pacific_Helper::generate_paragraph(array(
	'text'  => $read_more_text,
	'class' => 'text-with-backgroung-image-new__readmore-button ' . $read_more_text_color,
));
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" style="
  --desktop-image: url('<?php echo $image['url']; ?>');
  --mobile-image: url('<?php echo $mobile_image['url']; ?>');
  --padding-top: <?php echo $block_options['padding_top']; ?>;
  --padding-top--mobile: <?php echo $block_options['pading_top_mobile']; ?>;
  --padding-bottom: <?php echo $block_options['padding_bottom']; ?>;
  --padding-bottom--mobile: <?php echo $block_options['padding_bottom_mobile']; ?>;
  --margin-top: <?php echo $block_options['margin_top']; ?>;
  --margin-top--mobile: <?php echo $block_options['margin_top_mobile']; ?>;
  --margin-bottom: <?php echo $block_options['margin_bottom']; ?>;
  --margin-bottom--mobile: <?php echo $block_options['margin_bottom_mobile']; ?>;
  --mobile-height: <?php echo $mobile_height ? $mobile_height : null; ?>;
  --show-less-mobile-height: <?php echo $show_less_mobile_height ? $show_less_mobile_height : null; ?>;
">
  <div class="container">
  <?php if ( $add_read_more_button && $add_read_more_content && $read_less_text && $read_more_text && $read_more_content ) : ?>
    <div class="text-with-backgroung-image-new__inner-wrapper read-more-true">
  <?php else : ?>
    <div class="text-with-backgroung-image-new__inner-wrapper read-more-false">
  <?php endif; ?>
      <div class="text-with-backgroung-image-new__content-wrapper">
        <?php echo $content; ?>
        <?php if ( $add_read_more_button && $add_read_more_content && $read_less_text && $read_more_text && $read_more_content ) : ?>
          <?php echo $read_more_content; ?>
          <div class="text-with-backgroung-image-new__readmore-wrapper" data-readmore="<?php echo $read_more_text; ?>" data-readless="<?php echo $read_less_text; ?>">
            <span class="text-with-backgroung-image-new__pluss <?php echo $read_more_text_color; ?>"></span>
            <?php echo $read_more_button; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>