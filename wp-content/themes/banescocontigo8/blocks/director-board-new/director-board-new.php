<?php

/**
 * Director Board Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'director-board-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block director-board-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$header = get_field('header');
$content = get_field('content');
$directors = get_field('directors', 'options');
$block_layout = get_field('block_layout');
$block_options = get_field('block_options');

$header = Pacific_Helper::generate_header(array(
	'text' => $header['title'],
	'tag' => $header['tag'],
	'class' => 'director-board-new__title'
));

$content = Pacific_Helper::generate_paragraph(array(
	'text'  => $content,
	'class' => 'director-board-new__content',
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
    <?php echo $header; ?>
    <?php echo $content; ?>
    
    <?php if ( $directors ) : ?>
      <div class="director-board-new__directors">
        <?php foreach( $directors as $director ) : ?>
          <?php 
            $director_image = Pacific_Helper::generate_image( array(
              'image' => $director['director_image'],
              'image_size' => 'presidents',
              'class' => 'director-board-new__director-image',
              'attributes' => array(
                'title' => $director['director_image'] ? $director['director_image']['title'] : null,
                'alt' => $director['director_image'] ? $director['director_image']['title'] : null
              )
            ));
            
            $director_name = Pacific_Helper::generate_paragraph(array(
              'text'  => $director['director_name'],
              'class' => 'director-board-new__director-name'
            ));

            $director_position = Pacific_Helper::generate_paragraph(array(
              'text'  => $director['director_position'],
              'class' => 'director-board-new__director-position'
            ));

            if ($block_layout == "with-description") :
              $director_description = Pacific_Helper::generate_paragraph(array(
                'text'  => $director['director_description'],
                'class' => 'director-board-new__director-description'
              ));
            else: 
              $director_description = null;
            endif;
          ?>
          <?php if ( $director_image || $director_name || $director_position || $director_description ) : ?>
            <div class="director-board-new__director">
              <div class="director-board-new__image-wrapper">
                <?php echo $director_image; ?>
              </div>
              <div class="director-board-new__content-wrapper">
                <?php echo $director_name; ?>
                <?php echo $director_position; ?>
                <?php echo $director_description; ?>
              </div>
            </div>
          <?php endif; ?>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>