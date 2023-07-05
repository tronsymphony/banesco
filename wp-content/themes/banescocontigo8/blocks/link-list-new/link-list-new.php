<?php

/**
 * Link List Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'link-list-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block link-list-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$links = get_field('links');
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="container">
    <?php if (count($links) > 0) : ?>
      <div class="link-list-new__link-wrapper">
        <?php $counter = 0; ?>
        <div class="link-list-new__link-row">
          <?php foreach ($links as $link) : ?>
            <?php
              if ( $counter % 6 === 0 && $counter !== 0 ) :
                echo '</div><div class="link-list-new__link-row">';
              endif;

              $link = Pacific_Helper::generate_acf_link(array(
                'link' => $link['link'],
                'class' => 'link-list-new__link',
                'link_attributes' => array(
                    'title' => $link['link'] ? $link['link']['title'] : null,
                    'alt' => $link['link'] ? $link['link']['title'] : null,
                    'target' => $link['link']['target'] ?? null
                )
              ));

              echo $link;
            ?>
            <?php $counter++; ?>
          <?php endforeach; ?>
        </div>
      </div>
    <?php endif; ?>
  </div>
</section>