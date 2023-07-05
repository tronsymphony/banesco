<?php

/**
 * Banner With Buttons Tabs Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'banner-with-buttons-tabs-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

if( isset( $block['data']['preview_image_help'] )  ) :
	echo Pacific_Gutenberg::get_preview_image( $block['data']['preview_image_help'], $block['name'] );
	return;
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
$show_more_button_text = get_field('show_more_button_text');
$add_bottom_button = get_field('add_bottom_button');
$bottom_button = get_field('bottom_button');
$add_bottom_text = get_field('add_bottom_text');
$bottom_text = get_field('bottom_text');
$select_tabs = get_field('select_tabs');
$first_tab_title = get_field('first_tab_title');
$second_tab_title = get_field('second_tab_title');
$third_tab_title = get_field('third_tab_title');
$fourth_tab_title = get_field('fourth_tab_title');
$fifth_tab_title = get_field('fifth_tab_title');
$sixth_tab_title = get_field('sixth_tab_title');
$first_tab_hidden_content = get_field('first_tab_hidden_content');
$second_tab_hidden_content = get_field('second_tab_hidden_content');
$third_tab_hidden_content = get_field('third_tab_hidden_content');
$fourth_tab_hidden_content = get_field('fourth_tab_hidden_content');
$fifth_tab_hidden_content = get_field('fifth_tab_hidden_content');
$sixth_tab_hidden_content = get_field('sixth_tab_hidden_content');
$first_tab_content = get_field('first_tab_content');
$second_tab_content = get_field('second_tab_content');
$third_tab_content = get_field('third_tab_content');
$fourth_tab_content = get_field('fourth_tab_content');
$fifth_tab_content = get_field('fifth_tab_content');
$sixth_tab_content = get_field('sixth_tab_content');
$block_options = get_field('block_options');
$center_tab_content = get_field('center_tab_content');
$tab_title_color = get_field('tab_title_color');

$header = Pacific_Helper::generate_header(array(
	'text' => $header['title'],
	'tag' => $header['tag'],
	'class' => 'banner-with-buttons-tabs-new__title'
));

$first_tab_title = Pacific_Helper::generate_paragraph(array(
	'text'  => $first_tab_title,
	'class' => 'banner-with-buttons-tabs-new__tab active',
	'attributes' => array(
		'data-tab' => 'first'
	)
));

$second_tab_title = Pacific_Helper::generate_paragraph(array(
	'text'  => $second_tab_title,
	'class' => 'banner-with-buttons-tabs-new__tab',
	'attributes' => array(
		'data-tab' => 'second'
	)
));

$third_tab_title = Pacific_Helper::generate_paragraph(array(
	'text'  => $third_tab_title,
	'class' => 'banner-with-buttons-tabs-new__tab',
	'attributes' => array(
		'data-tab' => 'third'
	)
));

$fourth_tab_title = Pacific_Helper::generate_paragraph(array(
	'text'  => $fourth_tab_title,
	'class' => 'banner-with-buttons-tabs-new__tab',
	'attributes' => array(
		'data-tab' => 'fourth'
	)
));

$fifth_tab_title = Pacific_Helper::generate_paragraph(array(
	'text'  => $fifth_tab_title,
	'class' => 'banner-with-buttons-tabs-new__tab',
	'attributes' => array(
		'data-tab' => 'fifth'
	)
));

$sixth_tab_title = Pacific_Helper::generate_paragraph(array(
	'text'  => $sixth_tab_title,
	'class' => 'banner-with-buttons-tabs-new__tab',
	'attributes' => array(
		'data-tab' => 'sixth'
	)
));

$show_more_button_text = Pacific_Helper::generate_paragraph(array(
	'text'  => $show_more_button_text,
	'class' => 'banner-with-buttons-tabs-new__grey-button'
));

$first_tab_hidden_content = Pacific_Helper::generate_wysiwyg(array(
	'content'  => $first_tab_hidden_content,
	'class' => 'banner-with-buttons-tabs-new__grey-button'
));

$second_tab_hidden_content = Pacific_Helper::generate_wysiwyg(array(
	'content'  => $second_tab_hidden_content,
	'class' => 'banner-with-buttons-tabs-new__grey-button'
));

$third_tab_hidden_content = Pacific_Helper::generate_wysiwyg(array(
	'content'  => $third_tab_hidden_content,
	'class' => 'banner-with-buttons-tabs-new__grey-button'
));

$fourth_tab_hidden_content = Pacific_Helper::generate_wysiwyg(array(
	'content'  => $fourth_tab_hidden_content,
	'class' => 'banner-with-buttons-tabs-new__grey-button'
));

$fifth_tab_hidden_content = Pacific_Helper::generate_wysiwyg(array(
	'content'  => $fifth_tab_hidden_content,
	'class' => 'banner-with-buttons-tabs-new__grey-button'
));

$sixth_tab_hidden_content = Pacific_Helper::generate_wysiwyg(array(
	'content'  => $sixth_tab_hidden_content,
	'class' => 'banner-with-buttons-tabs-new__grey-button'
));

if ( $add_bottom_button ) :
	$bottom_button = Pacific_Helper::generate_acf_link(array(
		'link' => $bottom_button['button_link'],
		'class' => 'banner-with-buttons-tabs-new__btn ' . $bottom_button['button_options'],
		'link_attributes' => array(
			'title' => $bottom_button['button_link'] ? $bottom_button['button_link']['title'] : null,
			'alt' => $bottom_button['button_link'] ? $bottom_button['button_link']['title'] : null,
			'target' => $bottom_button['button_link']['target'] ?? null
		)
	));
endif;

$bottom_text = Pacific_Helper::generate_paragraph(array(
	'text'  => $bottom_text,
	'class' => 'banner-with-buttons-tabs-new__bottom-text'
));

$tabs = array(
	array(
			'tab_name' => 'first',
			'tab_content' => $first_tab_content,
			'hidden_content' => $first_tab_hidden_content
	),
	array(
			'tab_name' => 'second',
			'tab_content' => $second_tab_content,
			'hidden_content' => $second_tab_hidden_content
	),
	array(
			'tab_name' => 'third',
			'tab_content' => $third_tab_content,
			'hidden_content' => $third_tab_hidden_content
	),
	array(
		'tab_name' => 'fourth',
		'tab_content' => $fourth_tab_content,
		'hidden_content' => $fourth_tab_hidden_content
	),
	array(
		'tab_name' => 'fifth',
		'tab_content' => $fifth_tab_content,
		'hidden_content' => $fifth_tab_hidden_content
	),
	array(
		'tab_name' => 'sixth',
		'tab_content' => $sixth_tab_content,
		'hidden_content' => $sixth_tab_hidden_content
	)
);
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>"
style="--padding-top: <?php echo $block_options['padding_top']; ?>;
      --padding-top--mobile: <?php echo $block_options['pading_top_mobile']; ?>;
      --padding-bottom: <?php echo $block_options['padding_bottom']; ?>;
      --padding-bottom--mobile: <?php echo $block_options['padding_bottom_mobile']; ?>;
      --margin-top: <?php echo $block_options['margin_top']; ?>;
      --margin-top--mobile: <?php echo $block_options['margin_top_mobile']; ?>;
      --margin-bottom: <?php echo $block_options['margin_bottom']; ?>;
      --margins-bottom--mobile: <?php echo $block_options['margin_bottom_mobile']; ?>;">
	<div class="container">
		<?php echo $header; ?>
		<div class="banner-with-buttons-tabs-new__inner">
			<div class="banner-with-buttons-tabs-new__header <?php echo $tab_title_color; ?>">
				<?php echo $first_tab_title; ?>
				<?php echo $second_tab_title; ?>
				<?php echo $third_tab_title; ?>
				<?php echo $fourth_tab_title; ?>
				<?php echo $fifth_tab_title; ?>
				<?php echo $sixth_tab_title; ?>
			</div>
			<div class="banner-with-buttons-tabs-new__body">
				<?php foreach( $tabs as $tab ) : ?>
					<?php if ( $tab['tab_content'] ) : ?>
						<?php 
							$tab_name = $tab['tab_name'];
							$tab_content = $tab['tab_content'];
							$hidden_content = $tab['hidden_content'];
						?>
						<div class="banner-with-buttons-tabs-new__content <?php echo $tab_name == "first" ? "active" : null ; ?>" data-tab="<?php echo $tab_name; ?>">
							<div class="banner-with-buttons-tabs-new__items <?php echo $center_tab_content ? "centered" : "left" ;?>">
								<?php foreach( $tab_content as $data ) : ?>
									<?php if ( $data['image'] || $data['header']['title'] || $data['description'] ) : ?>
										<?php 
											$tab_header = Pacific_Helper::generate_header(array(
												'text' => $data['header']['title'],
												'tag' => $data['header']['tag'],
												'class' => 'banner-with-buttons-tabs-new__item-title'
											));
											
											$tab_image = Pacific_Helper::generate_image( array(
												'image' => $data['image'],
												'attributes' => array(
													'title' => $data['image'] ? $data['image']['title'] : null 
												)
											));
											
											$tab_description = Pacific_Helper::generate_paragraph(array(
												'text'  => $data['description'],
												'class' => ''
											));

											$warning_text = Pacific_Helper::generate_wysiwyg(array(
												'content'=> $data['warning_text'],
												'classes' => array('banner-with-buttons-tabs-new__item-warning-text')
											));
										?>
										<div class="banner-with-buttons-tabs-new__item <?php echo $center_tab_content ? "centered" : "left" ;?>">
											<?php if ( $data['add_warning_text'] ) : ?>
												<?php echo $warning_text; ?>
											<?php endif; ?>
											<?php if ( $tab_image ) : ?>
												<div class="banner-with-buttons-tabs-new__item-image">
													<?php echo $tab_image; ?>
												</div>
											<?php endif; ?>
											<div class="banner-with-buttons-tabs-new__item-content">
												<?php echo $tab_header; ?>
												<?php if ( $tab_description ) : ?>
													<div class="banner-with-buttons-tabs-new__item-description text">
														<?php echo $tab_description; ?>
													</div>
												<?php endif; ?>
											</div>
										</div>
									<?php endif; ?>
								<?php endforeach; ?>	
							</div>
							<?php if ( $show_more_button_text && $hidden_content ) : ?>
								<div class="banner-with-buttons-tabs-new__extra">
									<div class="banner-with-buttons-tabs-new__grey-buttons <?php echo $tab_name == "first" ? "active" : null ; ?>">
										<?php echo $show_more_button_text; ?>
									</div>
									<div class="banner-with-buttons-tabs__hidden text <?php echo $tab_name == "first" ? "active" : null ; ?>">
										<?php echo $hidden_content; ?>
									</div>
								</div>
							<?php endif; ?>
						</div>
					<?php endif; ?>
				<?php endforeach; ?>	
			</div>
		</div>
		<?php if ( $add_bottom_text && $bottom_text ) : ?>
      <div class="banner-with-buttons-tabs-new__text-wrapper">
        <?php echo $bottom_text; ?>
      </div>
    <?php endif; ?>
		<?php if ( $add_bottom_button && $bottom_button ) : ?>
      <div class="banner-with-buttons-tabs-new__button-wrapper">
        <?php echo $bottom_button; ?>
      </div>
    <?php endif; ?>
	</div>
</section>