<?php

/**
 * Our Values Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'our-values-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block our-values-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$header = get_field('header');
$values = get_field('values');
$block_options = get_field('block_options');

$header = Pacific_Helper::generate_header(array(
	'text' => $header['title'],
	'tag' => $header['tag'],
	'class' => 'our-values-new__title'
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
">
  <div class="container">
    <?php echo $header; ?>
    <?php if( $values ) : ?>
      <div class="our-values-new__values">
        <?php foreach( $values as $value ) : ?>
          <?php 
            $value_title = Pacific_Helper::generate_paragraph(array(
              'text'  => $value['title'],
              'class' => 'our-values-new__value-title'
            ));

            $value_text = Pacific_Helper::generate_wysiwyg(array(
              'content'  => $value['text'],
              'classes' => array('our-values-new__value-text')
            ));
          ?>
          <?php if ( $value_title || $value_text ) : ?>
            <div class="our-values-new__value <?php echo $value['background']; ?>">
              <?php echo $value_title; ?>
              <?php echo $value_text; ?>
            </div>
          <?php endif; ?>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>