<?php

/**
 * Ratings Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'ratings-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block ratings-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assign defaults.
$header = get_field('header');
$block_options = get_field('block_options');
$logo = null;
$columns = array();

$rating_columns = array(
	1 => get_field('rating_column_1'),
	2 => get_field('rating_column_2'),
	3 => get_field('rating_column_3'),
	4 => get_field('rating_column_4'),
);

$header = Pacific_Helper::generate_header(array(
  'text' => $header['title'],
  'tag' => $header['tag'],
  'class' => 'ratings-new__header',
));

if ( $rating_columns[1]['logo'] ) :
	$logo = Pacific_Helper::generate_image(array(
    'image' => $rating_columns[1]['logo'],
    'image_size' => 'ratings',
    'attributes' => array(
      'title' => $rating_columns[1]['logo']['title'],
      'alt' => $rating_columns[1]['logo']['title'],
      'class' => 'ratings-new__logo',
    ),
  ));
endif;

$generate_column = function ($rating_column) {
	$column_title = Pacific_Helper::generate_paragraph(array(
    'text' => $rating_column['column_title'],
    'class' => 'ratings-new__column-title',
  ));

	$column_text = Pacific_Helper::generate_paragraph(array(
    'text' => $rating_column['column_text'],
    'class' => 'ratings-new__column_text',
  ));

	return array(
		'column_title' => $column_title,
		'column_text' => $column_text,
	);
};

for ( $i = 2; $i <= 4; $i++ ) :
	$columns[$i] = $generate_column( $rating_columns[$i] );
endfor;
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>"
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
		<div class="ratings-new__column-wrapper">
			<div class="ratings-new__column">
				<?php echo $logo; ?>
			</div>
			<?php foreach ( $columns as $column ) : ?>
				<div class="ratings-new__column">
					<div class="ratings-new__column-title">
						<?php echo $column['column_title']; ?>
					</div>
					<div class="ratings-new__column-text">
						<?php echo $column['column_text']; ?>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>