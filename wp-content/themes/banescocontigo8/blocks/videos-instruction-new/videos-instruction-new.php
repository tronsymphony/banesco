<?php

/**
 * Videos Instruction Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'videos-instruction-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block videos-instruction-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$header = get_field('header');
$videos = get_field('videos');
$button = get_field('button');
$bottom_button = get_field('bottom_button');

$header = Pacific_Helper::generate_header(array(
	'text' => $header['title'],
	'tag' => $header['tag'],
	'class' => 'videos-instruction-new__title'
));

$bottom_button = Pacific_Helper::generate_acf_link(array(
  'link' => $bottom_button['link'],
  'class' => 'videos-instruction-new__bottom-button '. $bottom_button['button_options'],
  'link_attributes' => array(
    'title' => $bottom_button['link'] ? $bottom_button['link']['title'] : null,
    'alt' => $bottom_button['link'] ? $bottom_button['link']['title'] : null,
    'target' => $bottom_button['link']['target'] ?? null
  )
));
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="container">
    <?php echo $header; ?>
    <div class="videos-instruction-new__video-wrapper">
      <?php if( count( $videos ) > 0 ) : ?>
        <?php foreach( $videos as $video ) : ?>
          <?php
            $video_title = Pacific_Helper::generate_paragraph(array(
              'text'  => $video['title'],
              'class' => 'videos-instruction-new__video-title'
            ));

            $video_description = Pacific_Helper::generate_paragraph(array(
              'text'  => $video['description'],
              'class' => 'videos-instruction-new__video-description'
            ));

            $video_image = Pacific_Helper::generate_image( array(
              'image' => $video['video_thumbnail'],
              'image_size' => 'video-thumbnail',
              'attributes' => array(
                'class' => 'videos-instruction-new__video-thumbnail',
                'title' => $video['video_thumbnail'] ? $video['video_thumbnail']['title'] : null,
              )
            ));

            $video_button = Pacific_Helper::generate_acf_link(array(
              'link' => $video['button'],
              'class' => 'videos-instruction-new__video-button primary-button',
              'link_attributes' => array(
                'title' => $video['button'] ? $video['button']['title'] : null,
                'alt' => $video['button'] ? $video['button']['title'] : null,
                'target' => $video['button']['target'] ?? null
              )
            ));
          ?>

          <div class="videos-instruction-new__video">
            <div class="videos-instruction-new__video-content">
              <?php echo $video_title; ?>
              <?php echo $video_description; ?>
            </div>
            <div class="videos-instruction-new__video-embed">
              <?php echo $video_image; ?>
              <div class="videos-instruction-new__iframe-wrapper">
                <?php echo $video['video']; ?>
              </div>
            </div>
            <div class="videos-instruction-new__video-button">
              <?php echo $video_button; ?>
            </div>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>
    <div class="videos-instruction-new__bottom-wrapper">
      <?php echo $bottom_button; ?>
    </div>
  </div>
</section>