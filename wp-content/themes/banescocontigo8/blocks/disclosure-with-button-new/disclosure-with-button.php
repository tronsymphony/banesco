<?php

/**
 * Disclosure with Button Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'disclosure-with-button-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block disclosure-with-button';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$disclosure = get_field('disclosure');
$buttons = get_field('buttons');

$disclosure = Pacific_Helper::generate_paragraph(array(
	'text'  => $disclosure,
	'class' => 'disclosure-with-button__diclosure-text'
));
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="container">
    <div class="disclosure-with-button__disclosure-wrapper">
      <?php echo $disclosure; ?>
    </div>
    <?php if ( $buttons ) : ?>
      <div class="disclosure-with-button__button-wrapper">
        <?php foreach($buttons as $button) : ?>
          <?php 
            $btn = Pacific_Helper::generate_acf_link(array(
              'link' => $button['button'],
              'class' => 'disclosure-with-button__btn ' . $button['button_options'],
              'link_attributes' => array(
                'title' => $button['button']['title'],
                'alt' => $button['button']['title'],
                'target' => $button['button']['target'] ?? null
              )
            )); 

            echo $btn;
          ?>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>