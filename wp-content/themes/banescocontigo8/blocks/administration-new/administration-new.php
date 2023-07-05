<?php

/**
 * Administration Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'administration-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block administration-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$administration_title = get_field('administration_title');
$administration_sub_title = get_field('administration_sub_title');
$member_image = get_field('member_image');
$member_name = get_field('member_name', 'options');
$member_position = get_field('member_position', 'options');
$vice_president_title = get_field('vice_president_title', 'options');
$vice_presidents = get_field('vice_presidents', 'options');
$block_layout = get_field('block_layout');
$block_options = get_field('block_options');

$administration_title = Pacific_Helper::generate_header(array(
	'text' => $administration_title['title'],
	'tag' => $administration_title['tag'],
	'class' => 'administration-new__title'
));

$vice_president_title = Pacific_Helper::generate_header(array(
	'text' => $vice_president_title['title'],
	'tag' => $vice_president_title['tag'],
	'class' => 'administration-new__vice-title'
));

$administration_sub_title = Pacific_Helper::generate_paragraph(array(
	'text'  => $administration_sub_title,
	'class' => 'administration-new__sub-title',
));

$member_image = Pacific_Helper::generate_image( array(
  'image' => $member_image,
  'image_size' => 'presidents',
  'class' => 'administration-new__member-image',
  'attributes' => array(
    'title' => $member_image ? $member_image['title'] : null,
    'alt' => $member_image ? $member_image['title'] : null
  )
));

$member_name = Pacific_Helper::generate_paragraph(array(
	'text'  => $member_name,
	'class' => 'administration-new__member-name',
));

$member_position = Pacific_Helper::generate_paragraph(array(
	'text'  => $member_position,
	'class' => 'administration-new__member-position',
));
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> <?php echo esc_attr($block_layout); ?>"
  style="--padding-top: <?php echo $block_options['padding_top']; ?>;
        --padding-top--mobile: <?php echo $block_options['pading_top_mobile']; ?>;
        --padding-bottom: <?php echo $block_options['padding_bottom']; ?>;
        --padding-bottom--mobile: <?php echo $block_options['padding_bottom_mobile']; ?>;
        --margin-top: <?php echo $block_options['margin_top']; ?>;
        --margin-top--mobile: <?php echo $block_options['margin_top_mobile']; ?>;
        --margin-bottom: <?php echo $block_options['margin_bottom']; ?>;
        --margins-bottom--mobile: <?php echo $block_options['margin_bottom_mobile']; ?>;"
>
  <div class="container">
    <div class="administration-new__top">
      <?php echo $administration_title; ?>
      <?php echo $administration_sub_title; ?>
      <?php echo $member_image; ?>
      <?php echo $member_name; ?>
      <?php echo $member_position; ?>
    </div>
    <?php echo $vice_president_title; ?>
    <?php if ( $vice_presidents ) : ?>
      <div class="administration-new__president-wrapper">
        <?php foreach( $vice_presidents as $president ) : ?>
          <?php 
            $vice_president_name = Pacific_Helper::generate_paragraph(array(
              'text'  => $president['vice_president_name'],
              'class' => 'administration-new__vice-president-name'
            ));
            $vice_president_position = Pacific_Helper::generate_paragraph(array(
              'text'  => $president['vice_president_position'],
              'class' => 'administration-new__vice-president-position'
            ));
          ?>
          <?php if ( $vice_president_name || $vice_president_position ) : ?>
            <div class="administration-new__president">
              <?php echo $vice_president_name; ?>
              <?php echo $vice_president_position; ?>
            </div>
          <?php endif; ?>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>