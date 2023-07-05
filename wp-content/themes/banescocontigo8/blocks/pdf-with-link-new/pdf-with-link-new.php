<?php

/**
 * PDF With Link Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'pdf-with-link-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block pdf-with-link-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$add_title_and_description = get_field('add_title_and_description');
$header = get_field('header');
$description = get_field('description');
$sub_header = get_field('sub_header');
$pdf_title = get_field('pdf_title');
$files = get_field('files');
$block_options = get_field('block_options');
$section_background_color = get_field('section_background_color');

if ( $add_title_and_description ) :
  $header = Pacific_Helper::generate_header(array(
    'text' => $header['title'],
    'tag' => $header['tag'],
    'class' => 'pdf-with-link-new__title'
  ));

  $description = Pacific_Helper::generate_paragraph(array(
    'text'  => $description,
    'class' => 'pdf-with-link-new__description',
  ));

  $sub_header = Pacific_Helper::generate_header(array(
    'text' => $sub_header['title'],
    'tag' => $sub_header['tag'],
    'class' => 'pdf-with-link-new__sub-title'
  ));
endif;

$pdf_title = Pacific_Helper::generate_paragraph(array(
	'text'  => $pdf_title,
	'class' => 'pdf-with-link-new__pdf-title',
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
  --section-background-color : <?php echo $section_background_color; ?>;
">
  <div class="dark-overlay"></div>
  <img 
    src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/close.svg" 
    alt="<?php echo __('Close Icon', 'pacific'); ?>" 
    title="<?php echo __('Close Icon', 'pacific'); ?>"
    class="pdf-with-link-new__close-icon"
  > 
  <div class="container">
    <?php if ( $add_title_and_description ) : ?>
      <?php echo $header; ?>
      <?php echo $description; ?>
      <?php echo $sub_header; ?>
    <?php endif; ?>
    <?php echo $pdf_title; ?>
    <?php if ( $files ) : ?>
      <div class="pdf-with-link-new__files">
        <?php foreach( $files as $file ) : ?>
          <?php
            $file_link = Pacific_Helper::generate_image(array(
              'image' => $file['icon'],
              'link' => $file['link'] ? $file['link']['url'] : null,
              'image_size' => 'pdf',
              'attributes' => array(
                'title' => $file['icon'] ? $file['icon']['title'] : null,
                'alt' => $file['icon'] ? $file['icon']['title'] : null
              ),
              'class' => 'pdf-with-link-new__icon',
              'link_attributes' => array(
                'title' => $file['link'] ? $file['link']['title'] : null,
                'class' => 'pdf-with-link-new__link',
                'target' => $file['link']['target'] ?? null
              )
            ));
          ?>
          <div class="pdf-with-link-new__file <?php echo $file['file_behaviour']; ?>">
            <?php echo $file_link; ?>
            <?php if ( $file['file_behaviour'] == 'flipping-book' ) : ?>
              <div class="pdf-with-link-new__flipping-book-wrapper book-hidden">
                <?php echo do_shortcode('[flippingbook width="100%" height="auto" ratio="4:3"]' . $file['link']['url'] . '[/flippingbook]'); ?>
              </div>
            <?php endif; ?>
            <?php if ( $file['file_behaviour'] == 'iframe-video' ) : ?>
              <?php 
                $video_link = $file['link']['url'];
                $videoId = '';
                $pattern = '/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/';
                preg_match($pattern, $video_link, $matches);
                if (!empty($matches[1])) :
                  $videoId = $matches[1];
                endif;
              ?>
              <div class="pdf-with-link-new__flipping-book-wrapper book-hidden">
                <iframe 
                  class="pdf-with-link-new__video-iframe"
                  src="https://www.youtube.com/embed/<?php echo $videoId; ?>"
                  title="<?php echo $file['link']['title']; ?>" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen
                >
                </iframe>
              </div>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>