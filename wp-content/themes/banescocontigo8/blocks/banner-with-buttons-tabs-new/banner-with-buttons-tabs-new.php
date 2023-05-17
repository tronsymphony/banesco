<?php

/**
 * Banner With Buttons Tabs Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'banner-with-buttons-tabs-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block banner-with-buttons-tabs-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$header = get_field('header');
$first_tab_title = get_field('first_tab_title');
$second_tab_title = get_field('second_tab_title');
$show_more_button_text = get_field('show_more_button_text');
$first_tab_hidden_content = get_field('first_tab_hidden_content');
$second_tab_hidden_content = get_field('second_tab_hidden_content');

$first_content_data = array(
	'left_side' => get_field('left_side_content_first_tab'),
	'right_side' => get_field('right_side_content_first_tab')
);
$second_content_data = array(
	'left_side' => get_field('left_side_content_second_tab'),
	'right_side' => get_field('right_side_content_second_tab')
);

$header = Pacific_Helper::generate_header(array(
	'text' => $header['title'],
	'tag' => $header['tag'],
	'class' => 'banner-with-buttons-tabs-new__title'
));

$first_tab_title = Pacific_Helper::generate_paragraph(array(
	'text'  => $first_tab_title,
	'class' => 'banner-with-buttons-tabs-new__tab active first_tab_title',
));

$second_tab_title = Pacific_Helper::generate_paragraph(array(
	'text'  => $second_tab_title,
	'class' => 'banner-with-buttons-tabs-new__tab second_tab_title'
));

$show_more_button_text = Pacific_Helper::generate_paragraph(array(
	'text'  => $show_more_button_text,
	'class' => 'banner-with-buttons-tabs-new__grey-button active'
));

$first_tab_hidden_content = Pacific_Helper::generate_wysiwyg(array(
	'content'  => $first_tab_hidden_content,
	'class' => 'banner-with-buttons-tabs-new__grey-button'
));

$second_tab_hidden_content = Pacific_Helper::generate_wysiwyg(array(
	'content'  => $second_tab_hidden_content,
	'class' => 'banner-with-buttons-tabs-new__grey-button'
));
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
	<div class="container">
		<?php echo $header; ?>

		<div class="banner-with-buttons-tabs-new__inner">
			<div class="banner-with-buttons-tabs-new__header">
				<?php echo $first_tab_title; ?>
				<?php echo $second_tab_title; ?>
			</div>
			<div class="banner-with-buttons-tabs-new__body">
				<div class="banner-with-buttons-tabs-new__content active first_tab_content">
					<div class="banner-with-buttons-tabs-new__items">
						<?php if ( $first_content_data ) : ?>
							<?php foreach( $first_content_data as $key => $data ) :  ?>
								<?php 
									$side_header = Pacific_Helper::generate_header(array(
										'text' => $data[$key . '_header']['title'],
										'tag' => $data[$key . '_header']['tag'],
										'class' => 'banner-with-buttons-tabs-new__item-title'
									));
									
									$side_image = Pacific_Helper::generate_image( array(
										'image' => $data[$key . '_image'],
										'attributes' => array(
											'title' => $data[$key . '_image']['title']
										)
									));

									$side_description = Pacific_Helper::generate_paragraph(array(
										'text'  => $data[$key . '_description'],
										'class' => ''
									));
								?>
								<div class="banner-with-buttons-tabs-new__item">
									<div class="banner-with-buttons-tabs-new__item-image">
										<?php echo $side_image; ?>
									</div>
									<div class="banner-with-buttons-tabs-new__item-content">
										<?php echo $side_header; ?>
										<div class="banner-with-buttons-tabs-new__item-description text">
											<?php echo $side_description; ?>
										</div>
									</div>
								</div>
							<?php endforeach; ?>
						<?php endif; ?>
					</div>
					<div class="banner-with-buttons-tabs-new__extra">
						<div class="banner-with-buttons-tabs-new__grey-buttons">
							<?php echo $show_more_button_text; ?>
						</div>
						<div class="banner-with-buttons-tabs__hidden banner-with-buttons-tabs__hidden1 text active">
							<?php echo $first_tab_hidden_content; ?>
						</div>
					</div>
				</div>

				<div class="banner-with-buttons-tabs-new__content second_tab_content">
					<div class="banner-with-buttons-tabs-new__items">
						<?php if ( $second_content_data ) : ?>
							<?php foreach( $second_content_data as $key => $data ) :  ?>
								<?php 
									$side_header = Pacific_Helper::generate_header(array(
										'text' => $data[$key . '_header']['title'],
										'tag' => $data[$key . '_header']['tag'],
										'class' => 'banner-with-buttons-tabs-new__item-title'
									));
									
									$side_image = Pacific_Helper::generate_image( array(
										'image' => $data[$key . '_image'],
										'attributes' => array(
											'title' => $data[$key . '_image']['title']
										)
									));

									$side_description = Pacific_Helper::generate_paragraph(array(
										'text'  => $data[$key . '_description'],
										'class' => ''
									));
								?>
								<div class="banner-with-buttons-tabs-new__item">
									<div class="banner-with-buttons-tabs-new__item-image">
										<?php echo $side_image; ?>
									</div>
									<div class="banner-with-buttons-tabs-new__item-content">
										<?php echo $side_header; ?>
										<div class="banner-with-buttons-tabs-new__item-description text">
											<?php echo $side_description; ?>
										</div>
									</div>
								</div>
							<?php endforeach; ?>
						<?php endif; ?>
					</div>
					<div class="banner-with-buttons-tabs-new__extra">
						<div class="banner-with-buttons-tabs-new__grey-buttons">
							<?php echo $show_more_button_text; ?>
						</div>
						<div class="banner-with-buttons-tabs__hidden banner-with-buttons-tabs__hidden1 text active">
							<?php echo $second_tab_hidden_content; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>