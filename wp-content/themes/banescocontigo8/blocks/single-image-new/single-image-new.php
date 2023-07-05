<?php

/**
 * Single Image Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'single-image-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block single-image-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$image = get_field('image');
$mobile_image = get_field('mobile_image');

$image = Pacific_Helper::generate_image( array(
  'image' => $image,
  'attributes' => array(
    'title' => $image ? $image['title'] : null,
    'class' => 'single-image-new__image desktop'
  )
));

$mobile_image = Pacific_Helper::generate_image( array(
  'image' => $mobile_image,
  'attributes' => array(
    'title' => $mobile_image ? $mobile_image['title'] : null,
    'class' => 'single-image-new__image mobile'
  )
));
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="container">
    <?php echo $image; ?>
    <?php echo $mobile_image; ?>
  </div>
</section>