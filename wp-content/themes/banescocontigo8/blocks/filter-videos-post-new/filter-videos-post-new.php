<?php

/**
 * Filter Videos Post Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'filter-videos-post-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block filter-videos-post-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$searchbox_title = get_field('searchbox_title');
$searchbox_placeholder = get_field('searchbox_placeholder');
$filters_buttons = get_field('filters_buttons');
$image_plaholder = get_field('image_plaholder');
$button_title = get_field('button_title');
$block_options = get_field('block_options');

$searchbox_title = Pacific_Helper::generate_paragraph(array(
  'text'  => $searchbox_title,
  'class' => 'filter-videos-post-new__searchbox-title'
));

$taxonomy = 'videos_cat';
$terms = get_terms($taxonomy);

$filters = explode(',', $filters_buttons);
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
    <div class="filter-videos-post-new__searchbox-wrapper">
      <div class="filter-videos-post-new__title-wrapper">
        <?php echo $searchbox_title; ?>
      </div>
      <div class="filter-videos-post-new__input-wrapper">
        <form class="filter-videos-post-new__search-form">
          <input type="text" class="filter-videos-post-new__search-input" placeholder="<?php echo $searchbox_placeholder ? $searchbox_placeholder : null; ?>">
          <button class="filter-videos-post-new__search-button" type="submit"></button>
        </form>
      </div>
    </div>
    <?php if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) : ?>
      <div class="filter-videos-post-new__filter-wrapper" data-pageId=<?php echo get_the_ID(); ?>>
        <p class="filter-videos-post-new__filter outlined-gray active" data-termid="0"><?php echo __('Ver todo', 'pacific'); ?></p>
        <?php foreach( $terms as $term ) : ?>
          <?php
            $filter = Pacific_Helper::generate_paragraph(array(
              'text'  => $term->name,
              'class' => 'filter-videos-post-new__filter outlined-gray',
              'attributes' => array(
                'data-termId' => $term->term_id,
              ),
            ));

            echo $filter;
          ?>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
    <div class="filter-videos-post-new__video-wrapper"></div>
    <div class="filter-videos-post-new__pagination"> 
      <ul class="filter-videos-post-new__pagination-list"></ul>  
    </div>
  </div>
</section>