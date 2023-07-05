<?php

/**
 * Latest Posts Block Template.
 */

// Create id attribute allowing for custom 'anchor' value.
$id = 'latest-posts-' . $block['id'];
if (!empty($block['anchor'])) :
	$id = $block['anchor'];
endif;

// Create class attribute allowing for custom 'className' and 'align' values.
$className = 'block latest-posts';
if (!empty($block['className'])) :
	$className .= ' ' . $block['className'];
endif;
if (!empty($block['align'])) :
	$className .= ' align' . $block['align'];
endif;

// Load values and assing defaults.
$header = get_field('header');
$post_data = get_field('post_data');
$post_title_color = get_field('post_title_color');
$post_count = get_field('post_count');
$select_posts = get_field('select_posts');
$button = get_field('button');

if ( $post_data == "latest" ) :
  $args = array(
    'post_type' => 'post', 
    'post_status' => 'publish',
    'posts_per_page' => $post_count, 
  );

  $query = get_posts( $args );
else:
  $query = $select_posts;
endif;

$header = Pacific_Helper::generate_header(array(
	'text' => $header['title'],
	'tag' => $header['tag'],
	'class' => 'latest-posts__title ',
));

$btn = Pacific_Helper::generate_acf_link(array(
  'link' => $button['link'],
  'class' => 'latest-posts__btn ' . $button['button_options'],
  'link_attributes' => array(
    'title' => $button['link'] ? $button['link']['title'] : null,
    'target' => $button['link']['target'] ?? null
  )
));
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="container">
    <?php echo $header; ?>
    <div class="latest-posts__post-wrapper">
      <?php if ( $query ) : ?>
        <?php foreach( $query as $post ): ?>
          <?php 
            $permalink = get_permalink( $post->ID );
            $title = get_the_title( $post->ID );
            $thumbnail_id = get_post_thumbnail_id( $post->ID );
            $post_date = get_the_date('d F, Y', $post->ID);
            $post_date_translated = date_i18n('d F, Y', strtotime( $post_date ));
            $post_content = get_the_content( null, false, $post->ID );
            $trimmed_content = wp_trim_words($post_content, 15);
            $post_views = get_post_meta($post->ID, 'post_views_count', true);
          ?>
          <div class="latest-posts__post-item">
            <div class="latest-posts__image-wrapper">
              <?php echo wp_get_attachment_image($thumbnail_id, 'latest-posts'); ?>
            </div>
            <div class="latest-posts__content-wrapper">
              <div class="latest-posts__post-date">
                <?php echo $post_date_translated; ?>
                <span> - VISITAS: </span>
                <?php echo $post_views; ?>
              </div>
              <a 
                href="<?php echo $permalink; ?>" 
                title="<?php echo $title; ?>" 
                class="latest-posts__post-title <?php echo $post_title_color; ?>"
              >
                <?php echo $title; ?>
              </a>
              <div class="latest-posts__post-content">
                <?php echo $trimmed_content; ?>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>
    <div class="latest-posts__button-wrapper">
      <?php echo $btn; ?>
    </div>
  </div>
</section>