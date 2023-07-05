<?php
$posts = get_posts([
  'post_type'     => 'post',
  'posts_per_page'   => 2,
  'orderby' => 'rand',
  'post__not_in'   => [get_the_ID()]
]);
?>

<section class="other-posts">
  <div class="container">
    <h2 class="other-posts__title">Otros posts que podrían interesarte</h2>
    <div class="other-posts__inner">
      <?php foreach ($posts as $post) : ?>
        <a class="other-posts__item" href="<?php the_permalink($post->ID); ?>">
          <div class="other-posts__item-image">
            <?php echo get_the_post_thumbnail($post->ID); ?>
          </div>
          <div class="other-posts__item-content">
            <div class="other-posts__item-details">
              <?php echo get_the_date(null, $post->ID); ?> - <?php echo gt_get_post_view($post->ID); ?>
            </div>
            <h3 class="other-posts__item-title">
              <?php echo get_the_title($post->ID); ?>
            </h3>
            <div class="other-posts__item-text">
              <?php echo get_the_excerpt($post->ID); ?>
            </div>
          </div>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>