<?php

/**
 * Features Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'features-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block features-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$load_more_button_text = get_field('load_more_button_text');
$features = get_field('features');
$load_more = get_field('load_more');
$block_options = get_field('block_options');
$feature_width = get_field('feature_width');
$content_color = get_field('content_color');

$load_more_button_text = Pacific_Helper::generate_paragraph(array(
  'text'  => $load_more_button_text,
  'class' => 'features-new__read-more-button'
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
      --width: <?php echo $feature_width; ?>"
>
  <div class="container">
    <div class="features-new__features <?php echo $load_more ? "load-more" : "simple"; ?>">
      <?php if ( $features ) : ?>
        <?php $count = 0; ?>
				<?php foreach( $features as $feature ) : ?>
          <?php
            $feature_image = Pacific_Helper::generate_image( array(
              'image' => $feature['feature_image'],
              'class' => 'features-new__feature-image',
              'attributes' => array(
                'title' => $feature['feature_image'] ? $feature['feature_image']['title'] : null
              )
            ));

            $feature_title = Pacific_Helper::generate_paragraph(array(
              'text'  => $feature['feature_title'],
              'class' => 'features-new__feature-title'
            ));

            $feature_text = Pacific_Helper::generate_paragraph(array(
              'text'  => $feature['feature_description'],
              'class' => 'features-new__feature-text ' . $content_color 
            ));
          ?>
          <div class="features-new__feature <?php echo $count > 3 ? "features-new__feature--hidden": null; ?>" >
            <?php echo $feature_image; ?>
            <?php echo $feature_title; ?>
            <?php echo $feature_text; ?>
          </div>  
          <?php $count++; ?>
				<?php endforeach; ?>
      <?php endif; ?>
    </div>
    <?php if ( $load_more && $load_more_button_text ) : ?>
      <div class="features-new__button-wrapper">
        <?php echo $load_more_button_text; ?>
      </div>
    <?php endif; ?>
  </div>
</section>