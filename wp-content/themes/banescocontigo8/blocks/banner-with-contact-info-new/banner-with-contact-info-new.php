<?php

/**
 * Banner With Contact Info New Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'banner-with-contact-info-new-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block banner-with-contact-info-new';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$banner = get_field('banner');
$banner_mobile = get_field('banner_mobile');
$header = get_field('header');
$text = get_field('text');
$contact_info = get_field('contact_info');
$block_options = get_field('block_options');

$header = Pacific_Helper::generate_header(array(
  'text' => $header['title'],
  'tag' => $header['tag'],
  'class' => 'banner-with-contact-info-new__title'
));

$text = Pacific_Helper::generate_paragraph(array(
	'text'  => $text,
	'class' => 'banner-with-contact-info-new__content',
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
  --banner-bg: url('<?php echo $banner ? esc_attr($banner['url']) : null; ?>');
  --banner-mob-bg: url('<?php echo $banner_mobile ? esc_attr($banner_mobile['url']) : null; ?>');
">
  <div class="container">
    <div class="banner-with-contact-info-new__banner-wrapper">
      <div class="banner-with-contact-info-new__banner-content-wrapper">
        <?php echo $header; ?>
        <?php echo $text; ?>
      </div>
    </div>
    <div class="banner-with-contact-info-new__contact-wrapper">
      <?php if ( $contact_info ) : ?>
        <?php foreach( $contact_info as $info ) : ?>
          <?php 
            $info_title = Pacific_Helper::generate_paragraph(array(
              'text'  => $info['title'],
              'class' => 'banner-with-contact-info-new__info-title'
            ));

            $info_full_name = Pacific_Helper::generate_paragraph(array(
              'text'  => $info['full_name'],
              'class' => 'banner-with-contact-info-new__info-name'
            ));

            $info_phone = Pacific_Helper::generate_acf_link(array(
              'link' => $info['phone'],
              'class' => 'banner-with-contact-info-new__info-phone',
              'link_attributes' => array(
                'title' => $info['phone'] ? $info['phone']['title'] : null,
                'target' => $info['phone']['target'] ?? null
              )
            ));

            $info_email = Pacific_Helper::generate_acf_link(array(
              'link' => $info['email'],
              'class' => 'banner-with-contact-info-new__info-email',
              'link_attributes' => array(
                'title' => $info['email'] ? $info['email']['title'] : null,
                'target' => $info['email']['target'] ?? null
              )
            ));

            if ( $info['add_extra_email'] ) :
              $info_extra_email = Pacific_Helper::generate_acf_link(array(
                'link' => $info['extra_email'],
                'class' => 'banner-with-contact-info-new__info-extra-email',
                'link_attributes' => array(
                  'title' => $info['extra_email'] ? $info['extra_email']['title'] : null,
                  'target' => $info['extra_email']['target'] ?? null
                )
              ));
            endif;

            if ( $info['add_extra_phone'] ) :
              $info_extra_phone = Pacific_Helper::generate_acf_link(array(
                'link' => $info['extra_phone'],
                'class' => 'banner-with-contact-info-new__info-extra-phone',
                'link_attributes' => array(
                  'title' => $info['extra_phone'] ? $info['extra_phone']['title'] : null,
                  'target' => $info['extra_phone']['target'] ?? null
                )
              ));
            endif;
          ?>
          <?php if ( $info_title || $info_full_name || $info_phone || $info_email || $info_extra_email ) : ?>
            <div class="banner-with-contact-info-new__contact-item">
              <?php echo $info_title; ?>
              <?php echo $info_full_name; ?>

              <?php if ( $info['add_extra_phone'] && $info_extra_phone ) : ?>
                <div class="banner-with-contact-info-new__phone-wrapper">
                  <?php echo $info_phone; ?>
                  <span class="banner-with-contact-info-new__divider"> / </span>
                  <?php echo $info_extra_phone; ?>
                </div>
              <?php else : ?>
                <?php echo $info_phone; ?>
              <?php endif; ?>

              <?php if ( $info['add_extra_email'] && $info_extra_email ) : ?>
                <div class="banner-with-contact-info-new__email-wrapper">
                  <?php echo $info_email; ?>
                  <span class="banner-with-contact-info-new__divider"> / </span>
                  <?php echo $info_extra_email; ?>
                </div>
              <?php else : ?>
                <?php echo $info_email; ?>
              <?php endif; ?>
            </div>
          <?php endif; ?>
				<?php endforeach; ?>		
      <?php endif; ?>
    </div>
  </div>
</section>