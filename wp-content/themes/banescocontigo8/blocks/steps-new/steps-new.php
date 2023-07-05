<?php

/**
 * Steps Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'steps-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block steps-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$header = get_field('header');
$description = get_field('description');
$steps = get_field('steps', 'options');
$add_bottom_button = get_field('add_bottom_button');
$bottom_button = get_field('bottom_button');

$header = Pacific_Helper::generate_header(array(
	'text' => $header['title'],
	'tag' => $header['tag'],
	'class' => 'steps-new__title'
));

$description = Pacific_Helper::generate_paragraph(array(
	'text'  => $description,
	'class' => 'steps-new__description'
));

if ( $add_bottom_button ) :
  $bottom_button = Pacific_Helper::generate_acf_link(array(
    'link' => $bottom_button['button_link'],
    'class' => 'banner-with-buttons-tabs-new__btn ' . $bottom_button['button_options'],
    'link_attributes' => array(
      'title' => $bottom_button['button_link']['title'],
      'alt' => $bottom_button['button_link']['title'],
      'target' => $bottom_button['button_link']['target'] ?? null
    )
  ));
endif;
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="container">
    <div class="steps-new__inner-container">
      <?php echo $header; ?>
      <?php echo $description; ?>
    </div>
    <div class="steps-new__step-wrapper">
      <?php if( count( $steps ) > 0 ) : ?>
        <?php foreach( $steps as $step ) : ?>
          <?php 
            $step_image = Pacific_Helper::generate_image( array(
              'image' => $step['image'],
              'attributes' => array(
                'title' => $step['image']['title'],
                'class' => 'steps-new__step-item-image'
              )
            ));
            
            $step_counter = Pacific_Helper::generate_paragraph(array(
              'text'  => $step['step_counter'],
              'class' => 'steps-new__step-item-counter'
            ));

            $header = Pacific_Helper::generate_header(array(
              'text' => $step['header']['title'],
              'tag' => $step['header']['tag'],
              'class' => 'steps-new__step-item-header'
            ));

            $small_text = Pacific_Helper::generate_paragraph(array(
              'text'  => $step['small_text'],
              'class' => 'steps-new__step-item-text'
            ));

            $content = Pacific_Helper::generate_wysiwyg(array(
              'content'  => $step['list_content'],
              'class' => 'steps-new__step-item-content'
            ));
          ?>
          <div class="steps-new__step-item">
            <div class="steps-new__step-item-top">
              <?php echo $step_image; ?>
              <?php echo $step_counter; ?>
            </div>
            <div class="steps-new__step-item-middle">
              <?php echo $header; ?>
              <?php echo $small_text; ?>
            </div>
            <div class="steps-new__step-item-bottom">
              <?php echo $content; ?>
            </div>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>
    <?php if ( $add_bottom_button ) : ?>
      <div class="steps-new__button-wrapper">
        <?php echo $bottom_button; ?>
      </div>
    <?php endif; ?>
  </div>
</section>