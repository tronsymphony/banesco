<?php

/**
 * Contact New Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'contact-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block contact-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$contact_info = get_field('contact_info');
$color_theme = get_field('color_theme');
$header = get_field('header');
$block_styling = get_field('block_styling');

$header = Pacific_Helper::generate_header(array(
	'text' => $header['title'],
	'tag' => $header['tag'],
	'class' => 'contact-new__title'
));
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" style="
  --padding-top: <?= ($block_styling['padding-top']) ? $block_styling['padding-top'].'px' : '20px' ?>;
  --paddings-top--mobile: <?= ($block_styling['paddings-top--mobile']) ? $block_styling['paddings-top--mobile'].'px' : '20px' ?>;
  --paddings-bottom: <?= ($block_styling['paddings-bottom']) ? $block_styling['paddings-bottom'].'px' : '20px' ?>;
  --paddings-bottom--mobile: <?= ($block_styling['paddings-bottom--mobile']) ? $block_styling['paddings-bottom--mobile'].'px' : '20px' ?>;
  --margins-top: <?= ($block_styling['margins-top']) ? $block_styling['margins-top'].'px' : '20px' ?>;
  --margins-top--mobile: <?= ($block_styling['margins-top--mobile']) ? $block_styling['margins-top--mobile'].'px' : '20px' ?>;
  --margins-bottom: <?= ($block_styling['margins-bottom']) ? $block_styling['margins-bottom'].'px' : '20px' ?>;
  --margins-bottom--mobile: <?= ($block_styling['margins-bottom--mobile']) ? $block_styling['margins-bottom--mobile'].'px' : '20px' ?>;
  --gradient: <?= ($block_styling['gradient'])? $block_styling['gradient'] : '#fff' ?>;
">
  <div class="container">
    <?php echo $header; ?>
    <div class="contact-new__info-wrapper <?php echo $color_theme; ?>">
      <?php if ( $contact_info ) : ?>
        <?php foreach( $contact_info as $info ) : ?>
          <?php
            $info_image = Pacific_Helper::generate_image( array(
              'image' => $info['icon'],
              'attributes' => array(
                'class' => 'contact-new__info-image',
                'title' => $info['icon'] ? $info['icon']['title'] : null,
                'alt' => $info['icon'] ? $info['icon']['title'] : null
              )
            ));

            $info_text = Pacific_Helper::generate_wysiwyg(array(
              'content'  => $info['info_content'],
              'classes' => array('contact-new__info-text')
            ));
          ?>
          <div class="contact-new__info-item">
            <div class="contact-new__info-image-wrapper">
              <?php echo $info_image; ?>
            </div>
            <div class="contact-new__info-content">
              <?php echo $info_text; ?>
            </div>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>
  </div>
</section>