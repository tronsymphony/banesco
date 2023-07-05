<?php

/**
 * Contact Bank Info Component Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'contact-bank-info-component-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block contact-bank-info-component';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$contact_info = get_field('contact_info');
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="container">
    <div class="contact-bank-info-component__info-wrapper">
      <?php if ( $contact_info ) : ?>
        <?php foreach( $contact_info as $info ) : ?>
          <?php
            $info_image = Pacific_Helper::generate_image( array(
              'image' => $info['image'],
              'attributes' => array(
                'class' => 'contact-bank-info-component__info-image',
                'title' => $info['image'] ? $info['image']['title'] : null
              )
            ));

            $info_title = Pacific_Helper::generate_paragraph(array(
              'text'  => $info['title'],
              'class' => 'contact-bank-info-component__info-title'
            ));

            $info_link = Pacific_Helper::generate_acf_link(array(
              'link' => $info['link'],
              'class' => 'contact-bank-info-component__info-link',
              'link_attributes' => array(
                'title' => $info['link'] ? $info['link']['title'] : null,
                'alt' => $info['link'] ? $info['link']['title'] : null,
                'target' => $info['link']['target'] ?? null
              )
            ));
          ?>
          <div class="contact-bank-info-component__info-item">
            <div class="contact-bank-info-component__info-image-wrapper">
              <?php echo $info_image; ?>
            </div>
            <div class="contact-bank-info-component__info-text">
              <?php echo $info_title; ?>
              <?php echo $info_link; ?>
            </div>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>
  </div>
</section>