<?php

/**
 * Table Analyze New Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'table-analyze-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block table-analyze-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$title = get_field('title');
$table_items = get_field('table_items');
$block_options = get_field('block_options');

$title = Pacific_Helper::generate_paragraph(array(
	'text'  => $title,
	'class' => 'table-analyze-new__title',
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
    <?php echo $title; ?>
      <?php if ( $table_items ) : ?>
        <div class="table-analyze-new__table-items">
          <?php foreach( $table_items as $item ) : ?>
            <?php if ( $item['key'] || $item['value'] ) : ?>
              <div class="table-analyze-new__table-item">
                <p class="table-analyze-new__item-value">
                  <span class="table-analyze-new__item-key"><?php echo $item['key']; ?></span>
                  -
                  <?php echo $item['value']; ?>
                </p>
              </div>
            <?php endif; ?>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
  </div>
</section>