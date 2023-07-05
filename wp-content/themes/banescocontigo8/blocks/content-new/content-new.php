<?php

/**
 * Content Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'content-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block content-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$add_main_header = get_field('add_main_header');
$add_sub_header = get_field('add_sub_header');
$add_bold_title_xl = get_field('add_bold_title_xl');
$add_bold_title_sm = get_field('add_bold_title_sm');
$add_content = get_field('add_content');
$add_bottom_link = get_field('add_bottom_link');
$background_color = get_field('background_color');
$block_options = get_field('block_options');
$bold_title_xl = get_field('bold_title_xl');
$bold_title_sm = get_field('bold_title_sm');
$content = get_field('content');
$bottom_link = get_field('bottom_link');

if ( $add_main_header ) :
  $main_header = get_field('main_header');

  $main_header = Pacific_Helper::generate_header(array(
    'text' => $main_header['title'],
    'tag' => $main_header['tag'],
    'class' => 'content-new__header'
  ));
  else :
    $main_header = null;
endif;

if ( $add_sub_header ) :
  $sub_header = get_field('sub_header');

  $sub_header = Pacific_Helper::generate_header(array(
    'text' => $sub_header['title'],
    'tag' => $sub_header['tag'],
    'class' => 'content-new__sub-header'
  ));
  else :
    $sub_header = null;
endif;

$bold_title_xl = Pacific_Helper::generate_paragraph(array(
  'text'  => $bold_title_xl,
  'class' => 'content-new__bold-title content-new__bold-title--xl',
));

$bold_title_sm = Pacific_Helper::generate_paragraph(array(
  'text'  => $bold_title_sm,
  'class' => 'content-new__bold-title content-new__bold-title--sm',
));

$content = Pacific_Helper::generate_paragraph(array(
  'text'  => $content,
  'class' => 'content-new__content',
));

$bottom_link = Pacific_Helper::generate_acf_link(array(
  'link' => $bottom_link,
  'class' => 'content-new__bottom-link',
  'link_attributes' => array(
    'title' => $bottom_link ? $bottom_link['title'] : null,
    'target' => $bottom_link['target'] ?? null
  )
));

?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>"
style="--padding-top: <?php echo $block_options['padding_top']; ?>;
        --padding-top--mobile: <?php echo $block_options['pading_top_mobile']; ?>;
        --padding-bottom: <?php echo $block_options['padding_bottom']; ?>;
        --padding-bottom--mobile: <?php echo $block_options['padding_bottom_mobile']; ?>;
        --margin-top: <?php echo $block_options['margin_top']; ?>;
        --margin-top--mobile: <?php echo $block_options['margin_top_mobile']; ?>;
        --margin-bottom: <?php echo $block_options['margin_bottom']; ?>;
        --margins-bottom--mobile: <?php echo $block_options['margin_bottom_mobile']; ?>;
        --bacground-color: <?php echo $background_color; ?>"
>
  <div class="container">
    <?php echo $main_header; ?>
    <?php echo $sub_header; ?>
    <?php echo $bold_title_xl; ?>
    <?php echo $bold_title_sm; ?>
    <?php echo $content; ?>
    <?php echo $bottom_link; ?>
  </div>
</section>