<?php

/**
 * Block Grid Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'block-grid-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block block-grid-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$grid_blocks = get_field('grid_blocks');
$block_styling= get_field('block_styling'); 
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" style="
  --padding-top: <?= ($block_styling['padding-top']) ? $block_styling['padding-top'].'px' : '0px' ?>;
  --paddings-top--mobile: <?= ($block_styling['paddings-top--mobile']) ? $block_styling['paddings-top--mobile'].'px' : '0px' ?>;
  --paddings-bottom: <?= ($block_styling['paddings-bottom']) ? $block_styling['paddings-bottom'].'px' : '0px' ?>;
  --paddings-bottom--mobile: <?= ($block_styling['paddings-bottom--mobile']) ? $block_styling['paddings-bottom--mobile'].'px' : '0px' ?>;
  --margins-top: <?= ($block_styling['margins-top']) ? $block_styling['margins-top'].'px' : '0px' ?>;
  --margins-top--mobile: <?= ($block_styling['margins-top--mobile']) ? $block_styling['margins-top--mobile'].'px' : '0px' ?>;
  --margins-bottom: <?= ($block_styling['margins-bottom']) ? $block_styling['margins-bottom'].'px' : '0px' ?>;
  --margins-bottom--mobile: <?= ($block_styling['margins-bottom--mobile']) ? $block_styling['margins-bottom--mobile'].'px' : '0px' ?>;
  --gradient: <?= ($block_styling['gradient'])? $block_styling['gradient'].'px' : '#fff' ?>;
">
  <div class="container">
  <?php if ( $grid_blocks ) : ?>
    <div class="block-grid-new__wrapper">
      <?php foreach( $grid_blocks as $block ) : ?>
        <?php
          $title = Pacific_Helper::generate_paragraph(array(
            'text'  => $block['title'],
            'class' => 'block-grid-new__title'
          ));

          $content = Pacific_Helper::generate_paragraph(array(
            'text'  => $block['content'],
            'class' => 'block-grid-new__content'
          ));

          $link = Pacific_Helper::generate_acf_link(array(
            'link' => $block['link'],
            'class' => 'block-grid-new__button',
            'link_attributes' => array(
              'title' => $block['link'] ? $block['link']['title'] : null,
              'target' => $block['link']['target'] ?? null
            )
          ));

          $desktop_background = $block['desktop_background'] ? $block['desktop_background']['url'] : null; 
          $mobile_background = $block['mobile_background'] ? $block['mobile_background']['url'] : null; 
          $block_size = $block['block_size'] ? $block['block_size'] : null;
        ?>
        <div 
          class="block-grid-new__block <?php echo $block_size ? $block_size : null ?>" 
          style="--desktop-image: url('<?php echo $desktop_background; ?>');
                --mobile-image: url('<?php echo $mobile_background; ?>');"
        >
          <div class="block-grid-new__content-wrapper">
            <?php echo $title; ?>
            <?php echo $content; ?>
          </div>
          <div class="block-grid-new__link-wrapper">
            <?php echo $link; ?>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>
</div>
</section>