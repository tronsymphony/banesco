<?php

/**
 * Full Width Image and Text Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'full-width-image-text-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block full-width-image-text-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$header = get_field('header');
$image = get_field('image');
$content = get_field('content');
$read_more_button_text = get_field('read_more_button_text');
$read_more_content = get_field('read_more_content');

$header = Pacific_Helper::generate_header(array(
	'text' => $header['title'],
	'tag' => $header['tag'],
	'class' => 'full-width-image-text-new__title'
));

$image = Pacific_Helper::generate_image( array(
  'image' => $image,
  'image_size' => 'full-width',
  'attributes' => array(
    'class' => 'full-width-image-text-new__image',
    'title' => $image ? $image['title'] : null
  )
));

$content = Pacific_Helper::generate_paragraph(array(
  'text'  => $content,
  'class' => 'full-width-image-text-new__content visible'
));

$read_more_button_text = Pacific_Helper::generate_paragraph(array(
  'text'  => $read_more_button_text,
  'class' => 'full-width-image-text-new__read-more-btn'
));

$read_more_content = Pacific_Helper::generate_paragraph(array(
  'text'  => $read_more_content,
  'class' => 'full-width-image-text-new__content content--hidden'
));
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="container">
    <?php echo $header; ?>

    <div class="full-width-image-text-new__image-wrapper">
      <?php echo $image; ?>
    </div> 

    <div class="full-width-image-text-new__content-wrapper">
      <?php echo $content; ?>
      <?php echo $read_more_button_text; ?>
      <?php echo $read_more_content; ?>
    </div>
  </div>
</section>