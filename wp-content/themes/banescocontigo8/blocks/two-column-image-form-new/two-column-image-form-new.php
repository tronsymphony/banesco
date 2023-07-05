<?php

/**
 * Two Column Image Form Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'two-column-image-form-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block two-column-image-form-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$image = get_field('image');
$header = get_field('header');
$content = get_field('content');
$add_regular_button = get_field('add_regular_button');
$add_form_button = get_field('add_form_button');
$regular_button = get_field('regular_button');
$form_button = get_field('form_button');
$form = $form_button['form'] ?? null;
$block_options = get_field('block_options');

$image = Pacific_Helper::generate_image( array(
  'image' => $image,
  'image_size' => 'portal',
  'attributes' => array(
    'title' => $image ? $image['title'] : null,
    'alt' => $image ? $image['title'] : null,
    'class' => 'two-column-image-form-new__image'
  )
));

$header = Pacific_Helper::generate_header(array(
  'text' => $header['title'],
  'tag' => $header['tag'],
  'class' => 'two-column-image-form-new__title'
));

$content = Pacific_Helper::generate_paragraph(array(
	'text'  => $content,
	'class' => 'two-column-image-form-new__content',
));

if ( $add_regular_button ) :
  $regular_button = Pacific_Helper::generate_acf_link(array(
		'link' => $regular_button['link'],
		'class' => 'two-column-image-form-new__btn ' . $regular_button['button_options'],
		'link_attributes' => array(
			'title' => $regular_button['link'] ? $regular_button['link']['title'] : null,
			'target' => $regular_button['link']['target'] ?? null
		)
	));
endif;

if ( $add_form_button ) :
  $form_button = Pacific_Helper::generate_paragraph(array(
    'text'  => $form_button['button_title'],
    'class' => 'two-column-image-form-new__btn two-column-image-form-new__form-button ' . $form_button['button_options'],
  ));
endif;
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
  <div class="container-xl">
    <div class="two-column-image-form-new__inner-wrapper">
      <div class="two-column-image-form-new__image-wrapper">
        <?php echo $image; ?>
      </div>
      <div class="two-column-image-form-new__content-wrapper">
        <?php echo $header; ?>
        <?php echo $content; ?>

        <?php if ( $add_regular_button || $add_form_button ) : ?>
          <div class="two-column-image-form-new__button-wrapper">
            <?php if ( $add_regular_button ) : ?>
              <?php echo $regular_button; ?>
            <?php endif; ?>
            <?php if ( $add_form_button ) : ?>
              <?php echo $form_button; ?>
            <?php endif; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <div class="two-column-image-form-new__form-wrapper closed">
    <div class="two-column-image-form-new__close-button"></div>
    <?php gravity_form( $form, true, true, false, '', true ); ?>
  </div>
</section>