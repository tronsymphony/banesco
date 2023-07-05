<?php

/**
 * Small Title and Text Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'small-title-and-text-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block small-title-and-text-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assign defaults.
$header = get_field('header');
$text = get_field('text');
$background_color = get_field('background_color');
$block_options = get_field('block_options');

$header = Pacific_Helper::generate_header(array(
  'text' => $header['title'],
  'tag' => $header['tag'],
  'class' => 'small-title-and-text-new__title',
));

$text = Pacific_Helper::generate_paragraph(array(
  'text' => $text,
  'class' => 'small-title-and-text-new__text',
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
		--margins-bottom--mobile: <?php echo $block_options['margin_bottom_mobile']; ?>;
    --background-color: <?php echo $background_color; ?>"
>
  <div class="container">
    <div class="small-title-and-text-new__inner-container">
      <?php echo $header; ?>
      <?php echo $text; ?>
    </div>
  </div>
</section>